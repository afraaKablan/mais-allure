import React from 'react';
import ReactDOM from 'react-dom';
import FormSignIn from './FormSignIn'
import './FormGo2SignUp.css'
import SideDivWithBtn from '../../../general/SideDivWithBtn/SideDivWithBtn'

class SignInPgElem extends React.Component {
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
      <div className='sign row'>
        <FormSignIn />
        <SideDivWithBtn
          isBtnIn ='1'
          outClass='form-content-right col-md-6 text-center'
          inClass='form-signin1'
          hClass='welcome1'
          title=' ברוכה הבאה!'
          msgClass='msg'
          msg='תצטרפי למועדון הלקוחות שלנו, ותהני מהטבות!'
          href='/signUp'
          innerElem='sign-in-btn'
          onClickTogle='{this.onBtnClicked.bind(this)}'
          btnText='הרשמה'
        />
      </div>
    );
  }
}

export default SignInPgElem;
