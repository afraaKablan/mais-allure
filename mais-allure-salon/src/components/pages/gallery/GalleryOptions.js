import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import GalleryIndex from './content/GalleryIndex.js'
import './GalleryOptions.css'

class GalleryOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
  };
  }
  componentDidMount() {
    fetch(`/gallery`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
  render() {
    console.log(this.state.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
    return (
      <div id='gallery'>
        <Header data = { this.state.data.Nav }
                logoFlag = '0'
                withMyPic = '0'
                withLogo = '0'
                logoClass = 'headerGallery divBackImgOptionsGal row'
                pgTitle = 'גלריית תמונות'
                innerDivClass = 'inner'
         />

        <GalleryIndex data={this.state.data.Categories}/>
        <Footer data={this.state.data.Footer.Social}
                        contactData={this.state.data.Footer.ContactInfo[0]} />
      </div>
    );
  }
}

export default GalleryOptions;
