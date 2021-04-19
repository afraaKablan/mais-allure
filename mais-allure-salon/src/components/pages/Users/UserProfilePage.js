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
  }

  render() {
    return (
      <div >
        <Header logoFlag = '0' />
        <Content user={RegisterUsers[0]} products={ProductList} />
        <Footer />
      </div>
    );
  }
}

export default UserProfilePage;
