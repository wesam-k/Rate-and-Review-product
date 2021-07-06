import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Product from "./Product"
import ReviewForm from "../src/shared/components/ReviewForm"


import './App.css';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path='/home' exact>
       <Product/>
        </Route>
         <Route path='/reviewForm'>
        <ReviewForm/>
        </Route>
        <Route path='/' exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
    
  );
}


