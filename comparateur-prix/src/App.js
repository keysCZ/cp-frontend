import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/Home/HomePage';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
// import CategoryList from './components/Category/CategoryList';
// import CategoryDetail from './components/Category/CategoryDetail';
// import StoreList from './components/Store/StoreList';
// import StoreDetail from './components/Store/StoreDetail';
// import Scanner from './components/Scanner/Scanner';
// import FavoriteProducts from './components/Favorites/FavoriteProducts';
// import FavoriteStores from './components/Favorites/FavoriteStores';
// import Profile from './components/User/Profile';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import Header from './components/Common/Header';
// import Footer from './components/Common/Footer';
import './assets/styles/App.css';

function App() {
    return (
        <Router>
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/categories/:id" element={<CategoryDetail />} />
                <Route path="/stores" element={<StoreList />} />
                <Route path="/stores/:id" element={<StoreDetail />} />
                <Route path="/scanner" element={<Scanner />} />
                <Route path="/favorites/products" element={<FavoriteProducts />} />
                <Route path="/favorites/stores" element={<FavoriteStores />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            {/*<Footer />*/}
        </Router>
    );
}

export default App;
