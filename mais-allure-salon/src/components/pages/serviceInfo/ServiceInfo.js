import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import './ServiceInfo.css'
import Content from './content/content'
class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
  
    componentDidMount() {
        fetch(`/serviceInfo?Treatment=bioHands`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
            
        return ( 
            <div >
                <Header data = { this.state.data.Nav } 
                    logoFlag = '0'
                />
                <Content 
                    data= {this.state.data.Content}
                    loggedInStatus = 'NOT_LOGGED_IN'
                    user = 'Guest'
                    treat = 'bioHands'  
                />
               
                <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo[0]} />            
            </div>
        );
    }
}

export default Products;