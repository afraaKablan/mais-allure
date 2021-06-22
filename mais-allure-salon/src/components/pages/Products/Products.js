import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import { PopupWidget } from "react-calendly";
import './Products.css'
import ProdCard from '../../general/prodCard/ProdCard'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch(`/products`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
            
        const products = this.state.data.Content.map((singleItem) =>
            <ProdCard item = { singleItem }/>
        );
        return ( 
            <div >
                <Header data = { this.state.data.Nav } 
                    logoFlag = '1'
                    withMyPic = '0'
                    withLogo = '0'
                    logoClass = 'headerProducts divProdBackImg row text-center'
                    pgTitle = 'קטלוג המוצרים שלנו'
                    innerDivClass = 'prodLogoInner footInner1' /
                >

                <PopupWidget color = "#00a2ff"
                    text = " קבעי תור עכשיו"
                    textColor = "#ffffff"
                    url = "https://calendly.com/afraa-kablan/echg" /
                >


                <div div class = "row mr-5 content-center pr-2" > 
                    { products } 
                </div>

                <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo[0]} />            
            </div>
        );
    }
}

export default Products;