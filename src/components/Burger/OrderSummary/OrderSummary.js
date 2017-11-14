import React, {Component } from 'react'
import Wrap from '../../../hoc/Wrap';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('Order Summary will Update');
    }


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return (
                    <li key={key}>
                        <span style={{textTransform: 'capitalize'}} > {key} </span>
                        {this.props.ingredients[key]}
                    </li>
                );
            });

        return (
            <Wrap>
                <h3>Your Order</h3>
                <p>Delicious Burger with the following Ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong> Total Price: {this.props.totalPrice.toFixed(2)} </strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={'Danger'} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Wrap>
        );
    }

}

export default OrderSummary;