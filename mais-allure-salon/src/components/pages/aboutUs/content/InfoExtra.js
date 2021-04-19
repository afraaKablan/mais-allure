import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'

class Info extends React.Component {
  render() {
    return (
      <div class={this.props.divImgClass}>
        <img src={this.props.imgSrc} class={this.props.imgClass} alt={this.props.imgAlt}/>
      </div>
    )
  }
}

export default Info;
