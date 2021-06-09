import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class Modal extends React.Component {
  render() {
    return (
      <div class="modal fade" id={this.props.item.id}>
        <div class="modal-dialog modal-lg ">
          <div class="modal-content align-middle">

            <ModalHeader ctitle={this.props.item.ctitle} title={this.props.item.title} />
            <ModalBody linkUrl={this.props.item.linkUrl} img={this.props.item.img}  data={this.props.item.data}
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
