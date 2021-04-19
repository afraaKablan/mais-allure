import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css'
import { Button,Carousel } from 'react-bootstrap';
import CarouselInner from './CarouselInner'
import {CarouselItems} from './CarouselItems'//myJson
import CarouselItem from './CarouselItem'

class MyCarousel extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    const carouselItems = CarouselItems.map((singleItem) =>
                      <CarouselItem carouselItem={singleItem} />
                    );

    console.log(carouselItems);
    return (
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="img/clothes.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="img/students.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/friends.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;
