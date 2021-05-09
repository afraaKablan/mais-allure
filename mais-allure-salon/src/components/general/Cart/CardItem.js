import React from 'react';
import ReactDOM from 'react-dom';
import './Cart.css'
import { evaluate } from 'mathjs'

class CardItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            value: 1,
            total: this.props.product.price,
            totalPrice: 0 

        }
        this.ref = React.createRef();
    }
    componentDidMount(){
        this.setState({ total: this.props.product.price  });
    }
    addFunction = (val,price,callback) => {
        if(val == '+')
            this.setState({ value: this.state.value + 1 });
        else if (val == '-')
        {
            this.setState({ value: this.state.value - 1 });
            (this.state.value == 0) ?
            this.setState({ value: 0 }):
                console.log(val);            
        }
        else{
            console.log("ERROR")
        }
        callback(price,val);
        // return this.state.value;
    };

    updateTotal = (price,val) => {
        if (val == '+'){
            this.setState({ total: (this.state.value + 1) * price  });
        }
        else
            this.setState({ total: (this.state.value - 1) * price  });

        this.setState({ totalPrice: this.state.total + this.state.totalPrice  });
    }

    getTotalPrice = () => {
        return this.state.totalPrice
    }

    
    subFunction = (val) => {
        this.setState({ value: this.state.value - 1 });
        (this.state.value == 0) ?
        this.setState({ value: 0 }):
            console.log(val);
    }
    render() {
        return (

            <div className = "item" >
                <div className = "buttons" >
                    <a className = "delete-btn" ><i class="fas fa-trash-alt"></i>  </a> 
                </div>

                <div className = "image" >
                    <a href = "#" >
                        <img className = 'imageStyle'
                            src = { this.props.product.imgSrc }
                            alt = ""/>
                    </a> 
                </div>

                <div className = "description" >
                    <a href = "#" >
                        <span > { this.props.product.desc } </span> 
                    </a>
                </div>

                <div className = "quantity" >
                    <button className = "plus-btn"
                            type = "button"
                            name = "button"
                            onClick = {() => this.addFunction('+',this.props.product.price,this.updateTotal) } >
                        <i class="fa fa-sort-asc"></i>

                    </button>

                    <span> { this.state.value } </span>

                    <button className = "minus-btn"
                            type = "button"
                            name = "button"
                            onClick = {() => this.addFunction('-',this.props.product.price,this.updateTotal) } >
                        <i class="fa fa-sort-down"></i>

                    </button> 
                </div>
                <div className="price row">
                    <div className = "total-price col-md-6" > { this.props.product.price } </div> 
                    <div className = "total-price total col-md-6" > { this.state.total } </div>                     
                </div>
            </div>
        );
    }
}

export default CardItem;