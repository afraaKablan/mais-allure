import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

class ModalHeader extends React.Component {
  render() {
    return (
      <div class="modal-body text-center">
        <p>
          {this.props.data}
          <a href={this.props.linkUrl}><b><u>{this.props.link}</u></b></a><br/>
          <img class="img-fluid m-5" src={this.props.img}/>

        </p>
      </div>
    )
  }
}

export default ModalHeader;
