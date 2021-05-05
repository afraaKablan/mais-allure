import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'

import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(`/home`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
            
        return ( 
        <div id = 'home' >
            <Header data = { this.state.data.Nav }
            logoFlag = '1'
            withMyPic = '1'
            withLogo = '1'
            logoId = 'logoImage'
            logoClass = 'container-fluid'/>
            <Content/>
            <Footer/>
        </div>
        );
    }
}

export default Home;