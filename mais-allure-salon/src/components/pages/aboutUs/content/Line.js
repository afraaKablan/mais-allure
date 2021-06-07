import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'
import InfoExtra from './InfoExtra'

class Line extends React.Component {
    constructor(props){
        super(props)

    }

  render() {
    console.log("tRGET"+this.props.data.target);
    console.log("MODULO TARGET" + parseInt(this.props.data.target) %2 === 0);
    return (
      (parseInt(this.props.data.target) %2 === 0 )?(

        <div class='row justify-content-center mr-1 aboutLine pt-5'>
            <InfoExtra item = {this.props.data}/> 
            <InfoCard item = {this.props.data}/>
            
        </div>
        ):
        (
          <div class = 'row justify-content-center mr-1 aboutLine pt_5'>
                <InfoCard item = {this.props.data}/>
                <InfoExtra item = {this.props.data}/> 
                
          </div>
        )

    )
  }
}

export default Line;
