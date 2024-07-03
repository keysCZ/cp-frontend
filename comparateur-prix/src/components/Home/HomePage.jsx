import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Product/ProductList';
import '../../assets/styles/homepage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Bienvenue sur notre comparateur de prix en Guadeloupe</h1>
                <p>Scannez des produits et comparez les prix dans différentes enseignes.</p>
                <Link to="/products" className="cta-button">Voir les produits</Link>
                <Link to={`/addproduct`} className="cta-button">Ajouter un produit</Link>
            </header>
            <section className="featured-products">
                <h2>Produits en vedette</h2>
                <ProductList />
            </section>
        </div>
    );
}

export default HomePage;
