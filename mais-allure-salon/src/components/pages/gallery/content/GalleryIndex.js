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
    const categories = this.props.data.map((singleItem) =>
        <SideDivWithBtn
          sideData = {singleItem}
          isBtnIn ='0'
          innerElem='inDiv'
        />
    );
    return (
    <div>
      <div className='myGallery row mt-5 text-center'>
        {categories}
      </div>
    </div>
  );
  }
}

export default GalleryIndex;
