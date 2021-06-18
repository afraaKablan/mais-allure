import React from 'react';
import ReactDOM from 'react-dom';
import {UploadImg} from './UploadImg'
// import Cart from '../../../general/Cart/Cart.js'
import SalonServices from '../../../general/SalonServices/SalonServices'
import './Content.css'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';


class Content extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalOpen: false
    }
  }

  //refresh current page to update changes
  refreshPage(){
    window.location.reload();
  }
  toggleServicesModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  } 
  
  onDeleteClicked = async (action,date,time,desc) => {
    const { cookies } = this.props;
    alert("שלום רב "+ this.props.user.username+", את כרגע עומדת לשנות תור לטיפול "+desc+" שנקבע לתאריך "+date+" בשעה "+time+", התור ייכנס לתוקף רק אחרי שתקבלי אישור על קביעת התור מבעלת העסק, תודה על ההבנה ולהתראות")
    
    //sending data to DB 
    let data = {
      "username": this.props.user.username,
      "appointmentID" : this.props.appointmetID,
    }
      //sending form data on button submition clicked 
    await fetch('/appointmentUser?Action='+ action , {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({ data: json }));

    alert( JSON.stringify(this.state.data))
    if (action === 'cancel')
          cookies.remove('appointmentID');

    this.refreshPage();//refresh page to update appointments      
  }
  
  onUpdateClicked = ()=>{
    this.toggleServicesModal();
  }

  ShowAndHideAppointments = () => {
    var x = document.getElementById('appointments');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  }

  render() {
    let Appointments = this.props.Appointments.map((singleItem)=>
      <div className=" row">
          <div className="hide">{singleItem.id}</div>
          <div className="Appline date1 col-2" >{singleItem.date}</div>
          <div className="Appline time1 col-2 click" >{singleItem.time}</div>
          <div className="Appline desc1 col-3">{singleItem.description}</div>
          <div className="Appline status1 col-2">{singleItem.status}</div>
          <div className="Appline click" 
               onClick={e=>
                this.onDeleteClicked('cancel',singleItem.date,singleItem.time, singleItem.description)} >
              <i class="fa fa-trash" aria-hidden="true"></i>
          </div>
          <div className="Appline click" 
               onClick={e=>
                this.onUpdateClicked()} >
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </div>
      </div>
    );
    return (
      <div className='containerProfile container-fluid'>
        <div className='col-12'>
          <UploadImg src={this.props.user.imgSrc} />
        </div>
        
  
        <div className="btnContainer">
            <button className = "plus-btn btn"
                  type = "button"
                  name = "button"
                  onClick = {() => this.ShowAndHideAppointments() }>
              <i class="fa fa-thumb-tack" aria-hidden="true"></i>            
            </button>
        </div>
  
        {/*         
        <div className="raw mt-5 pb-5 mr-0 ml-0 pr-0 pl-0">
            <div className='col-12 pt-5'>
              <SalonServices item={this.props.Services}  />
            </div>
        </div> */}

        <div id='appointments' className='container mt-5 bt-5' >
          {Appointments}
        </div>
      
        <Modal 
            isOpen={this.state.isModalOpen} 
            toggle={e => this.toggleServicesModal()}
            className = 'mymodal justify-content-center'
            overlayClassName = 'myoverlay'>
                
            <ModalHeader toggle={this.toggleServicesModal}>
            </ModalHeader>
            <ModalBody>
                <div className="timeModalTitle">
                    <h4>נא לבצע כניסה על מנת להשלים את תהליך קביעת התור</h4>
                </div>
                <SalonServices item={this.props.Services}  />
            </ModalBody>
        </Modal>


      </div>
    );
  }
}

export default withCookies(Content);
