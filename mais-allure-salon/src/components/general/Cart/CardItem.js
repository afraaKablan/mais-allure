import React from 'react';
import ReactDOM from 'react-dom';
import './Cart.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <
            div className = "item" >
            <
            div className = "buttons" >
            <
            span className = "delete-btn" > < /span> <
            /div>

            <
            div className = "image" >
            <
            a href = "#" >
            <
            img className = 'imageStyle'
            src = { this.props.product.imgSrc }
            alt = "" / >
            <
            /a> <
            /div>

            <
            div className = "description" >
            <
            span > { this.props.product.desc } < /span> <
            /div>

            <
            div className = "quantity" >
            <
            button className = "plus-btn"
            type = "button"
            name = "button"
            onClick = {
                () => this.addFunction('+') } >
            +
            <
            /button>

            <
            p > { this.props.value } < /p>

            <
            button className = "minus-btn"
            type = "button"
            name = "button"
            onClick = {
                () => this.subFunction('-') } >
            -
            <
            /button> <
            /div>

            <
            div className = "total-price" > { this.props.product.price } < /div> <
            /div>
        );
    }
}

export default Cart;