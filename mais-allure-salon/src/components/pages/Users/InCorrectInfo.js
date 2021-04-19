import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'

class InCorrectInfo extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
      <div id='signIn'>
        <Header logoFlag = '0' />
            errooorrrr

        <Footer />
      </div>
    );
  }
}

export default InCorrectInfo;
