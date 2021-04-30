import React from 'react';
import ReactDOM from 'react-dom';
import { LeftListItems } from './ListItems' //myJson
import NavbarItem from './NavbarItem'

class LeftNavbarItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(`/nav/left`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        const leftmenuItems = this.state.data.map((singleItem) =>
            <
            NavbarItem item = { singleItem }
            />
        );

        return ( <
            ul className = "nav navbar-nav navbar-left justify-content-end col-md-3 mr-5 pr-5" > { leftmenuItems } <
            /ul>
        );
    }
}

export default LeftNavbarItems