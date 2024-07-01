import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../../assets/styles/products.css';
import productsData from '../../assets/json/products.json'; // Importation des données fictives

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Chargement des données fictives
        setProducts(productsData);
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
