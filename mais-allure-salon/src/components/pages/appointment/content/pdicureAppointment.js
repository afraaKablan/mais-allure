import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../appointment';

class PdicureAppointment extends React.Component {
  render() {
    return (
      <div id='pedicureApp'>
        <Appointment 
          treat='pedicure'
          loggedInStatus = {this.props.loggedInStatus}
          user = {this.props.user}
          username = {this.props.username}
        />
     </div>
    );
  }
}

export default PdicureAppointment;
