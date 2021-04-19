import React from 'react'
import ReactDOM from 'react-dom';

class SideDivWithBtn extends React.Component {
  constructor(props) {
       super(props);
  }

  render() {
      return (
      (this.props.isBtnIn == 1)?
      (
        <div className={this.props.outClass}>
          <div className={this.props.inClass}>
            <h1 className={this.props.hClass}>{this.props.title} </h1>
            <p className={this.props.msgClass}>{this.props.msg}</p>
            <a href={this.props.href} >
              <button
                  className={this.props.innerElem}
                  type='button'
                  onClick={this.props.onClickTogle}>
                  {this.props.btnText}
              </button>
            </a>
          </div>
        </div>):
        (
          <div className={this.props.inClass}>
            <a href={this.props.href}>
              <div className={this.props.innerElem}>
                <h1 className={this.props.hClass}>{this.props.title} </h1>
              </div>
            </a>
          </div>
        )
    );
  }
}

export default SideDivWithBtn;
