import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import GalleryIndex from './content/GalleryIndex.js'
import Navbar from '../../parts/navbar/Navbar.js'
import './Gallery.css'

class Gallery extends React.Component {
  render() {
    return (
      <div id='home'>
        <Navbar />
        <GalleryIndex />
        <Footer />
      </div>
    );
  }
}

export default Gallery;
