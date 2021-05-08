import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'
import InfoExtra from './InfoExtra'

export class InfoLeft extends React.Component {
    constructor(props) {
        super(props)
      }
    render() {
        return ( 
            <div id = { this.props.infoID }
                 class = { this.props.infoClass } >
                <InfoExtra item = {this.props.extraInfo}/> 
                <InfoCard item = {this.props.card}/>
            </div>
        )
    }
}
export default InfoLeft