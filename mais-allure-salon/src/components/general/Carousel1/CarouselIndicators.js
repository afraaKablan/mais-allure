import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselItems} from './CarouselItems'//myJson
import Indicator from './Indicator'
class CarouselIndicators extends React.Component {

  render() {
    const carouselIndic = CarouselItems.map((singleItem) =>
                      <Indicator carouselItem={singleItem} carouselId={this.props.indictCarouselId} />
                    );
    return (
      <ul class="carousel-indicators">
        {carouselIndic}
      </ul>
    );
  }
}

export default CarouselIndicators
