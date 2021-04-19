import React from 'react';
import ReactDOM from 'react-dom';
import FormSignup from './FormSignup'
import './Form.css'
import FormGo2SignIn from './FormGo2SignIn'

class Form extends React.Component {
  render() {
    return (
      <div className='sign row'>
        <FormGo2SignIn />
        <FormSignup />
      </div>
    );
  }
}

export default Form;
