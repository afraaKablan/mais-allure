import React from 'react';
import ReactDOM from 'react-dom';

class Indicator extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return(
        <li data-target={this.props.target}
            data-slide-to={this.props.carouselItem.carouselindex}
            class={this.props.carouselItem.indicClass}>
        </li>
    );
  }
}

export default Indicator
