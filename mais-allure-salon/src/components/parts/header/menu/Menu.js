import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import RightMenuItems from './RightMenuItems';
import LeftMenuItems from './LeftMenuItems';

class Menu extends React.Component {
  render() {
    return (
      <div >
        <nav id="mainMenu" className="navbar navbar-expand-md bg-light navbar-light">
          <a className="navbar-brand" href="/"><span className="logoIcon">MaisAllure</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <RightMenuItems />
            <LeftMenuItems />
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
