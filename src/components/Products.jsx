import React from 'react';

const Products = () => {
    return (
        <main>
            <h1 className="titulo-juegos">Nuevos Lanzamientos</h1>
            <div className="flex-juegos">
                {/* Aquí puedes repetir la tarjeta del juego varias veces */}
                <div className="caja">
                    <img src="/img/card-1.jpg" alt="juego 1" />
                    <div className="info">
                        <p className="categoria">PS5</p>
                        <p className="nombre-juego">Resident Evil 4</p>
                        <p className="precio">$59.99</p>
                        <a href="#" className="btn-juego"><button>Comprar</button></a>
                    </div>
                </div>

                <div className="caja">
                    <img src="/img/card-2.jpg" alt="juego 2" />
                    <div className="info">
                        <p className="categoria">XBOX</p>
                        <p className="nombre-juego">Star Wars</p>
                        <p className="precio">$69.99</p>
                        <a href="#" className="btn-juego"><button>Comprar</button></a>
                    </div>
                </div>
                {/* Repite las otras cajas aquí */}
            </div>
        </main>
    );
};

export default Products;