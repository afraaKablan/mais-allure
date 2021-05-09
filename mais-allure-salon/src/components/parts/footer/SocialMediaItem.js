import React from 'react';
import ReactDOM from 'react-dom';

class SocialMediaItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
          <div >
            <li id={this.props.item.id} className={this.props.item.className}>
                <a className={this.props.item.linkClass} 
                   href={this.props.item.linkHref}>
                    <i className={this.props.item.icon}></i>
                </a>
            </li>
          </div>
        );
    }
}

export default SocialMediaItem;