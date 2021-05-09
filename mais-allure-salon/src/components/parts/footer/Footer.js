import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from './SocialMedia.js'
import './Footer.css'
import FooterPic from './FooterPic'

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <div className="row mb-5 mr-0 ml-0 ">
        <SocialMedia data={this.props.data} 
                     contact={this.props.contactData}/>
        <FooterPic/>
      </div>
      </>
    );
  }
}

export default Footer;
