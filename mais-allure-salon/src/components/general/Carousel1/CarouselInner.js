import React from 'react';
import ReactDOM from 'react-dom';
import CarouselItem from './CarouselItem'
class CarouselInner extends React.Component {

  constructor(props)
  {
    super(props);
  }

  render() {
    const carouselItems = this.props.carouselItem.map((singleItem) =>
                      <CarouselItem carouselItem={singleItem} />
                    );

    console.log(carouselItems);
    return (
      <div class="carousel-inner">
        {carouselItems}
      </div>
    );
  }
}

export default CarouselInner
