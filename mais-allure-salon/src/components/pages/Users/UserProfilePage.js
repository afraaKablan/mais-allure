import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content'
import {RegisterUsers} from './RegisterUsers'
import {ProductList} from '../Products/content/ProductList'
import './UserProfilePage.css';

class UserProfilePage extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
        data: []
    };
  }
 

  componentDidMount() {
    fetch(`/user/profile?User=`+ this.props.user.username)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render() {
    // console.log(this.state.data)
    console.log(this.props.loggedInStatus)
    console.log("user from profile " + this.props.user.username)
    console.log("appointID from profile " + this.props.appointmet)

    // console.log(this.props.myProps)


    if (this.state.data.length == 0)
        return (<p> Ooops </p>)
         
    return (
      <div >
        <Header data = { this.state.data.Nav }
                logoFlag = '0' />
        <Content 
          user = {this.state.data.Content.Users[0]} 
          products = {this.state.data.Content.Products} 
          Services = {this.state.data.Content.Services}
          Appointments = {this.state.data.Content.Appointments}
        />
        <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo[0]} />
      </div>
    );
  }
}

export default UserProfilePage;
