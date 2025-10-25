import React from 'react';
import { useCart } from 'context/CartContext';

const GameCard = ({ product }) => {
    const { addToCart } = useCart(); // <-- 2. Get addToCart function

    const { image, category, title, price, id } = product;

    return (
        <div className="caja">
            <img src={image} alt={title} />
            <div className="info">
                <p className="categoria">{category}</p>
                <p className="nombre-juego">{title}</p>
                <p className="precio">${price} CLP</p>

                <div className="btn-juego mt-auto">
                    <button onClick={() => addToCart(product)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;