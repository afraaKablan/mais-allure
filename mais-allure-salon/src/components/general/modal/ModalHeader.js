import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import foot from '../../../img/foot.jpg'

class ModalHeader extends React.Component {
  constructor(props) {
       super(props);
  }
  render() {
    return (
      <div class="modal-header">
        <h3 class={this.props.ctitle}>{this.props.title}</h3>
        <button type="button" class="close" data-dismiss="modal">×</button>
      </div>
    )
  }
}

export default ModalHeader;
