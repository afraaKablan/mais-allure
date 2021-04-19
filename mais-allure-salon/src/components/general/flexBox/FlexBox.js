import React from "react";
import ReactDOM from 'react-dom';
import './FlexBox.css'

class FlexBox extends React.Component {
  render() {
    return (
      <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            {this.props.frontSide}
          </div>
          <div class="flip-box-back">
            {this.props.backSide}
          </div>
        </div>
      </div>
    );
  }
}

export default FlexBox;
