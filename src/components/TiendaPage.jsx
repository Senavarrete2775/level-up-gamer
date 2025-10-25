import React from 'react';
import GameCard from './GameCard';

const productsData = [
    {
        id: "JM001",
        title: "Catan",
        category: "Juegos de Mesa",
        price: "29.990",
        description: "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse.",
        image: "/img/catan.jpg"
    },
    {
        id: "AC001",
        title: "Controlador Inalámbrico Xbox",
        category: "Accesorios",
        price: "59.990",
        description: "Ofrece una experiencia de juego cómoda con botones mapeables y respuesta táctil.",
        image: "/img/xbox-control.jpg"
    },
    {
        id: "CO001",
        title: "PlayStation 5",
        category: "Consolas",
        price: "549.990",
        description: "La consola de última generación de Sony, con gráficos impresionantes.",
        image: "/img/ps5.jpg"
    },
    {
        id: "CG001",
        title: "PC Gamer ASUS ROG Strix",
        category: "Computadores Gamers",
        price: "1.299.990",
        description: "Un potente equipo diseñado para los gamers más exigentes.",
        image: "/img/pc-gamer.jpg"
    },
    {
        id: "SG001",
        title: "Silla Gamer Secretlab Titan",
        category: "Sillas Gamers",
        price: "349.990",
        description: "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico.",
        image: "/img/silla-secretlab.jpg"
    },
    {
        id: "MS001",
        title: "Mouse Gamer Logitech G502 HERO",
        category: "Mouse",
        price: "49.990",
        description: "Con sensor de alta precisión y botones personalizables.",
        image: "/img/mouse-g502.jpg"
    },
    {
        id: "MP001",
        title: "Mousepad Razer Goliathus Chroma",
        category: "Mousepad",
        price: "29.990",
        description: "Ofrece un área de juego amplia con iluminación RGB personalizable.",
        image: "/img/mousepad-razer.jpg"
    },
    {
        id: "PP001",
        title: "Polera Gamer 'Level-Up'",
        category: "Poleras Personalizadas",
        price: "14.990",
        description: "Una camiseta cómoda y estilizada, personalizable con tu gamer tag.",
        image: "/img/polera-levelup.jpg"
    }
];

const TiendaPage = () => {
    return (
        <main className="main-content">
            <div className="container py-5">
                <h1 className="text-center mb-5">Nuestra Tienda</h1>

                <div className="row">

                    {productsData.map(product => (
                        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                            <GameCard
                                image={product.image}
                                category={product.category}
                                title={product.title}
                                price={product.price}
                            />
                        </div>
                    ))}


                </div>
            </div>
        </main>
    );
};

export default TiendaPage;