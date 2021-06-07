import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../appointment';

class BioAppoint extends React.Component {
  render() {
    return (
      <div id='nailsGallery'>
        <Appointment treat='bioHands'/>
     </div>
    );
  }
}

export default BioAppoint;
