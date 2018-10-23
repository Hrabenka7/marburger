
import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// ------ statefull Containers ------- //
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/checkout'


class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <Route path="/" exact component={BurgerBuilder}/> 
         <Route path="/checkout" component={Checkout}/>
       </Layout>
      </div>
    );
  }
}

export default App;
