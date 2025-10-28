import React from 'react';
import { useCart } from './context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const GameCard = ({ game }) => {
    const { id, name, price, image, category } = game;// <-- 2. Get addToCart function

    const { addItemToCart } = useCart();

    const formattedPrice = price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });

    const handleAddToCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addItemToCart(game);
        toast.success(`${name} fue añadido al carrito!`);
    };

    return (
        <Link to={`/producto/${id}`} className="card-link-wrapper">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                    <p className="card-text">{formattedPrice}</p>
                    <button
                        className="btn btn-warning w-100" // Añadí w-100
                        onClick={handleAddToCart}
                    >
                        Añadir al Carrito 🛒
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;