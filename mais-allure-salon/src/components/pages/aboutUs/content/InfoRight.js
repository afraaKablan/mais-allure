import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'
import InfoExtra from './InfoExtra'

export class InfoRight extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
        <div id={this.props.infoID} 
             class={this.props.infoClass}>
          <InfoCard item = {this.props.card}/>
          <InfoExtra item = {this.props.extraInfo}/> 
        </div>
    )
  }
}

export default InfoRight;
