/**
 * menuToggle represents the burgermenu in the toolbar which appears on small screen size
 * receiving props from Toolbar {clicked}
 */

import React from 'react';
import style from './MenuToggle.css';

const menuToggle = (props) => {
    return (
        <div className={style.MenuToggle} onClick={props.clicked}>
        {/* this is the burger menu */}
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    );
};

export default menuToggle;