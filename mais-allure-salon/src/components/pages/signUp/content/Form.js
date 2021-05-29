import React from 'react';
import ReactDOM from 'react-dom';
import FormSignup from './FormSignup'
import SideDivWithBtn from '../../../general/SideDivWithBtn/SideDivWithBtn'
import './FormGo2SignIn.css'

class Form extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         isBtnClicked: false
       };
  }
  onBtnClicked(event) {
      this.setState({isBtnClicked: !this.state.isBtnClicked})
  }
  render() {
    return (
      <div className='sign row'>
        <SideDivWithBtn
          sideData = {this.props.data.SideData[0]}
          isBtnIn='1'
          msgClass='msg'
          innerElem='sign-in-btn'
          onClickTogle='{this.onBtnClicked.bind(this)}'
        />
        <FormSignup />
      </div>
    );
  }
}

export default Form;
