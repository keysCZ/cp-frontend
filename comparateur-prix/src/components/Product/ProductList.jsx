import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import productCard from "./ProductCard";
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAllProducts().then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <productCard product={product} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
