import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css'
import { Button,Carousel } from 'react-bootstrap';
import CarouselInner from './CarouselInner'
import CarouselIndicators from './CarouselIndicators'
class MyCarousel extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {

    return (
      <div id={this.props.carouselId} class="carousel slide mb-5" data-ride="carousel">
        <CarouselIndicators indictCarouselId={this.props.carouselId}  />
        <CarouselInner carouselItem={this.props.cariuselItems}/>

        <a class="carousel-control-prev" href={this.props.carouselId} data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href={this.props.carouselId} data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default MyCarousel;
