import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class GoogleMap extends React.Component {
  render() {
    return (
      <div class="gmap_canvas">
        <iframe
           width="300"
           height="150"
           id="gmap_canvas"
           src="https://maps.google.com/maps?q=sonol%20station%20beit%20jann&t=&z=13&ie=UTF8&iwloc=&output=embed"
           frameborder="0"
           scrolling="no"
           marginheight="0"
           marginwidth="0">
         </iframe>
         <a href="https://yggtorrent-fr.com"></a><br/>
         <a href="https://google-map-generator.com">map generator</a>
      </div>
    )
  }
}

export default GoogleMap;
