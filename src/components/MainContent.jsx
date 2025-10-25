// src/components/MainContent.jsx
import React from 'react';
import GameCard from "./GameCard";

const gamesData = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "assets/img/cyberpunk.webp",
        description: "Cyberpunk 2077 es una aventura de acción y mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal.",
        link: "#"
    },
    {
        id: 2,
        title: "Starfield",
        image: "assets/img/starfield.jpg",
        description: "Starfield es el primer universo nuevo en más de 25 años de Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4.",
        link: "#"
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        image: "assets/img/rdr2.jpg",
        description: "Estados Unidos, 1899. Arthur Morgan y la banda de Van der Linde huyen tras un fallido asalto a un ferry en la ciudad de Blackwater.",
        link: "#"
    },
];
function MainContent() {
    return (
        <main className="main-content">
            {/* Sección principal (hero) */}
            <section className="section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Bienvenidos a Level UP Gamer</h1>
                            <p>Tu portal favorito para el mundo gamer.</p>
                            <div className="btn-group">
                                <a href="#featured" className="btn btn-warning">Explorar juegos</a>
                                <a href="#news" className="btn btn-secondary">Últimas Noticias</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="featured" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Juegos Destacados</h2>
                    <div className="row justify-content-center">

                        {gamesData.map(game => (
                            <GameCard
                                key={game.id}
                                title={game.title}
                                image={game.image}
                                description={game.description}
                                link={game.link}
                            />
                        ))}

                    </div>
                </div>
            </section>

            {/* Sección de Últimas Noticias */}
            <section id="news" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Últimas Noticias</h2>
                    <div className="row justify-content-center">

                        {/* Noticia 1 */}
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Análisis Final Fantasy VII Rebirth: ¿Es la mejor entrega de la saga?</h5>
                                    <p className="card-text text-muted">29 de febrero de 2024</p>
                                    <p className="card-text">
                                        Siete años y medio después de que se anunciara oficialmente su desarrollo, ya está aquí. Final Fantasy
                                        VII Rebirth llega para revolucionar la generación.
                                    </p>
                                    <a href="#" className="btn btn-outline-dark">Leer más</a>
                                </div>
                            </div>
                        </div>

                        {/* Noticia 2 */}
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">El DLC de Elden Ring ya tiene fecha de lanzamiento y tráiler</h5>
                                    <p className="card-text text-muted">21 de febrero de 2024</p>
                                    <p className="card-text">
                                        FromSoftware reveló finalmente la fecha de lanzamiento de Shadow of the Erdtree, la expansión de
                                        Elden Ring.
                                    </p>
                                    <a href="#" className="btn btn-outline-dark">Leer más</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainContent;