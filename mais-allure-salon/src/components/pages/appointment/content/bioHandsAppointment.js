import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../appointment';

class BioAppoint extends React.Component {
  render() {
    return (
      <div id='nailsGallery'>
        <Appointment 
          treat='bioHands'
          loggedInStatus = {this.props.loggedInStatus}
          user = {this.props.user}
          username = {this.props.username}
        />
     </div>
    );
  }
}

export default BioAppoint;
