import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'
import './ContactUs.css'

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
  };
  }
  componentDidMount() {
    fetch(`/contact`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0){
        return (<p> Error </p>)
      }
    return (
      <div>
        <Header data = {this.state.data.Nav}
                logoFlag = '0'
        />
        <Content />
        <Footer data={this.state.data.Footer.Social}
                contactData={this.state.data.Footer.ContactInfo}/>
      </div>
    );
  }
}

export default ContactUs;
