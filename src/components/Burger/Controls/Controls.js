/**
 *  Control panel for ingredients. Child element of BurgerBuilder.
 *  Props {disabled, ingredientAdded, ingredientRemoved, ordered, price, purchasable}
 */

import React from 'react';
import controlsStyling from './Controls.css'
import SingleControl from './SingleControl/SingleControl'


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]


const Controls = (props) => {
    return (
        <div className={controlsStyling.Controls}>
        <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            
            {/* // ----- Output SingleControl elements ------// */}
            {controls.map(currentEl => (
                <SingleControl 
                    key={currentEl.label}
                    label={currentEl.label}
                    added={() => props.ingredientAdded(currentEl.type)}
                    removed={() =>props.ingredientRemoved(currentEl.type)}
                    disabled={props.disabled[currentEl.type]}/>
            ))}
            
            <button className={controlsStyling.OrderButton} 
                // ---- button attribute disabled if purchasable is false ---- //
                disabled={!props.purchasable} 
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};

export default Controls;