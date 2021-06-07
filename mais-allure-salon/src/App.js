import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/pages/home/home'
import './components/pages/home/home.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/pages/contact_us/ContactUs'
import './components/pages/contact_us/ContactUs.css'
import AboutUs from './components/pages/aboutUs/AboutUs'
import './components/pages/aboutUs/AboutUs.css'
import SignUp from './components/pages/signUp/SignUp'
import './components/pages/signUp/SignUp.css'
import SignIn from './components/pages/signIn/SignIn'
import './components/pages/signIn/SignIn.css'
import MyGallery from './components/pages/gallery/MyGallery'
import GalleryOptions from './components/pages/gallery/GalleryOptions'
import Products from './components/pages/Products/Products'
import Calender from './components/general/calender/Calender'
import UserProfilePage from './components/pages/Users/UserProfilePage'
import NailsGallery from './components/pages/gallery/content/NailsGallery'
import FashionGallery from './components/pages/gallery/content/FashionGallery'
import AppointmentsIndecies from './components/pages/appointment/content/AppointmentsIndecies'
import BioAppoint from './components/pages/appointment/content/bioHandsAppointment'
import MyCalender from './components/general/calender/MyCalender'

class App extends React.Component {
  render() {
    return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contactUs" component={ContactUs} exact />
              <Route path="/about" component={AboutUs} exact />
              <Route path="/signUp" component={SignUp} exact />
              <Route path="/signIn" component={SignIn} exact />
              {/* <Route path="/MyGallery" component={MyGallery} exact /> */}
              <Route path="/NailsGallery" component={NailsGallery} exact />
              <Route path="/FashionGallery" component={FashionGallery} exact />
              <Route path="/gallery" component={GalleryOptions} exact />
              {/* <Route path="/calender" component={Calender} exact /> */}
              <Route path="/products" component={Products} exact />
              <Route path="/profile" component={UserProfilePage} exact />
              <Route path="/BioHands" component={BioAppoint} exact />
              <Route path="/Appointment" component={AppointmentsIndecies} exact />
              <Route path="/calender" component={MyCalender} exact />

              <Route component={Error}  />
          </Switch>
      </main>
    );
  }
}
export default App;
