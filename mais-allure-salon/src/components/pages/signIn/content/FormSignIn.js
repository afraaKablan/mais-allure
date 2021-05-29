import React from 'react';
import ReactDOM from 'react-dom';
import './FormSignIn.css'
import {RegisterUsers} from '../../Users/RegisterUsers'
import UserProfilePage from '../../Users/UserProfilePage'
import InCorrectInfo from '../../Users/InCorrectInfo'

class FormSignIn extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         username: '',
         password:'',
         usernameERROR: '',
         passwordERROR: '',
         isSubmitBtnClicked: false,
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.component = '';
  }

  // onNameChange(event) {
  //     this.setState({username: event.target.value});
  // }
  // onPasswordChange(event) {
  //     this.setState({password: event.target.value});
  // }

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
      const response = await fetch('/user/signInForm', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      const body = await response.text();
      this.setState({ dataResponse: body });
      console.log("responddd"+this.state.dataResponse);

      // clear form
      this.setState(this.setState({username: ''}));
      this.setState(this.setState({password: ''}));
      this.setState(this.setState({usernameERROR: ''}));
      this.setState(this.setState({passwordERROR: ''}));
      this.setState(this.setState({isSubmitBtnClicked: false}));
      this.component = '';
    }
  };

  render() {
      return (
        <div className='form-content-left col-md-6 text-center' >
          <div className='welcome'>
            <h3>
              ברוכה השבה, כנסי ותהני מהטבות
            </h3>
          </div>
          <div className='createMsg'>
            <h2>
              כניסה לחשבון
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
                onChange={e => this.setState({ username: e.target.value })}
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
                onChange={e => this.setState({ password: e.target.value })}
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
            <p>{this.state.dataResponse}</p>

            <p className='form-input-login p-3'>
                <a href='#'> שכחת את הסיסמה? </a>
            </p>
          </form>
        </div>
    );
  }
}

export default FormSignIn;
