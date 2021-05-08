import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'
import './AboutUs.css'

class AboutUs extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: []
      };
    }
    componentDidMount() {
        fetch(`/about`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
      console.log(this.state.data)
      if (this.state.data.length === 0)
          return (<p> Ooops </p>)    
      return (
        <div>
          <Header data = { this.state.data.Nav }
                  logoFlag='1'
                  withMyPic='1'
                  withLogo='1'
                  logoId='logoImage'
                  logoClass='container-fluid' />
          <Content data = { this.state.data.Content }/>
          <Footer />
        </div>
      );
  }
}

export default AboutUs;
