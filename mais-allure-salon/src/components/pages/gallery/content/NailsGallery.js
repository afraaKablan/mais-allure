import React from 'react';
import ReactDOM from 'react-dom';
import MyGallery from '../MyGallery'

class NailsGallery extends React.Component {
  render() {
    return (
      <div id='nailsGallery'>
        <MyGallery galleryType='nails' />
     </div>
    );
  }
}

export default NailsGallery;
