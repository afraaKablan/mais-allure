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
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  componentDidMount() {
    fetch(`/user/signIn`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  handleSuccessfulAuth(data){
    console.log("Sign in data" + data.user[0].username)
    this.props.handleLogin(data)
    this.props.history.push("/profile")
  }

  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0)
        return (<p> Ooops </p>)
        
    return (
      <div id='signIn'>
        <Header data = { this.state.data.Nav }
                logoFlag = '0' />

        
        <SignInPgElem data ={this.state.data.Content} 
          handleSuccessfulAuth={this.handleSuccessfulAuth} 
          // handleLogin = {this.handleLogin} 
        />
        <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo} />
      </div>
    );
  }
}

export default SignIn;
