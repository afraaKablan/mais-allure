import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import GalleryIndex from './content/GalleryIndex.js'
import Navbar from '../../parts/navbar/Navbar.js'
import './GalleryOptions.css'

class GalleryOptions extends React.Component {
  render() {
    return (
      <div id='home'>
        <Header
          logoFlag = '1'
          withMyPic = '0'
          withLogo = '0'
          logoClass = 'headerGallery divBackImgOptionsGal row'
          pgTitle = 'גלריית תמונות'
          innerDivClass = 'inner'
         />

        <GalleryIndex />
        <Footer />
      </div>
    );
  }
}

export default GalleryOptions;
