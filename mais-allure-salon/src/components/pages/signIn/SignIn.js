import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import SignInPgElem from './content/SignInPgElem.js'
import './SignIn.css'

class SignIn extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
        data: []
    };
  }
  componentDidMount() {
    fetch(`/user/signIn`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0)
        return (<p> Ooops </p>)
        
    return (
      <div id='signIn'>
        <Header data = { this.state.data.Nav }
                logoFlag = '0' />
        <SignInPgElem />
        <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo} />
      </div>
    );
  }
}

export default SignIn;
