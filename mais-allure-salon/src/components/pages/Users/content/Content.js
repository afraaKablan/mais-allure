import React from 'react';
import ReactDOM from 'react-dom';
import {UploadImg} from './UploadImg'
// import Cart from '../../../general/Cart/Cart.js'
import SalonServices from '../../../general/SalonServices/SalonServices'
import './Content.css'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
// import { slide as Menu } from 'react-burger-menu'

class Content extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  static appLength = 0;

  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalOpen: false,
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
    alert("שלום רב "+ this.props.user.username+", את כרגע עומדת לבטל תור לטיפול "+desc+" שנקבע לתאריך "+date+" בשעה "+time+"")
    
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

  refreshPage(){
    window.location.reload();
  } 

  userSignOut = () => {
    const { cookies } = this.props;

    cookies.remove('username');
    cookies.remove('password');
    cookies.remove('Loggedinstatus');
    cookies.remove('appointmentID');

    this.refreshPage();
  }
 
  render() {
    console.log("useeeeeeer "+this.props.user.username)
    let Appointments = this.props.Appointments.map((singleItem)=>
      <div className=" row">
          <div className="hide">{singleItem.id}</div>
          <div className="Appline date1 col-2" >{singleItem.date}</div>
          <div className="Appline time1 col-2 " >{singleItem.time}</div>
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
    this.appLength = Appointments.length;
    console.log("app length "+this.appLength)
    if(Appointments.length == 0){
        Appointments = <div> 
          <h3>          לא קיימים תורים להצגה</h3>
          {/* <h2>את מוזמנת לבחור שירות לקביעת תור</h2> */}
          <div >
            <SalonServices item={this.props.Services}  />
          </div>
        </div>
    }
    return (
    
      <div className='containerProfile container-fluid text-center'>
  
        <div className='col-12'>
          <UploadImg src={this.props.user.imgSrc} 
                     username={this.props.user.username}
          />
        </div>
        <div className='mt-2'>
          <h2 className='profileTitle'>{this.props.user.fname}  {this.props.user.lname}</h2>
          <p>{this.props.user.username}</p>
        </div>
  
        <div className="btnContainer">
          {/* appointments btn */}
            <button className = "appointBtn btn"
                  type = "button"
                  name = "button"
                  onClick = {() => this.ShowAndHideAppointments() }>
              <i class="fa fa-thumb-tack" aria-hidden="true"></i>            
            </button>

            {/* signOut btn */}
            <button className='signOutBtn btn'
                    onClick = {() => this.userSignOut() }
            >
              <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
  

        <div id='appointments' className='container-fluid mt-5 mr-5 bt-5 text-center' >
          <table id="customers">
            {Appointments}
          </table>
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
