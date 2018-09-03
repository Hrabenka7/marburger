import React, { Component } from 'react';
import './App.css';
//components
import Layout from './containers/Layout/Layout'
//containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <BurgerBuilder></BurgerBuilder>
       </Layout>
      </div>
    );
  }
}

export default App;
