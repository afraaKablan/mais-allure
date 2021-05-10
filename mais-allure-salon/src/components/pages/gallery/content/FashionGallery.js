import React from 'react';
import ReactDOM from 'react-dom';
import MyGallery from '../MyGallery'

class FashionGallery extends React.Component {
  render() {
    return (
      <div id='fashionGallery'>
        <MyGallery galleryType='fashion' />
      </div>
    );
  }
}

export default FashionGallery;
