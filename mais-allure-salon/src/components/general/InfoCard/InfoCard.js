import React from 'react';
import ReactDOM from 'react-dom';
import './InfoCard.css'

class InfoCard extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
        <div id={this.props.item.id} class={this.props.item.class}>
          <div class={this.props.item.titleClass}>
            <h4 class={this.props.item.hclass}>{this.props.item.title}</h4>
          </div>
          <div class={this.props.item.contentClass}>
            <span class="justify-content-center">
              {this.props.item.content}
            </span>
            <a data-toggle={this.props.item.toggle} 
               data-target={this.props.item.target}>
              <b><u> {this.props.item.more} </u></b>
            </a>
            <img src={this.props.item.imgSrc} 
                 class={this.props.item.imgClass} 
                 alt={this.props.item.imgId}/>
          </div>
        </div>
    )
  }
}

export default InfoCard;

