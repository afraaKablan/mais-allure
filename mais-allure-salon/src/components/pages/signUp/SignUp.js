import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Form from './content/Form.js'

import './SignUp.css'

class SignUp extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
      <div id='home'>
        <Header logoFlag = '0' />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default SignUp;
