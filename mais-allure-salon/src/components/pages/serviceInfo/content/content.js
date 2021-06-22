import React from 'react';
import ReactDOM from 'react-dom';
import './content.css'
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
// import SalonServices from '../../../general/SalonServices/SalonServices'
import MyCalender from '../../../general/calender/MyCalender'

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
  }
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  } 
  render() {

    return (
      <div>
        <div className="infoContainer container-fluid pb-5 mr-0 ml-0 pr-0 pl-0">
           <div className='infoServe p-5 '>
              <h2 className='text-center'>טיפול צפורניים משקם</h2>
              <p className='text-right'>שיטת BIO SCULPTURE®-GEL ייחודית וראשונה מסוגה, הכוללת מניקור אירופאי יבש, סטרילי ובלתי פולשני (מותאם למדינות חמות), אבחון סוג הציפורן והתאמה אישית למבנה בעיה/שגרת היום, תוך שמירה על אפס התאכזרות לציפורן טבעית.</p>
              <p className='text-right'>ביו ג'ל אינו תחליף לק (לק ג'ל בבקבוק) אלא ג'ל טיפולי, המעניק פתרונות לכל סוגי הבעיות בציפורניים טבעיות ולכן אינו דומה לאף שיטה שקיימת בשוק.</p>
              <p className='text-right'>שיטת BIO הינה פילוסופיית בריאות רחבה, המטיפה לאפס התאכזרות לציפורן, העדר שיוף ציפורן, העדר מקשרים כימיים ו/או חומרים שנוסו על בעלי חיים.</p>
              <p className='text-right'>החברה מציעה מגוון שיטות, טיפולים ומגוון ג'לים בסיס המותאמים לאחר אבחון ונכונים לשגרה היום של הלקוחה ומצבה האישי.</p>
              <p className='text-right'>לצורך כך, מתקיימים השתלמויות וימי העשרה בסניפי מכללת BIO SCULPTURE בכל העולם, בסטנדרטים בינלאומיים מחמירים.</p>
              <p className='text-right'>התוצאות הטובות ביותר מתקבלות רק כשיודעים לעבוד עם המוצרים.</p>
              <h3 className='mt-5 text-center calClick' onClick={e => this.toggleModal()}>ניתן ללחוץ כאן לזימון תור </h3>
              {/* <MyCalender 
                  data = {this.props.data}
                  loggedInStatus = {this.props.loggedInStatus}
                  user = {this.props.user}
                  treat = {this.props.treat}  
                /> */}

           </div>

        <Modal 
            isOpen={this.state.isModalOpen} 
            toggle={e => this.toggleModal()}
            className = 'mymodal justify-content-center'
            overlayClassName = 'myoverlay'>
                
            <ModalHeader toggle={this.toggleModal}>
            </ModalHeader>
            <ModalBody>
                <div className="timeModalTitle">
                    <h4>לרשותך לוח שנה לבדיקת תורים פנויים</h4>
                </div>
                <MyCalender 
                  data = {this.props.data}
                  loggedInStatus = {this.props.loggedInStatus}
                  user = {this.props.user}
                  treat = {this.props.treat}  
                />
            </ModalBody>
          </Modal>

          
        </div>
      </div>
    );
  }
}
export default Content;
