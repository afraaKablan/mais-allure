import React from 'react';
import ReactDOM from 'react-dom';
import './FormSignIn.css'
import {RegisterUsers} from '../../Users/RegisterUsers'
import UserProfilePage from '../../Users/UserProfilePage'
import InCorrectInfo from '../../Users/InCorrectInfo'
import FormItem from './FormItem.js'
class FormSignIn extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         data: [],
         username: '',
         password:'',
         usernameERROR: '',
         passwordERROR: '',
         isSubmitBtnClicked: false,
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.onNameChange = this.onNameChange.bind(this);
       this.onPasswordChange = this.onPasswordChange.bind(this);
       this.component = '';
  }

  onNameChange(event) {
    this.setState({username: event.target.value});
  }
  onPasswordChange(event) {
      this.setState({password: event.target.value});
  }

  validate = () => {
    let usernameERROR = "";
    let passwordERROR = "";

    if (!this.state.username) {
      usernameERROR = "הכניסי שם משתמש";
    }

    if (!this.state.password){
      passwordERROR = "הכניסי סיסמה";
    }

    if(usernameERROR || passwordERROR ){
      this.setState({usernameERROR, passwordERROR});
      return false
    }
    return true;
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({isSubmitBtnClicked: true});
    let isValid = this.validate();
    if (isValid) {
      let user = this.state.username;
      console.log(this.state.username);
      let data = {
        "username": this.state.username,
        "password": this.state.password
      }
      //sending form data on button submition clicked 
      await fetch('/user/signInForm', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => this.setState({ data: json }));

      //get respond from server
      // const body = await response.text();
      const body = this.state.data
      this.setState({ dataResponse: body.msg });
      console.log("respond body" + body.user);

      // clear form
      this.setState(this.setState({username: ''}));
      this.setState(this.setState({password: ''}));
      this.setState(this.setState({usernameERROR: ''}));
      this.setState(this.setState({passwordERROR: ''}));
      this.setState(this.setState({isSubmitBtnClicked: false}));
      this.component = '';
      if (body.msg == 'OK')
        this.props.handleSuccessfulAuth(this.state.data)
    }
  };

  OnUserNameChange =async event =>{
        this.setState({ username: event.target.value });
  }
  render() {
      const formItems = this.props.formItems.map((singleItem) =>
        <FormItem item = {singleItem}/>
      );
      return (
        <div className='form-content-left col-md-6 text-center' >
          <div className='welcome'>
            <h3>
              {this.props.formExtra.subTitle}
            </h3>
          </div>
          <div className='createMsg'>
            <h2>
            {this.props.formExtra.title}
            </h2>
          </div>
          <form method='post' 
                action='/signInData' 
                className='form justify-content-center'>

            <div className='form-inputs'>
              <input
                id='username'
                type='text'
                name='username'
                className='form-input'
                value={this.state.username}
                placeholder='הכנס שם משתמש'
                onChange={this.onNameChange}
              />
              {this.state.usernameERROR && <p>{this.state.usernameERROR}</p>}

            </div>

            <div className='form-inputs'>
              <input
                id='password'
                type='password'
                name='password'
                className='form-input'
                placeholder='הכנס סיסמה'
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
              {this.state.passwordERROR && <p>{this.state.passwordERROR}</p>}

            </div>

            <div className='form-inputs'>
              <button
                  className='form-input-btn '
                  type='submit'
                  onClick={this.handleSubmit}>
                  כניסה
              </button>
            </div>
            <div className='form-inputs'>
                  <p>{this.state.dataResponse}</p>
            </div>      
            <p className='form-input-login p-3'>
                <a href='#'>{this.props.formExtra.extra} </a>
            </p>
          </form>
        </div>
    );
  }
}

export default FormSignIn;
