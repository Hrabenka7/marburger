import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <React.Fragment>
                
                <Modal>
                    Something did not work
                </Modal>

            <WrappedComponent {...props}></WrappedComponent> 
           
            </React.Fragment>
        )
    };
}

export default errorHandler;