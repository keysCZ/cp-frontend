import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import CategoryList from './components/Category/CategoryList';
import CategoryDetail from './components/Category/CategoryDetail';
import StoreList from './components/Store/StoreList';
import StoreDetail from './components/Store/StoreDetail';
import Scanner from './components/Scanner/Scanner';
import FavoriteProducts from './components/Favorites/FavoriteProducts';
import FavoriteStores from './components/Favorites/FavoriteStores';
import Profile from './components/User/Profile';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './assets/styles/App.css';


function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/categories" exact component={CategoryList} />
          <Route path="/categories/:id" component={CategoryDetail} />
          <Route path="/stores" exact component={StoreList} />
          <Route path="/stores/:id" component={StoreDetail} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/favorites/products" component={FavoriteProducts} />
          <Route path="/favorites/stores" component={FavoriteStores} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
