import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselItems} from './CarouselItems'//myJson
import CarouselItem from './CarouselItem'
import { Carousel } from 'react-bootstrap';

class CarouselInner extends React.Component {

  render() {
    const carouselItems = CarouselItems.map((singleItem) =>
                      <CarouselItem carouselItem={singleItem} />
                    );

    console.log(carouselItems);
    return (
      <Carousel>
        {carouselItems}
      </Carousel>
    );
  }
}

export default CarouselInner
