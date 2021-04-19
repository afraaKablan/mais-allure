import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class Modal extends React.Component {
  render() {
    return (
      <div class="modal fade" id={this.props.id}>
        <div class="modal-dialog modal-lg ">
          <div class="modal-content justify-content-center">

            <ModalHeader ctitle={this.props.ctitle} title={this.props.title} />
            <ModalBody linkUrl={this.props.linkUrl} img={this.props.img}  data={this.props.data}
            />

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
