import React from 'react';
import GameCard from './GameCard';


const gamesData = [
    {
        image: '/img/card-1.jpg',
        category: 'PS5',
        title: 'Resident Evil 4',
        price: '59.99'
    },
    {
        image: '/img/card-2.jpg',
        category: 'XBOX',
        title: 'Star Wars',
        price: '69.99'
    },
    {
        image: '/img/card-3.jpg',
        category: 'PC',
        title: 'The Witcher 3',
        price: '39.99'
    },
    {
        image: '/img/card-4.jpg',
        category: 'Nintendo Switch',
        title: 'Zelda: Tears of the Kingdom',
        price: '69.99'
    }
];

const Products = () => {
    return (
        <main>
            <h1 className="titulo-juegos">Nuevos Lanzamientos</h1>
            <div className="flex-juegos">
                {/* 3. Mapeamos (recorremos) el arreglo de juegos */}
                {gamesData.map((game, index) => (
                    <GameCard
                        key={index} // key es importante para React
                        image={game.image}
                        category={game.category}
                        title={game.title}
                        price={game.price}
                    />
                ))}
            </div>
        </main>
    );
};

export default Products;