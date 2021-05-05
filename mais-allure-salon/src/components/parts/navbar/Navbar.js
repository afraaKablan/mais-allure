import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import RightNavbarItems from './RightNavbarItems';
import LeftNavbarItems from './LeftNavbarItems';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
          <div >
            <nav id = "mainMenu" className = "navbar navbar-expand-md bg-light navbar-light" >
              <a className = "navbar-brand" href = "/" > < span className = "logoIcon" > MaisAllure </span></a >
              <button className = "navbar-toggler" type = "button"  data-toggle = "collapse"
                data-target = "#collapsibleNavbar" >
              <span className = "navbar-toggler-icon" > </span> </button> 
              <div className = "collapse navbar-collapse"
              id = "collapsibleNavbar" >
              <RightNavbarItems data = { this.props.data.NavRight }/> 
              <LeftNavbarItems data = { this.props.data.NavLeft }/> 
              </div> 
            </nav> 
          </div>
        );
    }
}

export default Navbar;