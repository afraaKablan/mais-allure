import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import './MyGallery.css'
import Gallery from 'react-grid-gallery';
import { PopupWidget } from "react-calendly";

class MyGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    //sending parameter Category for node
    componentDidMount() {
        fetch(`/gallery?Category=`+ this.props.galleryType)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
      }

    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
            
        return ( 
            <div >
                <Header data = { this.state.data.Nav}
                        logoFlag = '1'
                        withMyPic = '0'
                        withLogo = '0'
                        logoClass = 'headerNailsGallery divBackImg2 row'
                        pgTitle = 'גלריית תומונות ציפורניים'
                        innerDivClass = 'galLogoInner' 
                />

                <PopupWidget color = "#00a2ff"
                            text = " קבעי תור עכשיו"
                            textColor = "#ffffff"
                            url = "https://calendly.com/afraa-kablan/echg" 
                />
                <div className = 'cont' >
                    <Gallery images = {this.state.data.Images}
                            margin = "15px"
                            backdropClosesModal = "true" 
                    />
                </div> 
            
            </div>
        );
    }
}

export default MyGallery;