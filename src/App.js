import React, { Component } from 'react';
import './App.css';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { addProductsToStore } from './actions';


import products from './data/products.json';

import Home from './Home';
import Edit from './EditProduct';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(addProductsToStore(products));
  }


  render() {
    console.log(this.props);
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/edit-product' component={Edit} />
      </Router>
    );
  }
}

export default connect()(App);
