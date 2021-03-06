import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from  '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'//small letter because it is not used in JSX

const INGREDIENTS_PRICES = {
    salad:0.5,
    bacon:1.2,
    cheese:1,
    meat:1.5
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        purchasable: false,
        purchaseModeOn: false,
        loading: false,
        error:false
    }

    // -------------- method for fetching data ------------------------ //
    componentDidMount () {
        console.log(this.props) // we can acces match property, routable project
        axios.get('https://marburger-m1.firebaseio.com/ingredients.json')
            .then( response => {
                this.setState({ingredients: response.data})
            })
            .catch (error => {
               this.setState({error: true});
            })
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
        // this.setState({loading: true})
        // //alert('Some alert text here')
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Marketa",
        //         address: {
        //             street: 'Av.Roma 456',
        //             zipCode: "08456" ,
        //             country: 'Spain'
        //         },
        //         email: "marketa@test.com"
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order) // .json only for FireBase
        //     .then(response => {
        //         this.setState({loading: false, purchaseModeOn: false})
        //     })
        //     .catch(error => {
        //         this.setState({loading: false, purchaseModeOn: false})
        //     })
        this.props.history.push('/checkout')

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
        let orderSummary = null;
        // ------- show error or spinner --------- //
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        // returns true if ingredient amount is 0 
        const nullIngredients = {
            ...this.state.ingredients
        };

        for(let key in nullIngredients) {
            nullIngredients[key] = nullIngredients[key] <= 0
        }
        

        // ------------- ingredients are not null (but loaded from FireBase) ----------- //
        if(this.state.ingredients) {
            burger = (
                <React.Fragment>
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
            orderSummary = <OrderSummary 
                        ingredients={this.state.ingredients} 
                        purchaseCanceled={this.purchaseCanceledHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>                        
        }
        if(this.state.loading) {
            orderSummary = <Spinner/>
        }
                

        return (
            <React.Fragment>
                <Modal show={this.state.purchaseModeOn} modalClosed={this.purchaseCanceledHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);