import React from 'react'
import ReactDOM from 'react-dom';
import './FormGo2SignIn.css'
class FormGo2SignIn extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         isBtnClicked: false
       };
  }
  onBtnClicked(event) {
      this.setState({isBtnClicked: !this.state.isBtnClicked})
  }
  render() {
      return (
      <div className='form-content-right1 col-md-6 text-center'>
        <div className='form-signin1'>
          <h1 className='welcome1'> ברוכה הבאה! </h1>
          <p className='msg'> יש לך חשבון כנסי עכשיו ותהני מהטבות</p>

          <a href="/signIn" ><button
              className='sign-in-btn'
              type='button'
              onClick={this.onBtnClicked.bind(this)}>
              כניסה
          </button></a>
        </div>
      </div>
    );
  }
}

export default FormGo2SignIn;
