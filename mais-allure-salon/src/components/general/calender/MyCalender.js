import React from "react";
import './MyCalender.css'
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import Content from './Content/Content'

class Calender extends React.Component {
    months = ["January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ];    
  constructor(props){
    super(props);
    this.state = {
        date: new Date(),
        month: new Date().getMonth(),
        Prevdays: "",
        days: "",
        nextD: "",
        dateView: "",
        flag:0,
        dateIndex : null,
        isModalOpen: false,
        appointments : this.props.data.Appointments

    };
    this.toggleModal = this.toggleModal.bind(this)

  }

  toggleModal(index) {
    this.setState({
        dateIndex : index,
        isModalOpen: !this.state.isModalOpen
    });
  } 

  renderCalender = (getDate) =>{
    this.setState({dateView : new Date().toDateString(),
                   date: getDate}) 
    let daysArray =[];
    let prevDays = [];
    let nextdays = [];
    let lastDay = new Date( getDate.getFullYear(), getDate.getMonth() + 1,0).getDate();
    let prevLastDay =  new Date( getDate.getFullYear(), getDate.getMonth(),0).getDate();
    let lastDayIndex =  new Date( getDate.getFullYear(), getDate.getMonth()+1 ,0).getDay();
    let nextDays = 7- lastDayIndex -1;
    console.log(getDate)

    for (let i=0; i< lastDay; i++){
        daysArray[i] = i+1 ; 
    }

    let getDateMonth = getDate.getMonth()+1;
    let getDateYear = getDate.getFullYear();
    let myFlag = 0 ;

    const days = daysArray.map((i) =>{
        myFlag = 0;
        if (!this.props.AppDates)
        {
            this.props.data.AppDates.forEach(element => {
         
                if (!(element.date.toString().trim().localeCompare(this.changeDateFotmat(i,getDateMonth,getDateYear).trim()))){
                    this.setState({dateIndex: element.app_id});
                    myFlag =1;  
                }
            });
        }
        else{
            alert('אין תורים פנוים להציע כרגע נא לפנות לטלפון 0506402951');
        }

        //flag = 1 means that for spesific date there is open appointments hours 
        if (i === new Date().getDate() && getDate.getMonth() === new Date().getMonth() && (!myFlag)){
            return (<div className='today'>{i}</div>);
        }
        else if(i === new Date().getDate() && getDate.getMonth() === new Date().getMonth() && (myFlag)){
            return (<div className='today exist' onClick={e => this.toggleModal(i)}>{i}</div>);
        }

        else if(myFlag){
            return (<div className='exist' onClick={e => this.toggleModal(i)}>{i}</div>)
        }
        else{
            return (<div>{i}</div>);
        }             
      });
    this.setState({days: days })

    //creating prev days from prev month
    getDate.setDate(1);
    let firsDayIndex = getDate.getDay();

    for (let i=firsDayIndex, j=0; i>0; i--){
        prevDays[j++] = prevLastDay - i+1;
    }
    const Prevdays = prevDays.map((i) =>{
        return (<div className='prev-date'>{i}</div>);                
    });
    this.setState({Prevdays: Prevdays })
    //next days 
    for (let j=1, i=0 ; j<= nextDays; j++){
        nextdays [i++]= j ;
    }
    const nextD = nextdays.map((i) =>{
        return (<div className='next-date'>{i}</div>);                
    });
    this.setState({nextD: nextD })
  }
  changeDateFotmat = (day,month,year) =>{
    if (day >= 1 && day <= 9 && month >= 1 && month <= 9)
        return ("0"+day+"/0"+month+"/"+year);
    else if (day >= 1 && day <= 9 && month > 9)
        return ("0"+day+"/"+month+"/"+year);
    else
        return (+day+"/0"+month+"/"+year);
 
  }
  nextClicked = async ()=>{
    let getDate = this.state.date;
    let curMonth = getDate.getMonth();
    await getDate.setMonth(curMonth + 1);
    await this.setState({date: getDate});
    await this.renderCalender(this.state.date)
    
  }
  prevClicked = async ()=>{
    let getDate = this.state.date;
    let curMonth = getDate.getMonth();
    await getDate.setMonth(curMonth - 1);

    await this.setState({date: getDate});
    await this.renderCalender(this.state.date)

  }

  componentDidMount(){
    this.renderCalender(this.state.date)
  }

  render() { 
    console.log(this.props.loggedInStatus)
    // console.log(this.props.user[0])

    let index= this.state.dateIndex;
    let getDateMonth = this.state.date.getMonth()+1;
    let getDateYear = this.state.date.getFullYear();
    let dateToView = this.changeDateFotmat(this.state.dateIndex,getDateMonth,getDateYear)
    return (
      <div id='calender' className='container'>
          <div className='calender'>
            <div className='month'>
                <i className='fas fa-angle-right next' 
                   onClick={this.nextClicked}>               
                </i>
                <div className='date'>
                    <h1>{this.months[this.state.date.getMonth()]}</h1>
                    <p>{new Date().toDateString()}</p>
                </div>
                <i className='fas fa-angle-left prev' 
                   onClick={this.prevClicked}>
                </i>
            </div>
            <div className='weekdays'>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className='days'>
                {this.state.Prevdays}
                {this.state.days}
                {this.state.nextD}

            </div>
          </div>

        <Modal 
            isOpen={this.state.isModalOpen} 
            toggle={e => this.toggleModal(this.state.dateIndex)}
            className = 'mymodal justify-content-center'
            overlayClassName = 'myoverlay'>
                
            <ModalHeader toggle={this.toggleModal}>
            </ModalHeader>
            <ModalBody>
                <div className="timeModalTitle">
                    <h4>שעות פנויות לתאריך</h4>
                    <h4>{this.state.dateIndex !== null &&  this.changeDateFotmat(this.state.dateIndex,getDateMonth,getDateYear).trim()}</h4>
                </div>
                <Content data={this.state.appointments} date={dateToView}/>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Calender;
