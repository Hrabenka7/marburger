import React from 'react';

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
            <p>Continue to check out?</p>
        </React.Fragment>
    );
};

export default orderSummary;