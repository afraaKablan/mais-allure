import React from 'react';
import ReactDOM from 'react-dom';

class SocialMediaItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
          <div >
            <li id={this.props.item.menuItem_id} className={this.props.item.cItem}>
                <a className={this.props.item.cLink} 
                   href={this.props.item.url}>
                    <i className={this.props.item.icon}></i>
                </a>
            </li>
          </div>
        );
    }
}

export default SocialMediaItem;