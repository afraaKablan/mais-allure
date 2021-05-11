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
  ShowAndHideCart = () => {
    var x = document.getElementById('cart');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  } 
  render() {
    return (
      <div className='containerProfile container'>
        <UploadImg src={this.props.user.imgSrc} />
        
        <div className="btnContainer">
            <img src=""/>
            <button className = "plus-btn btn"
                  type = "button"
                  name = "button"
                  onClick = {() => this.ShowAndHideCart() }>
                  <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
          
        
        
       
        <div id='cart'>
          <Cart user={this.props.user} products={this.props.products} />
        </div>


      </div>
    );
  }
}

export default Content;
