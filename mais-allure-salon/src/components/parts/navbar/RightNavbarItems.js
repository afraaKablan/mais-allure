import React from 'react';
import ReactDOM from 'react-dom';
import {RightListItems} from './ListItems'//myJson
import NavbarItem from './NavbarItem'

class RightNavbarItems extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    const rightmenuItems = RightListItems.map((singleItem) =>
                      <NavbarItem item={singleItem} />
                    );
    return (
      <ul className="navbar-nav col-md-7">
        {rightmenuItems}
      </ul>
    );
  }
}

export default RightNavbarItems
