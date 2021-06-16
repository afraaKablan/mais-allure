import React from 'react';
import ReactDOM from 'react-dom';
import './Content.css'
import {Container, Row, Col } from 'react-bootstrap'
import SignIn from '../../../pages/signIn/SignIn'
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';


class Content extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props)
  {
    super(props);
    const { cookies } = props;

    this.state = {
      loggedInStatus: this.props.loggedInStatus,
      user: this.props.user,
      isModalOpen: false,
      msg : '',
      appoints : this.props.data,
      data: []
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  toggleSignModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  } 

  onDateClicked = async (id,date,time,desc) => {
    const { cookies } = this.props;

    // console.log("id clicked "+id)

    if (this.state.loggedInStatus == 'LOGGED_IN'){
      console.log("user status " + this.state.loggedInStatus)
      console.log("user info "+this.state.user.username)
      cookies.set('appointmentID', id, { path: '/'  });
      alert("שלום רב "+this.state.user.username+", את כרגע עןמדת לקבוע תור לטיפול "+desc+" לתאריך "+date+" בשעה "+time+", התור ייכנס לתוקף רק אחרי שתקבלי אישור על קביעת התור מבעלת העסק, תודה על ההבנה ולהתראות")
     
      //sending data to DB 
      let data = {
        "username": this.state.user.username,
        "appointmentID" : id
      }

      // console.log("Body App for user "+body);
      console.log("Body App for user "+data);

       //sending form data on button submition clicked 
      await fetch('/appointmentUser', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
      
      this.setState({
        msg: this.state.data
      })
      alert(this.state.msg);

    }
    else {
      this.toggleSignModal()  
    }
  }
  handleLogin (data){
    const { cookies } = this.props;

    cookies.set('username', data.user[0].username, { path: '/'  });
    cookies.set('password', data.user[0].password, { path: '/'  });
    cookies.set('Loggedinstatus','LOGGED_IN')
    
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      loggedInStatus: cookies.get('Loggedinstatus') ,
      user : {
                username: cookies.get('username'),
                password: cookies.get('password') 
      }
    });
  }
  render() {
    if (this.props.data.length == 0)
        return (<p> Ooops </p>)   
    
    let appoints = this.state.appoints; //Array of appointments
    let relDate = this.props.date; //date from MyCalender

    console.log("apppp content "+appoints[0].date.toString().trim());
    console.log("dateeeeeee"+relDate.trim())

    // Filter the appointment according to the recieved date (props.date) 
    // and after that map throw the relevant items 
    const Appionments = appoints.
      filter(function(obj) {
        return (!(obj.date.toString().trim().localeCompare(relDate.trim())));
      }).
      map((singleItem) =>
              <div className=" row">
                  <div className="hide">{singleItem.app_id}</div>
                  <div className="line date border border-top-0 col-4" >{singleItem.date}</div>
                  <div className="line time border border-top-0 col-4" onClick={e=>this.onDateClicked(singleItem.app_id,singleItem.date,singleItem.time, singleItem.description)} >{singleItem.time}</div>
                  <div className="line desc border border-top-0 col-4">{singleItem.description}</div>
                  {/* <div className="line border border-top-0 col-3"><button>בחרי תור זה</button></div> */}
              </div>
      );

    return (
      <div className="mb-5 content">    
        <div className='appoint m-5 p-5'>
            {Appionments}    
        </div>
        <Modal 
            isOpen={this.state.isModalOpen} 
            toggle={e => this.toggleSignModal()}
            className = 'mymodal justify-content-center'
            overlayClassName = 'myoverlay'>
                
            <ModalHeader toggle={this.toggleSignModal}>
            </ModalHeader>
            <ModalBody>
                <div className="timeModalTitle">
                    <h4>נא לבצע כניסה על מנת להשלים את תהליך קביעת התור</h4>
                </div>
                <SignIn 
                  handleLogin = {this.handleLogin}
                  isHome = 'false' />
            </ModalBody>
        </Modal>
      </div>
      
      
    );
  }
}
export default withCookies(Content);
