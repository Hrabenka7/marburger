import React from 'react';
import backdropStyling from './Backdrop.css'

const backdrop = (props) => (
   props.show ? <div className={backdropStyling.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;