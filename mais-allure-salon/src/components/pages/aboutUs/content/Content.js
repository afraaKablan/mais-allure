import React from 'react';
import ReactDOM from 'react-dom';
import Line from './Line'
import './Content.css';


class Content extends React.Component {
  constructor(props) {
    super(props)    
  }
  render() {
    console.log("aboutUS data" + this.props.data)
    const aboutPageLine = this.props.data.map((singleItem) =>
      <Line infoIDR={singleItem.infoIDR}
            infoClassR={singleItem.infoClassR} 
            cardR= {singleItem.CardR}
            extraInfoR = {singleItem.ExtraR}
            infoIDL={singleItem.infoIDL}
            infoClassL={singleItem.infoClassL} 
            cardL= {singleItem.CardL}
            extraInfoL = {singleItem.ExtraL}
      />
    );
    return (
      <div id="content" class="container mt-5">
        {aboutPageLine}
      </div>
    );
  }
}

export default Content;
