import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Pour les styles de la carte

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price} €</p>
                    <p className="product-stock">{product.inStock ? 'En stock' : 'Rupture de stock'}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
