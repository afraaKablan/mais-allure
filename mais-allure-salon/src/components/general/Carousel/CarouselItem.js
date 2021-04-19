import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import classnames from 'classnames';

class CarouselItem extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return(
      <Carousel.Item interval={2000}>
        <img
          className= {classnames(this.props.carouselItem.classItem)}
          src={this.props.carouselItem.src}
          alt={this.props.carouselItem.imgAlt}
        />
        <Carousel.Caption>
          <h3>{this.props.carouselItem.captionTitle}</h3>
          <p>{this.props.carouselItem.captionContent}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default CarouselItem
