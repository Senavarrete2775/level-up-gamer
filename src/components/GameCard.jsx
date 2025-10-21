import React from 'react';

// Recibimos los datos del juego como "props"
const GameCard = ({ image, category, title, price }) => {
    return (
        <div className="caja">
            <img src={image} alt={title} />
            <div className="info">
                <p className="categoria">{category}</p>
                <p className="nombre-juego">{title}</p>
                <p className="precio">${price}</p>
                <a href="#" className="btn-juego">
                    <button>Comprar</button>
                </a>
            </div>
        </div>
    );
};

export default GameCard;