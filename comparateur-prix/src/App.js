import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
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
            </Routes>
            {/*<Footer />*/}
        </Router>
    );
}

export default App;
