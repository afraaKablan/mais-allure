import React from 'react';
import ReactDOM from 'react-dom';
import './content.css'
import {Container, Row, Col } from 'react-bootstrap'
import SalonServices from '../../../general/SalonServices/SalonServices'
import Header from '../../../parts/header/Header.js'
import Footer from '../../../parts/footer/Footer.js'

class AppointmentsIndecies extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
    };
  }

  componentDidMount() {
    fetch(`/appointment`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0)
        return (<p> Ooops </p>)  
    return (
      <div className="mb-5">
        <Header data = { this.state.data.Nav }
                logoFlag = '0'
         />

        <div id="content" className="container-fluid mt-5 pb-5 mr-0 ml-0 pr-0 pl-0">
            <div className='container pt-5'>
              <SalonServices item={this.state.data.Services}  />
            </div>
        </div>
        <Footer data={this.state.data.Footer.Social}
                        contactData={this.state.data.Footer.ContactInfo[0]} />
      </div>
    );
  }
}
export default AppointmentsIndecies;
