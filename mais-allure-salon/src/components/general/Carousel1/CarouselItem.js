import React from 'react';
import ReactDOM from 'react-dom';

class CarouselItem extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return(
      <div className={this.props.carouselItem.itemClass}>
        <img src={this.props.carouselItem.src}
             alt={this.props.carouselItem.imgAlt}/>
        <div className='carousel-caption'>
          <h3 className='myCaptionTitle'>{this.props.carouselItem.captionTitle}</h3>
          <p className='myCaptionContent'>{this.props.carouselItem.captionContent}</p>
        </div>
      </div>
    );
  }
}

export default CarouselItem
