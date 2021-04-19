import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'
import './AboutUs.css'

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Header
          logoFlag='1'
          withMyPic='1'
          withLogo='1'
          logoId='logoImage'
          logoClass='container-fluid' />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
