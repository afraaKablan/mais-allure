import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from '../../../general/Carousel1/MyCarousel'
import './Content.css'
import {Container, Row, Col } from 'react-bootstrap'
import SalonServices from '../../../general/SalonServices/SalonServices'
import InfoCard from '../../../general/InfoCard/InfoCard'
import Modal from  '../../../general/modal/Modal'
// import foot from '../../../../img/foot.jpg'
// import {CarouselItems} from '../../../general/Carousel1/CarouselItems'//myJson
import { PopupWidget } from "react-calendly";

class Content extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    const homePageCard = this.props.data.Cards.map((singleItem) =>
            <InfoCard item = { singleItem }  />
    );

    return (
      <div>
        <div id="content" className="container-fluid mt-5 mr-0 ml-0 pr-0 pl-0">
            <div className='container'>
              <SalonServices item={this.props.data.Services}  />
            </div>
           
            <PopupWidget
               color="#00a2ff"
               text=" קבעי תור עכשיו"
               textColor="#ffffff"
               url="https://calendly.com/afraa-kablan/echg"
            />


          <MyCarousel carouselId='myCarousel' cariuselItems={this.props.data.Carousel} />

          <div id="specials" className="row justify-content-center animated bounce mt-5">
            {homePageCard}
          </div>

          <Modal item={this.props.data.Modal[0]} />
        </div>
      </div>
    );
  }
}
export default Content;
