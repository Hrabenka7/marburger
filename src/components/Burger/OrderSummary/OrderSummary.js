import React, {Component} from 'react';
import summaryStyling from './OrderSummary.css'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return  (
                <li key={igKey}>
                     <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
           );
        } 
    );
    
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>Delitious marburger enhanced with: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to check out?</p>
                <button className={[summaryStyling.Button, summaryStyling.Danger].join(' ')} onClick={this.props.purchaseCanceled}>CANCEL</button>
                <button className={[summaryStyling.Button, summaryStyling.Success].join(' ')} onClick={this.props.purchaseContinue}>CONTINUE</button>
            </React.Fragment>
        )
    }

    
};

export default OrderSummary;

