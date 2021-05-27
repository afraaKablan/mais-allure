import React from 'react';
import ReactDOM from 'react-dom';

class SalonItem extends React.Component {
  render() {
    return (
      <div class={this.props.item.classItem}>
        <a href={this.props.item.link}>
        <img
           class={this.props.item.classImg}
           id={this.props.item.id}
           alt={this.props.item.alt}
           src={this.props.item.src}/></a>
        <p class={this.props.item.classTitle}>{this.props.item.title}</p>
      </div>
    )
  }
}

export default SalonItem;
