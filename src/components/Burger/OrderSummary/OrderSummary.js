import React from 'react'
import Wrap from '../../../hoc/Wrap';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}} > {key} </span>
                    {props.ingredients[key]}
                </li>
            );
        });

    return(
        <Wrap>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong> Total Price: {props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrap>
    )
};

export default OrderSummary;