import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content'
import {RegisterUsers} from './RegisterUsers'
import {ProductList} from '../Products/content/ProductList'

class UserProfilePage extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
        data: []
    };
  }
  componentDidMount() {
    fetch(`/user/profile`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data)
    if (this.state.data.length == 0)
        return (<p> Ooops </p>)
        
    return (
      <div >
        <Header data = { this.state.data.Nav }
                logoFlag = '0' />
        <Content user={RegisterUsers[0]} products={ProductList} />
        <Footer />
      </div>
    );
  }
}

export default UserProfilePage;
