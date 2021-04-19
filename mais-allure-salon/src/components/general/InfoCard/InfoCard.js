import React from 'react';
import ReactDOM from 'react-dom';
import './InfoCard.css'

class InfoCard extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
        <div id={this.props.id} class={this.props.class}>
          <div class={this.props.titleClass}>
            <h4 class={this.props.hclass}>{this.props.title}</h4>
          </div>
          <div class={this.props.contentClass}>
            <span class="justify-content-center">
              {this.props.content}
            </span>
            <a data-toggle={this.props.toggle} data-target={this.props.target}><b><u> {this.props.more} </u></b></a>
            <img src={this.props.imgSrc} class={this.props.imgClass} alt={this.props.alt} id={this.props.imgId}/>
          </div>
        </div>
    )
  }
}

export default InfoCard;
