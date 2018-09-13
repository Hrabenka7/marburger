import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

// ----- test e.g by removing ".json" from /orders.json in BurgerBuilder axios.post ----- //

const withErrorHandler = (WrappedComponent, axios) => {
    // -------- anonymous class, never used just returned ----- //
    return class extends Component {
        state = {
            error: null
        }

        // ------ changed from componentDidMount because its needed to be loaded before Child Components ------- // 
        componentWillMount () {
            // -------- clear error whenever I send the request, error is not set up ------- //
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        // -----  execute when component is not required to prevent memory leaks ------ //
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
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

                <WrappedComponent {...this.props}></WrappedComponent>  {/* BurgerBuilder component */}
                </React.Fragment>
            );
        };
    }
}

export default withErrorHandler;