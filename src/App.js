import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import WishList from './components/WishList';
import CreateWishlist from './components/CreateWishlist';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path="/" component={WishList} exact />
        <Route path="/edit/:id" component={CreateWishlist} />
        <Route path="/create" component={CreateWishlist} />
        <Route path="/user" component={CreateUser} />
      </div>

    </Router>
  );
}

export default App;
