import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSumarry/CheckoutSummary'

class checkout extends Component {
    state={
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }


    render() {
        return (
            <div>
              <CheckoutSummary ingredients={this.state.ingredients}/>  
            </div>
        );
    }
}

export default checkout;