import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';



// ----- test e.g by removing ".json" from /orders.json in BurgerBuilder axios.post ----- //

const errorHandler = (WrappedComponent, axios) => {
    // anonymous class, never used just returned
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {
            // clear error whenever I send the request, error is not set up
            axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        errorConfirmed = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <React.Fragment>
                    
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                <WrappedComponent {...this.props}></WrappedComponent> 
            
                </React.Fragment>
            );
        };
    }
}

export default errorHandler;