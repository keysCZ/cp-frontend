import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/products.css';
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <span className="bqp">{product.isBQP ? 'BQP' : ''}</span>
                <img src={product.image} alt={product.name} className="product-image"/>
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price} €</p>
                    <p className="product-category">{product.category}</p>
                    <p className="product-quantite">{product.quantite}</p>


                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
