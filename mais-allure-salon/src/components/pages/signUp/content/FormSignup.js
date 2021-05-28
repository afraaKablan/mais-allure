import React from 'react';
import ReactDOM from 'react-dom';
import './SignUpForm.css'


class FormSignup extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         username: '',
         email: '',
         password:'',
         password2: '',
         isSubmitBtnClicked: false,
         usernameERROR: '',
         emailERROR: '',
         passwordERROR: '',
         password2ERROR: '',
         dataResponse: '',
       };
       this.handleSubmit = this.handleSubmit.bind(this);
  }
  onSubmitClicked(event){
    this.setState({isSubmitBtnClicked: true});
  }

  validate = () => {
    let emailERROR = "";
    let usernameERROR = "";
    let passwordERROR = "";
    let password2ERROR = "";
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!this.state.username) {
      usernameERROR = "הכניסי שם משתמש";

    }
    if (!this.state.email){
      emailERROR = "הכניסי כתובת דואר אלקטרוני";
    }else if (!pattern.test(this.state.email))
    {
      emailERROR = "כתובת דואר אלקטרוני לא חוקית";
    }
    if (!this.state.password){
      passwordERROR = "הכניסי סיסמה";

    } else if (this.state.password.length < 6) {
      passwordERROR = "סיסמה לא חוקית, הכניסי לפחות 6 תוים";
    }
    if (!this.state.password2){
      password2ERROR = "הכניסי סיסמה";
    } else if (this.state.password2 !== this.state.password) {
      password2ERROR = "סיסמאות לא תואמות";
    }

    if(usernameERROR || emailERROR || passwordERROR || password2ERROR ){
      this.setState({emailERROR, usernameERROR, passwordERROR, password2ERROR});
      return false
    }
    return true;
  };

  handleSubmit = async event => {
    event.preventDefault();
    let isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    let data = {
      "username": this.state.username,
      "email": this.state.email,
      "password": this.state.password,
      "password2": this.state.password2
    }
    //sending form data on button submition clicked 
    const response = await fetch('/user/signUpForm', {
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
      this.setState(this.setState({email: ''}));
      this.setState(this.setState({password: ''}));
      this.setState(this.setState({password2: ''}));
      this.setState(this.setState({usernameERROR: ''}));
      this.setState(this.setState({emailERROR: ''}));
      this.setState(this.setState({passwordERROR: ''}));
      this.setState(this.setState({password2ERROR: ''}));
      // this.setState(this.setState({dataResponse: ''}));
    }
  };

  render() {
      return (
      <div className='form-content-left col-md-6 text-center' >
        <div className='welcome'>
          <h3>
            תצטרפי עכשיו ותהני מהטבות!
          </h3>
        </div>
        <div className='createMsg'>
          <h2>
            צרי חשבון עכשיו
          </h2>
        </div>
        <form className='form justify-content-center'>
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
              id='email'
              type='text'
              name='email'
              className='form-input'
              placeholder='הכנס כתובת דואר אלקטרוני'
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            {this.state.emailERROR && <p>{this.state.emailERROR}</p>}
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
            <input
              id='password2'
              type='password'
              name='password2'
              className='form-input'
              placeholder=' הכנס סיסמה לאימות'
              value={this.state.password2}
              onChange={e => this.setState({ password2: e.target.value })}
            />
            {this.state.password2ERROR && <p>{this.state.password2ERROR}</p>}
          </div>
          <div className='form-inputs'>
            <button
                className='form-input-btn '
                type='button'
                onClick={this.handleSubmit}>
                צרי חשבון
            </button>
          </div>
          <p>{this.state.dataResponse}</p>
          <p className='form-input-login p-3'>
              יש לך חשבון קיים? לחץ
              <a href='#'> כאן </a>
              לכניסה
          </p>
         
        </form>
      </div>
    );
  }
}

export default FormSignup;
