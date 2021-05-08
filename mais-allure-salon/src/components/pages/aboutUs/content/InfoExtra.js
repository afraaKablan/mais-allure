import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'

class Info extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class={this.props.item.divImgClass}>
        <img src={this.props.item.extraImgSrc} 
             class={this.props.item.extraImgClass} 
             alt={this.props.item.extraAlt}/>
      </div>
    )
  }
}

export default Info;
