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
        <FormSignIn 
          formItems ={this.props.data.FormItems} 
          formExtra = {this.props.data.FormExtra[0]}
          handleSuccessfulAuth = {this.props.handleSuccessfulAuth}
          // handleLogin = {this.props.handleLogin}  
        />
        <SideDivWithBtn
          sideData = {this.props.data.SideData[0]}
          isBtnIn ='1'
          msgClass='msg'
          innerElem='sign-in-btn'
          onClickTogle='{this.onBtnClicked.bind(this)}'
        />
      </div>
    );
  }
}

export default SignInPgElem;
