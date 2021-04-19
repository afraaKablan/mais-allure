import React from 'react'
import ReactDOM from 'react-dom';
import './GalleryIndex.css'
import SideDivWithBtn from '../../../general/SideDivWithBtn/SideDivWithBtn'

class GalleryIndex extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
       };
  }
  onBtnClicked(event) {
      this.setState({isBtnClicked: !this.state.isBtnClicked})
  }
  render() {
    return (
    <div>
      <div className='myGallery row mt-5 mr-5 text-center'>
        <SideDivWithBtn
          isBtnIn='0'
          inClass='image-inner zoom nails col-md-3 mt-5 ml-5 mr-5'
          hClass='welcome1'
          title=' Nails!'
          href='/MyGallery'
          innerElem='inDiv'
        />
        <SideDivWithBtn
          isBtnIn='0'
          inClass='image-inner zoom fashion col-md-3 mt-5 ml-5 mr-5'
          hClass='welcome1'
          title=' Fashion!'
          href='#'
          innerElem='inDiv'
        />
        <SideDivWithBtn
          isBtnIn='0'
          inClass='image-inner zoom beauty col-md-3 mt-5 ml-5 mr-5'
          hClass='welcome1'
          title='  Beauty!'
          href='#'
          innerElem='inDiv'
        />
      </div>
    </div>
  );
  }
}

export default GalleryIndex;
