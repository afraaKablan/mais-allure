import React from 'react';
import ReactDOM from 'react-dom';
import './ProdCard.css'

class ProdCard extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           showProCat: 0,
         };
  }
  render() {
    return (
      <div className="card col-md-3 m-3 prodCard text-center mr-5">
        <img className="card-img-top prodImg" src={this.props.item.imgSrc} alt={this.props.item.imgAlt} />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.prodName}</h4>
          <p className="card-text">{this.props.item.description}</p>
          <p className="price">{this.props.item.price}</p>
          {/* <a href='#' className='btn btn-secondary stretched-link'>הוספה לסל</a> */}
        </div>
      </div>
    )
  }
}

export default ProdCard;
