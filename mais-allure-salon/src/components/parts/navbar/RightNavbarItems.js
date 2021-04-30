import React from 'react';
import ReactDOM from 'react-dom';
import { RightListItems } from './ListItems' //myJson
import NavbarItem from './NavbarItem'

class RightNavbarItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(`/nav/right`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }


    render() {
        const rightmenuItems = this.state.data.map((singleItem) =>
            <
            NavbarItem item = { singleItem }
            />
        );
        return ( <
            ul className = "navbar-nav col-md-7" > { rightmenuItems } < /ul>
        );
    }
}

export default RightNavbarItems