import React from 'react';
import burgerStyling from './Burger.css'
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => { 
    // props : ingredients object [BurgerBuilder state]
    const tab = [];
    for (var obj in props.ingredients) {
            for (var i = 0; i< props.ingredients[obj]; i++) { //props.ingredients[obj] = amount of Ingredience
                tab.push(obj)
            }}
        const propsIngredients = tab.map((el, index) => <Ingredient key={index} type={el} />)
    
    return(
        <div className={burgerStyling.Burger}>
            <Ingredient type="bread-top"/>
                {propsIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;

/* ES6 approach

    const propsIngredients = Object.keys(props.ingredients).map(keyIng => {   //Object.keys (props.ingredients) = salad,bacon,cheese,meat    
        return[...Array(props.ingredients[keyIng])].map((_, i) => {
            return <Ingredient key={keyIng + i} type={keyIng} /> // key = "salad0", "salad1" ... 
        });
    });
 */