import React from 'react';
import ReactDOM from 'react-dom';
import './content.css'
import {Container, Row, Col } from 'react-bootstrap'
import SalonServices from '../../../general/SalonServices/SalonServices'

class Content extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    if (this.props.data.length == 0)
        return (<p> Ooops </p>)   
    
    let months = [1,2,3,4,5,6,7,8,9,10,11,12];
    let days = [1,7,14,21,28];

    const Appionments = this.props.data.Appointments.map((singleItem) =>
            <div className=" row">
                <div className="line border border-top-0 col-3">{singleItem.date}</div>
                <div className="line border border-top-0 col-3">{singleItem.time}</div>
                <div className="line border border-top-0 col-3">{singleItem.description}</div>
                <div className="line border border-top-0 col-3"><button>בחרי תור זה</button></div>
            </div>
    
    );

    const calender = days.map((step) =>
        <div className=" row">
            
        </div>
    ); 
    

    return (
      <div className="mb-5 content">    
        <div className='appoint m-5 p-5'>
            {Appionments}    
        </div>

        <div className='appoint m-5 p-5'>
            {calender}    
        </div>
      </div>
      
    );
  }
}
export default Content;
