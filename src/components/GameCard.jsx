
import React from 'react';

// El componente recibe un objeto 'props' (desestructurado aquí)
function GameCard({ title, image, description, link }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
                {/* USANDO PROPS: La imagen viene de 'image' */}
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                    {/* USANDO PROPS: El título viene de 'title' */}
                    <h5 className="card-title">{title}</h5>
                    {/* USANDO PROPS: La descripción viene de 'description' */}
                    <p className="card-text">{description}</p>
                    {/* USANDO PROPS: El enlace viene de 'link' */}
                    <a href={link} className="btn btn-primary mt-auto">Ver detalles</a>
                </div>
            </div>
        </div>
    );
}

export default GameCard;