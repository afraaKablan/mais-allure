import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import { PopupWidget } from "react-calendly";
import './Products.css'
import { ProductList } from './content/ProductList' //myJson
import ProdCard from '../../general/prodCard/ProdCard'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNailsChecked: true,
            isFashionChecked: true,
            isBeautyChecked: true,
            data: [],
            displayData: []
        };
        this.handleNailsChecked = this.handleNailsChecked.bind(this); // set this, because you need get methods from CheckBox
        this.handleFashionChecked = this.handleFashionChecked.bind(this); // set this, because you need get methods from CheckBox
        this.handleBeautyChecked = this.handleBeautyChecked.bind(this); // set this, because you need get methods from CheckBox
    }

    componentDidMount() {
        fetch(`/products`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    handleNailsChecked() {
        this.setState({ isNailsChecked: !this.state.isNailsChecked });
        console.log(this.state.isNailsChecked);
    }
    handleFashionChecked() {
        this.setState({ isFashionChecked: !this.state.isFashionChecked });
        console.log(this.state.isNailsChecked);
    }
    handleBeautyChecked() {
        this.setState({ isBeautyChecked: !this.state.isBeautyChecked });
        console.log(this.state.isNailsChecked);
    }

    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
            
        const products = this.state.data.Content.map((singleItem) =>
            <ProdCard item = { singleItem }
                      isNail = { this.state.isNailsChecked }
                      isFashion = { this.state.isFashionChecked }
                      isBeauty = { this.state.isBeautyChecked }
            />
        );
        return ( 
            <div >
                <Header data = { this.state.data.Nav } 
                    logoFlag = '1'
                    withMyPic = '0'
                    withLogo = '0'
                    logoClass = 'headerProducts divProdBackImg row'
                    pgTitle = 'קטלוג המוצרים שלנו'
                    innerDivClass = 'prodLogoInner footInner1' /
                >

                <PopupWidget color = "#00a2ff"
                    text = " קבעי תור עכשיו"
                    textColor = "#ffffff"
                    url = "https://calendly.com/afraa-kablan/echg" /
                >


                <div div class = "row mr-5" > 
                    { products } 
                </div>

                <Footer data={this.state.data.Footer.Social}
                  contactData={this.state.data.Footer.ContactInfo} />            
            </div>
        );
    }
}

export default Products;