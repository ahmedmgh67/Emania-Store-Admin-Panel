import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import OrderApp from './OrdersPage'
import * as m from '@material-ui/core';
import ProductApp from './ProductsPage';
import NewProductPage from './NewProductPage';
import OrderDetailsPage from './OrderDetailsPage';




class App extends React.Component{
  render(){
    return(
      <div>
        <header className="title navbar navbar-collapse">
          <m.AppBar postion="static" >
            <m.Toolbar>
              <m.Typography align="center" variant="h3">Emania Store Admin Panel</m.Typography>
              <m.Button ><Link class="link"exact to="/orders">Orders</Link></m.Button>
              <m.Button ><Link class="link"exact to="/products">Products</Link></m.Button>
            </m.Toolbar>
          </m.AppBar>
        </header>
        <Switch>
          <Route exact path="/products" component={ ProductApp } />
          <Route exact path="/orders" component={ OrderApp } />
          <Route exact path="/products/new" component={ NewProductPage }/>
          <Route exact path="/orders/details" component={ OrderDetailsPage }/>
        </Switch>
      </div>
    )
  }
}

export default App;


