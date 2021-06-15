import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
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
// import MyGallery from './components/pages/gallery/MyGallery'
import GalleryOptions from './components/pages/gallery/GalleryOptions'
import Products from './components/pages/Products/Products'
// import Calender from './components/general/calender/Calender'
import UserProfilePage from './components/pages/Users/UserProfilePage'
import NailsGallery from './components/pages/gallery/content/NailsGallery'
import FashionGallery from './components/pages/gallery/content/FashionGallery'
import AppointmentsIndecies from './components/pages/appointment/content/AppointmentsIndecies'
import BioAppoint from './components/pages/appointment/content/bioHandsAppointment'
// import MyCalender from './components/general/calender/MyCalender'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props){
    super(props);
    const { cookies } = props;

    this.state = {
      loggedInStatus: cookies.get('Loggedinstatus') || 'NOT_LOGGED_IN',
      user: {
              username: cookies.get('username') || 'Guest',
              password: cookies.get('password') || ''
      }
      // username: cookies.get('username') || 'Guest'
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin (data){
    const { cookies } = this.props;
    // let d = new Date();
    // d = d.setMonth(d.getMonth()+1);
    // console.log("dateeeeeee "+d)
    cookies.set('username', data.user[0].username, { path: '/'  });
    cookies.set('password', data.user[0].password, { path: '/'  });
    cookies.set('Loggedinstatus','LOGGED_IN')

    // this.setState({ username: cookies.get('username') });
    // console.log(data.user)
    this.setState({
      loggedInStatus: cookies.get('Loggedinstatus') ,
      user : {
                username: cookies.get('username'),
                password: cookies.get('password') 
      }
    });    
  }

  componentDidMount(){
    // const { cookies } = this.props;

    // cookies.remove('username');
    // cookies.remove('password');
    // cookies.remove('Loggedinstatus');
  }
  render() {
    const {loggedInStatus,user,username } = this.state;

    console.log("app state" + user);

    return (
      <main>
          <Switch>
              <Route 
                path="/"  
                exact
                render = {props => (
                  <Home {...props} 
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
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
                    loggedInStatus={this.state.loggedInStatus}
                    isHome = 'true' 
                  />
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
                    handleLogin = {this.handleLogin} 
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
export default withCookies(App);
