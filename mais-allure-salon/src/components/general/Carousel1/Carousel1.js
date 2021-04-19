import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css'
import { Button,Carousel } from 'react-bootstrap';
import CarouselInner from './CarouselInner'

class Carousel1 extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {

    return (
      <div id={this.props.carouselId} className="carousel slide mb-5" data-ride="carousel">
        <ul className='carousel-indicators'>
          {this.props.carouselIndicators}
        </ul>
        <div className='carousel-inner'>
          {this.props.carouselItems}
        </div>
        <a className="carousel-control-prev" href={this.props.carouselHref} data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href={this.props.carouselHref} data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Carousel1;
