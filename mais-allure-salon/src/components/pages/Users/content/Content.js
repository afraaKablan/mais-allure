import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../parts/header/Header.js'
import Footer from '../../../parts/footer/Footer.js'
import {UploadImg} from './UploadImg'
import Cart from '../../../general/Cart/Cart.js'
import {ProductList} from '../../Products/content/ProductList'
import SalonServices from '../../../general/SalonServices/SalonServices'
import './Content.css'

class Content extends React.Component {
  constructor(props)
  {
    super(props);
  }
  ShowAndHideCart = () => {
    var x = document.getElementById('appointments');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  } 
  render() {
    let Appointments = this.props.Appointments.map((singleItem)=>
      <div className=" row">
          <div className="hide">{singleItem.id}</div>
          <div className="line date border border-top-0 col-3" >{singleItem.date}</div>
          <div className="line time border border-top-0 col-3" onClick={e=>this.onDateClicked(singleItem.app_id,singleItem.date,singleItem.time, singleItem.description)} >{singleItem.time}</div>
          <div className="line desc border border-top-0 col-3">{singleItem.description}</div>
          <div className="line status border border-top-0 col-3">{singleItem.status}</div>

          {/* <div className="line border border-top-0 col-3"><button>בחרי תור זה</button></div> */}
      </div>
    );
    return (
      <div className='containerProfile container-fluid'>
        <div className='col-12'>
          <UploadImg src={this.props.user.imgSrc} />
        </div>
        
  
        <div className="btnContainer">
            <img src=""/>
            <button className = "plus-btn btn"
                  type = "button"
                  name = "button"
                  onClick = {() => this.ShowAndHideCart() }>
                  <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
  
{/*         
        <div className="raw mt-5 pb-5 mr-0 ml-0 pr-0 pl-0">
            <div className='col-12 pt-5'>
              <SalonServices item={this.props.Services}  />
            </div>
        </div> */}

        <div className='raw pt-5 mt-5 m-5'>
          <div id='col-12 appointments'>
            {Appointments}
          </div>
        </div>
       


      </div>
    );
  }
}

export default Content;
