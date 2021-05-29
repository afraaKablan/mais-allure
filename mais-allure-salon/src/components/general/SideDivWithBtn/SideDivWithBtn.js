import React from 'react'
import ReactDOM from 'react-dom';

class SideDivWithBtn extends React.Component {
  constructor(props) {
       super(props);
  }

  render() {
      // console.log(this.props.sideData)
      return (
      (this.props.isBtnIn == 1)?
      (
        <div className={this.props.sideData.class}>
          <div className={this.props.sideData.titleClass}>
            <h1 className={this.props.sideData.hclass}>{this.props.sideData.title} </h1>
            <p className={this.props.msgClass}>{this.props.sideData.content}</p>
            <a href={this.props.sideData.linkUrl} >
              <button
                  className={this.props.innerElem}
                  type='button'
                  onClick={this.props.onClickTogle}>
                  {this.props.sideData.more}
              </button>
            </a>
          </div>
        </div>):
        (
          <div className={this.props.sideData.class}>
            <a href={this.props.sideData.linkUrl}>
              <div className={this.props.innerElem}>
                <h1 className={this.props.sideData.hclass}>{this.props.sideData.title} </h1>
              </div>
            </a>
          </div>
        )
    );
  }
}

export default SideDivWithBtn;
