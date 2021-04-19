import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../parts/header/Header.js'
import Footer from '../../../parts/footer/Footer.js'
import {UploadImg} from './UploadImg'
import Cart from '../../../general/Cart/Cart.js'
import {ProductList} from '../../Products/content/ProductList'

import './Content.css'

class Content extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div className='containerProfile container'>
        <UploadImg src={this.props.user.imgSrc} />
        <Cart user={this.props.user} products={ProductList} />

      </div>
    );
  }
}

export default Content;
