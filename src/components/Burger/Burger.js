/** Child component Burger of parent Burger Builder
 *  props {Object -> Ingredients}
 */

import React from 'react';
import burgerStyling from './Burger.css'
import Ingredient from './Ingredient/Ingredient';

// ------- add amount to each ingredient ------ //
const burger = (props) => {
    console.log("Props", props)
    const arrayIngredients = [];
    for (var obj in props.ingredients) {
        for (var i = 0; i< props.ingredients[obj]; i++) { 
            arrayIngredients.push(obj)
        } 
    } 
    console.log("Array of Ingredients", arrayIngredients)
    
    // array of Objects with index key and type
    let mappedIngredients = arrayIngredients.map((currElement, index) => 
    <Ingredient key={index} type={currElement} />)
    console.log(mappedIngredients)
    
    //print <p>...</p> if there are no ingredients
    if (mappedIngredients.length === 0) {
        mappedIngredients = <p>Please start adding ingredients</p>
    }    
    
    return(
        <div className={burgerStyling.Burger}>
            <Ingredient type="bread-top"/>
                {mappedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;

/* ES6 alternative approach

    const burger = (props) => {
        const transformedIngredients = Object.keys(props.ingredients)
        .map(keyIng => {  
            return[...Array(props.ingredients[keyIng])]
            .map((_, i) => {
                return <Ingredient key={keyIng + i} type={keyIng} /> 
            });
        });
        .reduce((arr,el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }    

*/