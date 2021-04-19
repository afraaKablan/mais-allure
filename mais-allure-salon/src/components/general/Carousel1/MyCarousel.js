import React from 'react';
import ReactDOM from 'react-dom';
import Indicator from './Indicator'
import CarouselItem from './CarouselItem'
import Carousel1 from './Carousel1'
class MyCarousel extends React.Component {

  render() {
    const href='#'+this.props.carouselId;
    const carouselItems = this.props.cariuselItems.map((singleItem) =>
                      <CarouselItem carouselItem={singleItem} />
                    );

    const carouselIndic = this.props.cariuselItems.map((singleItem) =>
                      <Indicator carouselItem={singleItem} target={href}/>
                    );

    return (
      <Carousel1
        carouselId={this.props.carouselId}
        carouselHref={href}
        carouselIndicators={carouselIndic}
        carouselItems={carouselItems}/>
    );
  }
}

export default MyCarousel
