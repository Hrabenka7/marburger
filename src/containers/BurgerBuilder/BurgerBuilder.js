import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 2,
        purchasable: false,
        purchaseModeOn: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const initPrice = this.state.totalPrice;
        const newPrice = initPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseCanceledHandler = () => {
        this.setState({purchaseModeOn: false})
    }

    purchaseHandler = () => {
        this.setState({purchaseModeOn: true})
    }

    purchaseContinueHandler = () => {
        alert('Some alert text here')
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // handles possible negative amount of an ingredient
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENTS_PRICES[type];
        const initPrice = this.state.totalPrice;
        const newPrice = initPrice - priceSubtraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }


    updatePurchasable(ingredients) {
        // array of strings
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    })
                    .reduce((currentSum, currentEl) => {
                        return currentSum + currentEl;
                    } , 0);
        
        this.setState({purchasable: sum > 0})
    }


    render () {
        // returns true if ingredient amount is 0 
        const nullIngredients = {
            ...this.state.ingredients
        }
        for(let key in nullIngredients) {
            nullIngredients[key] = nullIngredients[key] <= 0
        }


        return (
            <React.Fragment>

                <Modal show={this.state.purchaseModeOn} modalClosed={this.purchaseCanceledHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCanceled={this.purchaseCanceledHandler}
                    purchaseContinue={this.purchaseContinueHandler}/>
                </Modal>
                
                <Burger ingredients={this.state.ingredients}/>
                
                <Controls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={nullIngredients}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler} />
                    
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;