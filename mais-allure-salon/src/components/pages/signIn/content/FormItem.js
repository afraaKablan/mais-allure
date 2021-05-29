import React from 'react';
import ReactDOM from 'react-dom';

class FormItem extends React.Component {
  constructor(props) {
       super(props);
  }
 
  render() {
    return (
        (this.props.item.elemType == 'input')?
        (
            <div className='form-inputs'>
            <input
              id={this.props.item.formItem_id}
              type={this.props.item.type}
              name={this.props.item.name}
              className={this.props.item.className}
            //   value={this.state.username}
              placeholder={this.props.item.placeholder}
              onChange={this.props.item.handleFunc}
            />
          </div>
        ):
      (
        //button item
        (this.props.item.elemType == 'button')?
        (
            <div className='form-inputs'>
                <button
                    className={this.props.item.className}
                    type={this.props.item.type}
                    onClick={this.props.item.handleFunc}>
                    {this.props.item.placeholder}
                </button>
            </div>
        ):
        (
            <li>  </li>
        )
      )
    );
  }
}

export default FormItem;
