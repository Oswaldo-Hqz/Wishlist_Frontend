import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

import Navigation from './components/Navigation';
import Landing from './components/Landing'
import WishList from './components/WishList';
import CreateWishlist from './components/CreateWishlist';
import CreateUser from './components/CreateUser';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation/>

        <div className="container p-4">
          <Route exact path="/" component={Landing} />
          <Route path="/" component={WishList} exact />
          <Route path="/edit/:id" component={CreateWishlist} />
          <Route path="/create" component={CreateWishlist} />
          <Route path="/user" component={CreateUser} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>

      </Router>
    </Provider>
  );
}

export default App;
