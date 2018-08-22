import React from 'react';
import burgerStyling from './Burger.css'
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => { 
    return(
        <div className={burgerStyling.Burger}>
            <Ingredient type="bread-top"/>
            <Ingredient type="cheese"/>
            <Ingredient type="meat"/>
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;