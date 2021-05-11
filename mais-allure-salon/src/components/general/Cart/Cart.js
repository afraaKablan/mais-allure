import React from 'react';
import ReactDOM from 'react-dom';
import CardItem from './CardItem'
import './Cart.css'
import { evaluate } from 'mathjs'

class Cart extends React.Component {
    final = 0;

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            totalPrice: 0,
        }
        this.handleCallback = this.handleCallback.bind(this);
        this.ref = React.createRef();
    }

    handleCallback = (childDate)=>{
        this.final = childDate;
        this.setState({totalPrice:childDate });
        console.log("totaal pricee"+ this.state.totalPrice)
        console.log("finaaaaaaaal "+this.final)
    }

    render() {
        var productsForUser = [];
        console.log(this.props.user.cart[0]);
        for (var j = 0; j < this.props.user.cart.length; j++) {
            for (var i = 0; i < this.props.products.length; i++) {
                if (this.props.products[i]['productId'] == this.props.user.cart[j]) {
                    productsForUser.push(this.props.products[i]);
                    this.final+=parseInt(this.props.products[i].price);
                }
            }
        }
   
        console.log(productsForUser);
        const cartProducts = productsForUser.map((singleProduct) =>
            <CardItem value = { this.state.value }
                     product = { singleProduct }
                     total = {this.final}
                     updateTotalChild = {this.handleCallback}/>
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
                        {this.final}
                    </div>
                </div>

            </div>
        );
    }
}

export default Cart;