import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'
import {contactInfo} from '../../parts/footer/ContactInfo.js'

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
        console.log("Homeeee props app" + this.props.loggedInStatus)
        console.log("Homeeee props app" + this.props.user.username)


        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
        
        return ( 
        <div id = 'home' >
            <Header data = { this.state.data.Nav }
                    logoFlag = '1'
                    withMyPic = '1'
                    withLogo = '1'
                    logoId = 'logoImage'
                    logoClass = 'container-fluid'
                    user={this.props.user.username}
            />
            <Content data = { this.state.data.Content }/>
            <Footer data={this.state.data.Footer.Social}
                    contactData={this.state.data.Footer.ContactInfo[0]}/>
        </div>
        );
    }
}

export default Home;