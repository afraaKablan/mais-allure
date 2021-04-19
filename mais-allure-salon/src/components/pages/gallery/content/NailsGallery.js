import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../parts/header/Header.js'
import Footer from '../../../parts/footer/Footer.js'
import Gallery1 from './Gallery.js'
import Navbar from '../../../parts/navbar/Navbar.js'


class NailsGallery extends React.Component {
  render() {
    return (
      <div id='home'>
        <Navbar />
        <Gallery1 />
        <Footer />
      </div>
    );
  }
}

export default NailsGallery;
