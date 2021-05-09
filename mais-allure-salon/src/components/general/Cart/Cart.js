import React from 'react';
import ReactDOM from 'react-dom';
import CardItem from './CardItem'
import './Cart.css'
import { evaluate } from 'mathjs'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            totalPrice: 0,
        }
        this.ref = React.createRef();
    }
    
    addFunction = (val) => {
        let result = evaluate(this.state.val * 100);
        this.setState({ value: this.state.value + 1 });

        console.log(this.state.result);
    };
    subFunction = (val) => {
        this.setState({ value: this.state.value - 1 });
        (this.state.value == 0) ?
        this.setState({ value: 0 }):
            console.log(val);
    }

    render() {
        var productsForUser = [];
        // alert(this.props.products[0]['productId']);
        console.log(this.props.user.cart[0]);
        for (var j = 0; j < this.props.user.cart.length; j++) {
            for (var i = 0; i < this.props.products.length; i++) {
                if (this.props.products[i]['productId'] == this.props.user.cart[j]) {
                    productsForUser.push(this.props.products[i]);
                }
            }
        }
        console.log(productsForUser);

        const cartProducts = productsForUser.map((singleProduct) =>
            <
            CardItem value = { this.state.value }
                     product = { singleProduct }
            />

        );
        
        return (

            <div className = "shopping-cart text-center" >
                <h3 className = 'title1' >
                  שלום רב  {this.props.user.name } זהו סל המוצרים שלך 
                </h3> 
                {cartProducts}

                <div className="final-price row">
                    <div className="final-title col-md-4">
                          סכ"ה לפני הנחה 
                    </div>
                    <div className="final col-md-4">
                        {this.state.totalPrice}
                    </div>
                </div>
                <div className="final-price row">
                    <div className="final-title col-md-4">
                          סכ"ה אחרי הנחה 
                    </div>
                    <div className="final col-md-4">
                        {this.state.totalPrice}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;