import React from 'react';
import menuStyling from './MenuToggle.css';

const menuToggle = (props) => {
    return (
        <div className={menuStyling.MenuToggle} onClick={props.clicked}>
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    );
};

export default menuToggle;