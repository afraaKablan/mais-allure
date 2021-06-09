import React from 'react';
import ReactDOM from 'react-dom';
import './Content.css'
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
    
    let appoints = this.props.data; //Array of appointments
    let relDate = this.props.date; //date from MyCalender

    console.log("apppp content "+appoints[0].date.toString().trim());
    console.log("dateeeeeee"+relDate.trim())

    const Appionments = appoints.
      filter(function(obj) {
        return (!(obj.date.toString().trim().localeCompare(relDate.trim())));
      }).
      map((singleItem) =>
              <div className=" row">
                  {/* <div className="line border border-top-0 col-3">{singleItem.date}</div> */}
                  <div className="line border border-top-0 col-3">{singleItem.time}</div>
                  <div className="line border border-top-0 col-3">{singleItem.description}</div>
                  <div className="line border border-top-0 col-3"><button>בחרי תור זה</button></div>
              </div>
    );

    return (
      <div className="mb-5 content">    
        <div className='appoint m-5 p-5'>
            {Appionments}    
        </div>
      </div>
      
    );
  }
}
export default Content;
