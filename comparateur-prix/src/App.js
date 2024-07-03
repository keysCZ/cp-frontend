import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
// import Header from './components/Common/Header';
// import Footer from './components/Common/Footer';
import './assets/styles/App.css';
import ProductForm from "./components/Product/ProductForm";
import { ToastContainer } from 'react-toastify'; // Importer ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importer le CSS de la librairie
import axios from "axios";

function App() {
    return (
        <Router>
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/addproduct" element={<ProductForm />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
            {/*<Footer />*/}
            <ToastContainer /> {/* Ajouter le composant ToastContainer */}

        </Router>
    );
}

export default App;
