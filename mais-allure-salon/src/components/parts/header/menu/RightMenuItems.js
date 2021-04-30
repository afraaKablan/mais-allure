import React from 'react';
import ReactDOM from 'react-dom';
import { RightListItems } from './ListItems' //myJson
import MenuItem from './MenuItem'

class RightMenuItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(`/`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
        .then(console.log(this.state.data));
    }


    render() {
        const rightmenuItems = this.state.data.map((singleItem) =>
            <
            MenuItem item = { singleItem }
            />
        );
        return ( <
            ul className = "navbar-nav col-md-7" > { rightmenuItems } <
            /ul>
        );
    }
}

export default RightMenuItems