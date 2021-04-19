import React from 'react';
import ReactDOM from 'react-dom';
import './Logo.css';
import logo from "../../../img/newLogo1.png"
import maislogo from "../../../img/mais.png"
import {Animated} from "react-animated-css";

class Logo extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      (this.props.withMyPic == 1 )?
      (
        (this.props.withLogo == 1 )?
        (
          <div id={this.props.logoId} className= {this.props.logoClass} >
            <Animated animationIn="pulse" isVisible={true}>
              <img className="img-fluid first col-6 ml-5" src={logo} alt="mais" />
            </Animated>

            <div className="myPic">
              <img className="img-fluid second rounded col-6" src={maislogo} alt="logo" />
            </div>
          </div>):
        (
          <div id={this.props.logoId} className= {this.props.logoClass}>
            <div className="myPic">
              <img className="img-fluid second rounded col-6" src={maislogo} alt="logo" />
            </div>
          </div>
        )
      ):
      (
        <div id = {this.props.logoId} className = {this.props.logoClass}>
            <div className = {this.props.innerDivClass}>
              <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
                <span>{this.props.pgTitle}</span>
              </Animated>
            </div>
        </div>
      )
    );
  }
}
export default Logo;
