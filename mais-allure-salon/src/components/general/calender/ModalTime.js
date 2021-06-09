import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Card, CardImg, CardText,
  CardBody, CardTitle, CardSubtitle, FormGroup, Input, Col, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Content from './Content/Content'
import Modal from 'react-modal'

class ModalTime extends Component {
    constructor(props){
      super(props);
      this.state={
        // AppointmentsList: this.props.appointments,
        myDate : null,
        isModalOpen: false
      }
      this.toggleModal = this.toggleModal.bind(this)
    }
  
    toggleModal(date) {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  
    render(){
      return(
        // this.state.AppointmentsList.map(appoint => (
          <div key={appoint.app_id} className="col-12 col-md-3 mb-4 rowCard" onClick={this.toggleModal}>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>{appoint.date}</ModalHeader>
                <ModalBody>
                    <Content data={this.props.data} date={this.props.date}/>
                </ModalBody>
              </Modal>
          </div>
    //     )) 
       );
    }
  }