import React, { useState } from 'react';
import storesData from '../../assets/json/store.json';
import { toast } from 'react-toastify'; // Importer toast
import '../../assets/styles/products.css';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        image: '',
        prices: [{ store: '', price: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handlePriceChange = (index, e) => {
        const { name, value } = e.target;
        const prices = [...product.prices];
        prices[index][name] = value;
        setProduct({ ...product, prices });
    };

    const addPriceField = () => {
        setProduct({
            ...product,
            prices: [...product.prices, { store: '', price: '' }]
        });
    };

    const removePriceField = (index) => {
        const prices = product.prices.filter((_, i) => i !== index);
        setProduct({ ...product, prices });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simuler l'envoi des données à l'API ou les traiter selon les besoins
        console.log(product);
        // Afficher une notification de succès
        toast.success('Produit ajouté avec succès !');
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
                <label htmlFor="name">Nom du produit</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="image">URL de l'image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="prices-section">
                <h3>Prix par enseigne</h3>
                {product.prices.map((priceField, index) => (
                    <div key={index} className="price-group">
                        <select
                            name="store"
                            value={priceField.store}
                            onChange={(e) => handlePriceChange(index, e)}
                            required
                        >
                            <option value="">Sélectionner une enseigne</option>
                            {storesData.map((store) => (
                                <option key={store.id} value={store.name}>{store.name}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            name="price"
                            value={priceField.price}
                            onChange={(e) => handlePriceChange(index, e)}
                            placeholder="Prix"
                            required
                        />
                        <button type="button" onClick={() => removePriceField(index)}>Supprimer</button>
                    </div>
                ))}
                <button type="button" onClick={addPriceField}>Ajouter un prix</button>
            </div>
            <button type="submit">Créer le produit</button>
        </form>
    );
};

export default ProductForm;
