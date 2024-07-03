import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../../assets/styles/products.css';
import productsData from '../../assets/json/products.json';
import axios from "axios"; // Importation des données fictives

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       // fetch('http://127.0.0.1:3000/produits/get/').then(response => response.json()).then(data => console.log(data));
        const data =
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
