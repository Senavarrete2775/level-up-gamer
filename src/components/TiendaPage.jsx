import React, { useState } from 'react';
import { products } from '../data/products.js';
import GameCard from '../components/GameCard';
import PromoSlider from '../components/PromoSlider';

const Tienda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['Todos', ...new Set(products.map(product => product.category))];


    const filteredProducts = products
        .filter(product => {

            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .filter(product => {

            if (selectedCategory === '' || selectedCategory === 'Todos') {
                return true;
            }
            return product.category === selectedCategory;
        });

    return (
        <main className="main-content">
            <div className="tienda-container">
                <PromoSlider />
                <div className="filter-container">

                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        className="filter-input" // Asigna una clase para tu CSS
                        onChange={e => setSearchTerm(e.target.value)}
                    />

                    <select
                        className="filter-select" // Asigna una clase para tu CSS
                        onChange={e => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="productos-grid">
                    {filteredProducts.map(product => (
                        <GameCard key={product.id} game={product} />
                    ))}
                </div>


                {filteredProducts.length === 0 && (
                    <p className="no-results-message">
                        No se encontraron productos con esos filtros.
                    </p>
                )}
            </div>
        </main>
    );
};

export default Tienda;