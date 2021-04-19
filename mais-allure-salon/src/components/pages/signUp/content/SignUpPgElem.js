import React from 'react';
import ReactDOM from 'react-dom';
import FormSignup from './FormSignup'
import SideDivWithBtn from '../../../general/SideDivWithBtn/SideDivWithBtn'

class SignUpPgElem extends React.Component {
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
          outClass='form-content-right col-md-6 text-center'
          inClass='form-signin'
          hClass='welcome1'
          title=' ברוכה הבאה!'
          msgClass='msg'
          msg='יש לך חשבון כנסי עכשיו ותהני מהטבות'
          href='/signIn'
          classBtn='sign-in-btn'
          onClickTogle=''
          btnText='כניסה'
        />
        <FormSignup />
      </div>
    );
  }
}

export default SignUpPgElem;
