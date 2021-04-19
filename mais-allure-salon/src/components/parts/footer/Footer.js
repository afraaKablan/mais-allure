import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from './SocialMedia.js'
import './Footer.css'
import FooterPic from './FooterPic'
class Footer extends React.Component {
  render() {
    return (
      <>
      <div className="row mb-5 mr-0 ml-0 ">
        <SocialMedia />
        <FooterPic/>
      </div>
      </>
    );
  }
}

export default Footer;
