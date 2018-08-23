import React from 'react';
import controlsStyling from './Controls.css'

import SingleControl from './SingleControl/SingleControl'


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]


const Controls = () => {
    return (
        <div className={controlsStyling.Controls}>
            {controls.map(currentEl => (
                <SingleControl key={currentEl.label} label={currentEl.label}/>
            ))}
        </div>
    );
};

export default Controls;