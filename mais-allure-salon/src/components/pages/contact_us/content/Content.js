import React from 'react';
import ReactDOM from 'react-dom';
import './Content.css';

class Content extends React.Component {
  render() {
    return (
      <div id="content" class="container mt-5">
        <div id="inner" class="row bg-light">
          <div id="formMsg" class="col-12 col-md-6 ml-3">
            <div class="formMsgContent shadow p-5 justify-content-center">
              <h3 class="detailsTitle"> כתבו לנו</h3>

              <form action="contactUs.html" class="needs-validation" novalidate>
                <div class="form-group">
                  <label for="issue">בחרי נושא פניה:</label>
                  <select id="issue" name="issue" class="form-control">
                    <option value="nails">ציפורניים</option>
                    <option value="epor">איפור</option>
                    <option value="resem">הרמת ריסים</option>
                    <option value="gabot">עיצוב גבות</option>
                    <option value="pdekur">פדיקור רפואי</option>
                    <option value="fashion">אופנה</option>
                    <option value="tzamot">עיצוב צמות</option>
                    <option value="spa">SPA</option>
                    <option value="resem"> אחר..</option>
                  </select>
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">זהו שדה חובה.</div>
                </div>

                <div class="form-group">
                  <input type="text" class="form-control" id="uname" placeholder="שם מלא" name="uname" required/>
                  <div class="valid-feedback">תקף.</div>
                  <div class="invalid-feedback">זהו שדה חובה.</div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="phnum" placeholder="מספר טלפון" name="phnum" required/>
                  <div class="valid-feedback">תקף.</div>
                  <div class="invalid-feedback">זהו שדה חובה.</div>
                </div>

                <div class="form-group">
                  <input type="text" class="form-control" id="mail" placeholder=" כתובת דואר אלקטרוני" name="mail" required/>
                  <div class="valid-feedback">תקף.</div>
                  <div class="invalid-feedback">זהו שדה חובה.</div>
                </div>

                <div class="form-group form-check">
                  <textarea class="form-control" placeholder="תוכן ההודעה" ></textarea>
                  <div class="valid-feedback"></div>
                  <div class="invalid-feedback">זהו שדה חובה.</div>
                </div>


                <button type="submit" class="btn btn-info">שלח</button>
              </form>
            </div>
          </div>

          <div id="details" class="col-12 col-md-6 ">
            <div class="detailsContent shadow p-5 justify-content-center">
              <span class="justify-content-end">
                  <h3 class="detailsTitle">לשירותכם תמיד:</h3>
                  סלון Mais Allure, בית ג'אן, ישראל <br/>
                  כניסה לכפר, בניין קופת חולים מאוחדת, קומה 2<br/> למפת הגעה לחצי  <a class="mapBtn" data-toggle="modal" data-target="#myModal"><b><u> כאן </u></b></a> <br/>
                  מספר טלפון: 0506402951<br/>
                  כתובת דואר אלקטרוני: afraa.kablan@gmail.com<br/>
              </span>
              <img src="img/callMe.png" class="img-fluid img-circle " />
            </div>
          </div>
        </div>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-lg text-center">
            <div class="modal-content ">

              <div class="modal-header">
                <h3 class="modal-title">מפת הגעה</h3>
                <button type="button" class="close" data-dismiss="modal">×</button>
              </div>

              <div class="modal-body">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                       width="600"
                       height="500"
                       id="gmap_canvas"
                       src="https://maps.google.com/maps?q=sonol%20station%20beit%20jann&t=&z=13&ie=UTF8&iwloc=&output=embed"
                       frameborder="0"
                       scrolling="no"
                       marginheight="0"
                       marginwidth="0">
                     </iframe>
                     <a href="https://yggtorrent-fr.com"></a><br/>
                    <a href="https://google-map-generator.com">map generator</a>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
