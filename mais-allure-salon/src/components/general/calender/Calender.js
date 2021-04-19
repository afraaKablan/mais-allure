import React from "react";
import { PopupWidget } from "react-calendly"
import Calendar from "react-material-ui-calendar";
import { ResponsiveCalendar } from 'react-responsive-calendar'

class Calender extends React.Component {
  constructor(props)
  {
    super(props);
  }
  callBackFunction = value => {
    alert("The selection is  -> ", value);
  };
  render() {
    return (

      <div id='home'>
        <PopupWidget
           color="#00a2ff"
           text=" קבעי תור עכשיו"
           textColor="#ffffff"
           url="https://calendly.com/afraa-kablan/echg"
        />

        <div class="cal">
          <Calendar
          generalStyle={{
            maxWidth: "50%",
            margin: "5 auto",
            backgroundColor: "rgba(256,256,256,1)",
            height: "100%",
            overflow: "auto"
          }}
          light={true}
          selection={this.callBackFunction}
          mode="day"
          />


        </div>
      </div>
    );
  }
}

export default Calender;
