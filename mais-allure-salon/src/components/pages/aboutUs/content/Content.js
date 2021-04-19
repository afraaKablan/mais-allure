import React from 'react';
import ReactDOM from 'react-dom';
import InfoRight from './InfoRight'
import InfoLeft from './InfoLeft'

import nailsP1 from '../../../../img/nailsPic1.png'
import nailsP2 from '../../../../img/nailsPic2.png'
import nailsP3 from '../../../../img/nailsPic3.png'
import nailsP4 from '../../../../img/nailsPic4.png'


import './Content.css';


class Content extends React.Component {
  render() {
    return (
      <div id="content" class="container mt-5">

        <InfoRight infoID='aboutUs' infoClass='row justify-content-center' id='info' class='col-6 mt-2' titleClass='title title2 shadow-lg p-3'
                title='MaisAllure ' contentClass='infoContent shadow p-5 '
                divImgClass='extra col-6 mt-2 pb-3 pl-3' imgClass='img-fluid rounded mt-4' imgAlt='nails' imgSrc={nailsP1}
                content="סלון היופי והאסתטיקה MaisAllure הבית החם שלנו, קיים מאז 2015 ומציע מגוון רחב של שירותים.
                  כל אחת מחברות הצוות בסלון הינה מוכשרת בעלת תעודה מוכרת בינלאומית.  אנו נותנים שירותי קוסמטיקה מכל הלב."
                />
        <InfoLeft infoID='aboutMe' infoClass='row justify-content-center mr-1' id='businessInfo' class='col-6 mt-2' titleClass='title  shadow-lg p-3'
                title='קצת עלינו ' contentClass='infoContent shadow p-5 '
                divImgClass='extra col-5 mt-2 pb-3 pl-3' imgClass='img-fluid rounded mt-4' imgAlt='nails' imgSrc={nailsP2}
                content="
                    קוראים לי מייס, אני אדריכלית נוף במקצוע, בעלת תעודת טכנאית ציפורניים מקצועית-
                    תעודה בינלאומית.  התחלתי במקצוע כתחביב מתוך תשוקה לאומנות שבדבר.
                    היום אני מדריכה בחברה העולמית ביו סקלפצ'ר ג'ל, מעבירה קורסים פרטיים וקבוצתיים ומכשירה בתחום ציפורניים.
                    ובעיקר מנהלת סלון MaisAllure המציע מגוון רחב של שירותי יופי ואסתטיקה. "
               />
        <InfoRight infoID='aboutServ' infoClass='row justify-content-center' id='servInfo' class='col-6 mt-2' titleClass='title shadow-lg p-3'
                title=' הפינוקים בסלון ' contentClass='infoContent shadow p-5 '
                divImgClass='extra col-6 mt-2 pb-3 pl-3' imgClass='img-fluid rounded mt-4' imgAlt='nails' imgSrc={nailsP3}
                content=" בסלון מתפנקים בשירותים הבאים:
                   טיפולי ציפורניים - ביו ג׳ל (הג׳ל היחיד בעולם שמטפל ומחזק ציפורניים באופן בריא טבעי ,מוליך חמצן מהציפורן ואל הציפורן ).
                    ציפורניים איבו ג׳ל ידיים ורגליים  - תחליף ללק ג׳ל רגיל ( לא מטפל אך לא מזיק - שומר על מצב הציפורן הקיים - מוליך חמצן ).  פדיקור ומניקור ריפואי, טיפול פטרת רפואי, טיפול סינדרלה לידיים, הרמת גבות \ריסים, עיסוי במבוקים, איפור מקצועי, מיקובליידינג \עיצוב גבות, קעקועי חינה"
                />
        <InfoLeft infoID='whyUs' infoClass='row justify-content-center mr-1 mt-4' id='why' class='col-6 mt-2' titleClass='title  shadow-lg p-3' hclass='blink_me'
                title='קצת עלינו ' contentClass='infoContent shadow p-5 '
                divImgClass='extra col-5 mt-2 pb-3 pl-3' imgClass='img-fluid rounded mt-4' imgAlt='nails' imgSrc={nailsP4}
                content="         ותק 6 שנים
                        ידע רחב
                        טכנאית ומדריכה מוכרת בחברה העולמית ביו ג׳ל ובשאר תחומי היופי
                        תמיכה מקצועית
                        זימון תורים בצורה נוחה ללקוחות "
                />


      </div>
    );
  }
}

export default Content;
