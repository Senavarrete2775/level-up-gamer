

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import GameCard from "./GameCard";

// --- 1. DATOS DE VIDEOS ---
const videosData = [
    {
        id: 1,
        subtitle: 'Expansión de Cyberpunk 2077',
        title: 'Phantom Liberty',
        videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fbI',
        thumbnailUrl: 'https://i.ytimg.com/vi/8X2kIfS6fbI/sddefault.jpg'
    },
    {
        id: 2,
        subtitle: 'Tráiler Oficial de Lanzamiento',
        title: 'Starfield',
        videoUrl: 'https://www.youtube.com/embed/kfYEiTdsyas',
        thumbnailUrl: 'https://img.youtube.com/vi/kfYEiTdsyas/mqdefault.jpg'
    },
    {
        id: 3,
        subtitle: 'Tráiler Oficial',
        title: 'Red Dead Redemption 2',
        videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
        thumbnailUrl: 'https://img.youtube.com/vi/gmA6MrX81z4/mqdefault.jpg'
    },
];

// --- 2. DATOS DE JUEGOS DESTACADOS (CON PROPS CORRECTOS) ---
const gamesData = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "assets/img/cyberpunk.webp",
        category: "PC / PS5 / Xbox",
        price: "49.99",
    },
    {
        id: 2,
        title: "Starfield",
        image: "assets/img/starfield.jpg",
        category: "PC / Xbox",
        price: "69.99",
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        image: "assets/img/rdr2.jpg",
        category: "PC / PS4 / Xbox",
        price: "39.99",
    },
];

function MainContent() {
    const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
    };

    return (
        <main className="main-content">

            {/* --- SECCIÓN DE VIDEO --- */}
            <section className="video-hero-section">
                <div className="video-player-wrapper">
                    <iframe
                        key={selectedVideo.id}
                        className="video-player-iframe"
                        src={selectedVideo.videoUrl}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-hero-content text-center py-4">
                    <h3 className="video-hero-subtitle">{selectedVideo.subtitle.toUpperCase()}</h3>
                    <h1 className="video-hero-title">PLAY {selectedVideo.title.toUpperCase()}</h1>
                    <Link to="/tienda" className="btn btn-warning mt-2">
                        Ver en la Tienda
                    </Link>
                </div>
            </section>

            {/* --- CARRUSEL DE MINIATURAS --- */}
            <section className="video-carousel-section">
                <button className="carousel-arrow" onClick={scrollLeft}>
                    &lt;
                </button>
                <div className="video-carousel-container" ref={carouselRef}>
                    {videosData.map(video => (
                        <div
                            key={video.id}
                            className={`video-thumbnail ${video.id === selectedVideo.id ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                            onClick={() => setSelectedVideo(video)}
                        />
                    ))}
                </div>
                <button className="carousel-arrow" onClick={scrollRight}>
                    &gt;
                </button>
            </section>

            {/* --- SECCIÓN JUEGOS DESTACADOS --- */}

                <section id="featured" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Juegos Destacados</h2>
                        <div className="row justify-content-center">

                            {gamesData.map(game => (
                                <div className="col-lg-4 col-md-6 mb-4" key={game.id}>
                                    <GameCard
                                        key={game.id}
                                        image={game.image}
                                        category={game.category}
                                        title={game.title}
                                        price={game.price}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

            {/* --- SECCIÓN DE NOTICIAS --- */}
            <section id="news" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Últimas Noticias</h2>
                    <div className="row justify-content-center">
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