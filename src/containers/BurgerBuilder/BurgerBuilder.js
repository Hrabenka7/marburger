import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls'

const INGREDIENTS_PRICES = {
    salad:0.5,
    bacon:1.2,
    cheese:1,
    meat:1.5
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 2
    }

    addIngredientHandler = (type) => {
        console.log('button was clicked')
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const initPrice = this.state.totalPrice;
        const newPrice = initPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }


    render () {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <Controls ingredientAdded = {this.addIngredientHandler}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;