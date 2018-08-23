import React from 'react';
import summaryStyling from './OrderSummary.css'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
                                .map(igKey => {
                                    return  <li key={igKey}>
                                                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                                            </li>
                                })
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>Delitious marburger enhanced with: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong> </p>
            <p>Continue to check out?</p>
            <button className={[summaryStyling.Button, summaryStyling.Danger].join(' ')} onClick={props.purchaseCanceled}>CANCEL</button>
            <button className={[summaryStyling.Button, summaryStyling.Success].join(' ')} onClick={props.purchaseContinue}>CONTINUE</button>
        </React.Fragment>
    );
};

export default orderSummary;

