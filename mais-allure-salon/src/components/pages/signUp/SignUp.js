import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Form from './content/Form.js'
import './SignUp.css'

class SignUp extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
        data: []
    };
  }
  componentDidMount() {
    fetch(`/user/signUp`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0)
        return (<p> Ooops </p>)
        
    return (
      <div id='signUp'>
        <Header data = { this.state.data.Nav }
                logoFlag = '0' />
        <Form />
        <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo} />
      </div>
    );
  }
}

export default SignUp;
