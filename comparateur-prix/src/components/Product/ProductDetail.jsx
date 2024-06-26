import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../services/productService';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        productService.getProductById(id).then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Prix: {product.price}€</p>
            <p>Catégorie: {product.category}</p>
            <p>Enseigne: {product.store}</p>
        </div>
    );
}

export default ProductDetail;
