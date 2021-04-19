import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import GalleryIndex from './content/GalleryIndex.js'
import './MyGallery.css'
import Gallery from 'react-grid-gallery';
import { PopupWidget } from "react-calendly";
import {IMAGES} from './content/GalleryInner'
import {Animated} from "react-animated-css";

class MyGallery extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <div>
        <Header
          logoFlag = '1'
          withMyPic = '0'
          withLogo = '0'
          logoClass = 'headerNailsGallery divBackImg2 row'
          pgTitle = 'גלריית תומונות ציפורניים'
          innerDivClass='galLogoInner'
         />

        <PopupWidget
           color="#00a2ff"
           text=" קבעי תור עכשיו"
           textColor="#ffffff"
           url="https://calendly.com/afraa-kablan/echg"
        />
        <div className='cont'>
          <Gallery
            images = {IMAGES}
            margin = "15px"
            backdropClosesModal = "true"
          />
        </div>
      </div>
    );
  }
}

export default MyGallery;
