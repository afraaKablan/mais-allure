import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import Content from './content/Content.js'

import './home.css'

class Home extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div id='home'>
        <Header
          logoFlag='1'
          withMyPic='1'
          withLogo='1'
          logoId='logoImage'
          logoClass='container-fluid' />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
