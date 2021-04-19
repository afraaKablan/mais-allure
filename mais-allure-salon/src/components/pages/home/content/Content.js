import React from 'react';
import ReactDOM from 'react-dom';
import MyCarousel from '../../../general/Carousel1/MyCarousel'
import './Content.css'
import {Container, Row, Col } from 'react-bootstrap'
import SalonServices from '../../../general/SalonServices/SalonServices'
import InfoCard from '../../../general/InfoCard/InfoCard'
import Modal from  '../../../general/modal/Modal'
import foot from '../../../../img/foot.jpg'
import {CarouselItems} from '../../../general/Carousel1/CarouselItems'//myJson
import { PopupWidget } from "react-calendly";

class Content extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="content" className="container-fluid mt-5 mr-0 ml-0 pr-0 pl-0">
            <div className='container'>
              <SalonServices />
            </div>
            <PopupWidget
               color="#00a2ff"
               text=" קבעי תור עכשיו"
               textColor="#ffffff"
               url="https://calendly.com/afraa-kablan/echg"
            />

          <MyCarousel carouselId='myCarousel' cariuselItems={CarouselItems} />

          <div id="specials" className="row justify-content-center animated bounce mt-5">
            <InfoCard id="info" title=' פטרת ציפורניים' class='col-12 col-md-7 ml-3 mt-2'
                        titleClass='infoTitle shadow-lg p-2 ' contentClass='infoContent shadow-lg p-5'
                        toggle='modal' target='#infoModal' more=' למידע נוסף '
                        content='פטרת ציפורניים (אוניכומיקוזיס) היא נגע זיהומי שנגרם על ידי פטריה.
                              הנגע יכול להופיע על ציפורני הידיים או על ציפורני הרגליים ויכול לערב ציפורן אחת או יותר.
                              הסימפטומים עשויים לכלול שינוי צבע של הציפורן ללבן או לצהוב, עיבוי של הציפורן,
                              עיוות בצורת הציפורן והיפרדות שלה ממיטתה. מדובר בנגע שכיח שבמרבית המקרים אינו
                              מהווה סיכון בריאותי.'
                        />
            <InfoCard id="news" title='  חדש אצלנום' class='col-12 col-md-4 mt-2'
                      titleClass='newsTitle shadow-lg p-2  ' hclass='blink_me' content=' טיפול סינדרלה מפנק לכפות הידיים'
                      contentClass='newsContent shadow p-5 justify-content-center' imgSrc='img/sinderella.jpg'
                      imgClass='img-fluid img-circle mt-2' alt='sinderella' imgId='animated-img1' />
          </div>

          <Modal
            id='infoModal'
            ctitle='modal-title'
            title='פטרת ציפורניים'
            linkUrl='https://www.maccabi4u.co.il/37142-he/Maccabi.aspx#showData_123767' img={foot}
            data='  יש מספר סוגים של פטריות שיכולות לגרום לזיהום בציפורני כפות הרגליים. הטיפול כולל שמירה על היגיינה, ייבוש של כפות הרגליים, נעילת סנדלים ונעליים פתוחות ומאווררות ככל האפשר וטיפולים מקומיים כמו שימוש במשחות או לקים מיוחדים. באוכלוסיות מסויימות כמו חולי סוכרת לדוגמא, ייתכן שיהיה צורך בטיפול נוסף.
                                  הטיפול בפטרת ציפורניים עלול להיות ממושך, כי מדובר בנגע עיקש שעלול לשוב ולהופיע שנית לאחר תום הטיפול.

                                  סימפטומים אופייניים לפטרת ציפורניים
                                  עיבוי הציפורן
                                  שינוי צבע הציפורן ללבן, צהבהב או חום
                                  שברים בציפורן
                                  עיוות מראה הציפורן
                                  ריח לא נעים
                                  ניתוק של הציפורן מבסיסה (בשלב מתקדם)

                                  בדרך כלל הנגע מתחיל על קצוות הציפורן כנקודות לבנות או צהבהבות, שלעיתים יתפשטו ויתרחבו לכיוון מרכז הציפורן. כאשר הנגע מעמיק ומתבסס, הציפורן עלולה להפוך לשבירה ומעוותת ולמצב זה עלולים להתלוות כאב ונפיחות בעור שמסביב לציפורן.
                                  למרות שהזיהום הפטרייתי נוגע בעיקר לצד החזותי של הציפורן יש לזכור כי בטווח הארוך פטרת ציפורניים שאינה מטופלת עלולה להתפשט ולגרום לפטרת של כף הרגל ואף לזיהום חיידקי של העור.
                                  למידע המלא ניתן לבקר באתר:'
          />
        </div>
      </div>
    );
  }
}
export default Content;
