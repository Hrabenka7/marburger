import React from 'react';
import modalStyling from './Modal.css';

const modal = (props) => {
    return (
        <div className={modalStyling.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            {props.children}
        </div>
    );
};

export default modal;