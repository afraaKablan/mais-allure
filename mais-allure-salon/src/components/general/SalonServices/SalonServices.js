import React from 'react';
import ReactDOM from 'react-dom';
import SalonItems from './SalonItems'
import './SalonServices.css'

class SalonServices extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <SalonItems items={this.props.item} />
    );
  }
}
export default SalonServices;
