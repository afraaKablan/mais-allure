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
  constructor(){
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin (data){
    console.log(data.user)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user : data.user
    });    
  }

  render() {
    return (
      <main>
          <Switch>
              <Route 
                path="/"  
                exact
                render = {props => (
                  <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
                )} 
              />
              <Route path="/contactUs" component={ContactUs} exact />
              <Route path="/about" component={AboutUs} exact />
              <Route path="/signUp" component={SignUp} exact />
              <Route 
                path="/signIn" 
                // component={SignIn} 
                exact
                render = {props => (
                  <SignIn {...props} 
                    handleLogin = {this.handleLogin} 
                    loggedInStatus={this.state.loggedInStatus}/>
                )} 
               />
              {/* <Route path="/MyGallery" component={MyGallery} exact /> */}
              <Route path="/NailsGallery" component={NailsGallery} exact />
              <Route path="/FashionGallery" component={FashionGallery} exact />
              <Route path="/gallery" component={GalleryOptions} exact />
              {/* <Route path="/calender" component={Calender} exact /> */}
              <Route path="/products" component={Products} exact />
              <Route 
                path="/profile" 
                // component={UserProfilePage} 
                exact
                render = {props => (
                  <UserProfilePage {...props} 
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
                )} 
              />
              <Route 
                path="/BioHands" 
                //component={BioAppoint} 
                exact 
                render = {props => (
                  <BioAppoint {...props} 
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
                )} 
              />
              <Route 
                path="/Appointment" 
                // component={AppointmentsIndecies} 
                exact
                render = {props => (
                  <AppointmentsIndecies {...props} 
                    loggedInStatus={this.state.loggedInStatus}
                    user = {this.state.user}
                  />
                )}  
              />
              {/* <Route 
                path="/calender" 
                // component={MyCalender} 
                exact
                render = {props => (
                  <MyCalender {...props} 
                    loggedInStatus = {this.state.loggedInStatus}
                    user = {this.state.user}
                  />
                  
                )}   
              /> */}

              <Route component={Error}  />
          </Switch>
      </main>
    );
  }
}
export default App;
