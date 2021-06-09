import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/Header.js'
import Footer from '../../parts/footer/Footer.js'
import MyCalender from '../../general/calender/MyCalender.js'

import './appointment.css'

class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // fetch(`/appointment?Treatment=`+ this.props.treat)
        //     .then(res => res.json())
        //     .then(json => this.setState({ data: json }));
    }
    
    render() {
        console.log("appoint1111111 " + this.props.data)
        if (this.state.data.length == 0)
            return (<p> Ooops </p>)
       
        return ( 
        <div >
            {/* <Header data = { this.state.data.Nav}
                        logoFlag = '0'
            /> */}
            <MyCalender date={this.props.data.Content}/>
            {/* <Footer data={this.state.data.Footer.Social}
                    contactData={this.state.data.Footer.ContactInfo[0]}/> */}
        </div>
        );
    }
}

export default Appointment;