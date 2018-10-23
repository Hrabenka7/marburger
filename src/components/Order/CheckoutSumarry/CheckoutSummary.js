import React from 'react';
import Burger from '../../Burger/Burger';
import style from './CheckoutSummary.css'


const CheckoutSummary = (props) => {
    return (
        <div className={style.CheckoutSummary}>
            <h> Enjoy your meal!</h>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button className={[style.Button, style.Danger].join(' ')} onClick>CANCEL</button>
            <button className={[style.Button, style.Success].join(' ')} onClick>CONTINUE</button>
        </div>
    );
};

export default CheckoutSummary;