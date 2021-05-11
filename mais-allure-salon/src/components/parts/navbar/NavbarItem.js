import React from 'react';
import ReactDOM from 'react-dom';

class NavbarItem extends React.Component {
  render() {
    let dropdownItems="";
    if (this.props.item.level == 2){
      let dropitems = this.props.item.drop_items;
      dropdownItems = dropitems.map((singleItem) =>
                        <li><a href={singleItem.href}>{singleItem.title}</a></li>
                      );
    }
    return(
      //normal right menu item
     (this.props.item.level == 1)?
        (
          <li className={this.props.item.cItem}>
            <a className={this.props.item.cLink} href={this.props.item.url}>
            <i className={this.props.item.icon}></i>
              {this.props.item.title}
            </a>
          </li>
        ):
      (
      //dropdown menu item
      (this.props.item.level == 2)?
      (
          <li className={this.props.item.cItem}>
            <a className={this.props.item.cLink} data-toggle="dropdown" href={this.props.item.url}>
              {this.props.item.title}
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu text-right pr-2">
              {dropdownItems}
            </ul>
          </li>
        ):
        (
          <li>  </li>
        )
      )
    );
  }
}

export default NavbarItem
