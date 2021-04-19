import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import './SocialMedia.css'

class SocialMedia extends React.Component {
  render() {
    return (
      <div id="FOOTER" className="mt-5 ml-0 mr-0">
        <ul id="mediaBar" className="nav justify-content-center mt-4 mb-2">
          <li id="mail" className="nav-item media">
            <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li id="insta" className="nav-item media">
            <a className="nav-link" href="#"><i className="fab fa-whatsapp"></i></a>
          </li>
          <li id="whats" className="nav-item media">
            <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
          </li>
          <li id="facebook" className="nav-item media">
            <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
          </li>
        </ul>
        <div className='contact text-center'>
          <h5 className='addr'> סלון MaisAllure, בית ג'אן, כביש ראשי כניסה לכפר' </h5>
          <h5 >מספר טלפון: 0506402951 </h5>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
