import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import './SocialMedia.css'
import SocialMediaItem from './SocialMediaItem'

class SocialMedia extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    
    const medias = this.props.data.map((singleItem) =>
        <SocialMediaItem 
          item = { singleItem }
        />
    );

    return (
      <div id="FOOTER" className="mt-5 ml-0 mr-0">
        <ul id="mediaBar" className="nav justify-content-center mt-4 mb-2">
          {medias}
        </ul>
        <div className='contact text-center'>
          <h5 className='addr'>{this.props.contact.address}</h5>
          <h5 >{this.props.contact.phoneNum}</h5>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
