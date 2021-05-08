import React from 'react';
import ReactDOM from 'react-dom';
import InfoRight from './InfoRight'
import InfoLeft from './InfoLeft'

class Line extends React.Component {
    constructor(props){
        super(props)

    }

  render() {
    return (
      <div>
        <InfoRight infoID={this.props.infoIDR} 
                   infoClass={this.props.infoClassR} 
                   card = {this.props.cardR} 
                   extraInfo = {this.props.extraInfoR}
        />
        <InfoLeft  infoID={this.props.infoIDL} 
                   infoClass={this.props.infoClassL} 
                   card = {this.props.cardL} 
                   extraInfo = {this.props.extraInfoL}
        />
      </div>
    )
  }
}

export default Line;
