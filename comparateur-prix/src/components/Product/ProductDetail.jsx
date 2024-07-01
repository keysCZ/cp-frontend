import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../assets/json/products.json'; // Importation des données fictives
import '../../assets/styles/products.css';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = productsData.find((prod) => prod.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price} €</p>
                <p className="product-stock">{product.inStock ? 'En stock' : 'Rupture de stock'}</p>
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
