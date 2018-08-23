import React from 'react';
import modalStyling from './Modal.css';

const modal = (props) => {
    return (
        <div className={modalStyling.Modal}>
            {props.children}
        </div>
    );
};

export default modal;