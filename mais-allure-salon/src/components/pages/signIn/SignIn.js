import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import SignInPgElem from './content/SignInPgElem.js'
import './SignIn.css'

class SignIn extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
      <div id='signIn'>
        <Header logoFlag = '0' />
        <SignInPgElem />
        <Footer />
      </div>
    );
  }
}

export default SignIn;
