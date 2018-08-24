import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";
import logoStyling from "./Logo.css"



const logo = (props) => {
    return (
        <div className={logoStyling.Logo} style={{height: props.height, marginBottom: props.marginBottom}}>
            <img src={burgerLogo} alt="BurgerLogo"/>
        </div>
    );
};

export default logo;