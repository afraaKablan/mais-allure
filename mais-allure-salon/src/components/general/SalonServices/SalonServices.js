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
      <div>
        
        <div className="text-center mb-5">
          <h3 className='modal-title'>לחצי על השירות המבוקש לקביעת תור</h3>
        </div>
        <SalonItems items={this.props.item} />
      </div>
    );
  }
}
export default SalonServices;
