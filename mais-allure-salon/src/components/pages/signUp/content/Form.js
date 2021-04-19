import React from 'react';
import ReactDOM from 'react-dom';
import FormSignup from './FormSignup'
import SideDivWithBtn from '../../../general/SideDivWithBtn/SideDivWithBtn'
import './FormGo2SignIn.css'

class Form extends React.Component {
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
        <SideDivWithBtn
          isBtnIn='1'
          outClass='form-content-right1 col-md-6 text-center'
          inClass='form-signin1'
          hClass='welcome1'
          title=' ברוכה הבאה!'
          msgClass='msg'
          msg='יש לך חשבון כנסי עכשיו ותהני מהטבות!'
          href='/signIn'
          innerElem='sign-in-btn'
          onClickTogle='{this.onBtnClicked.bind(this)}'
          btnText='כניסה'
        />
        <FormSignup />
      </div>
    );
  }
}

export default Form;
