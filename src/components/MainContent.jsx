// Reemplaza TODO el contenido de src/components/MainContent.jsx con esto:

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import GameCard from "./GameCard"; // Importamos la tarjeta

// --- 1. DATOS DE VIDEOS (Con URL de miniatura arreglada) ---
const videosData = [
    {
        id: 1,
        subtitle: 'Megabonk trailer',
        title: 'Megabonk',
        videoUrl: 'https://www.youtube.com/embed/PlC4_c2dcGw',
        thumbnailUrl: 'https://i.ytimg.com/vi/PlC4_c2dcGw/mqdefault.jpg'
    },
    {
        id: 2,
        subtitle: 'Tráiler Oficial de Lanzamiento',
        title: 'Ghost of Yōtei',
        videoUrl: 'https://www.youtube.com/embed/cgM6poO2JmY',
        thumbnailUrl: 'https://img.youtube.com/vi/cgM6poO2JmY/mqdefault.jpg'
    },
    {
        id: 3,
        subtitle: 'Tráiler Oficial',
        title: 'Monster Hunter Wilds',
        videoUrl: 'https://www.youtube.com/embed/zyoBA0aCRNk',
        thumbnailUrl: 'https://img.youtube.com/vi/zyoBA0aCRNk/mqdefault.jpg'
    },
    {
        id: 4,
        subtitle: 'PS4 Trailer',
        title: 'Shadow of the Colossus',
        videoUrl: 'https://www.youtube.com/embed/pdZQ98mWeto',
        thumbnailUrl: 'https://img.youtube.com/vi/pdZQ98mWeto/mqdefault.jpg'
    },
    {
        id: 5,
        subtitle: 'Final Tráiler Oficial',
        title: 'Death Stranding 2: On the Beach',
        videoUrl: 'https://www.youtube.com/embed/etOOO9Sq7u8',
        thumbnailUrl: 'https://img.youtube.com/vi/etOOO9Sq7u8/mqdefault.jpg'
    },
];


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
        console.log('Intentando scroll Izquierda');
        if (carouselRef.current) {
            requestAnimationFrame(() => {
                carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
            });
        }
    };

    const scrollRight = () => {
        console.log('Intentando scroll Derecha');
        if (carouselRef.current) {
            requestAnimationFrame(() => {
                carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
            });
        }
    };

    const handleThumbnailClick = (video) => {
        console.log('Cambiando video a:', video.title);
        setSelectedVideo(video);
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

            {/* --- CARRUSEL DE MINIATURAS (SOLO UNO) --- */}
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
                            onClick={() => handleThumbnailClick(video)}
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
                                    <h5 className="card-title">Halo: Campaign Evolved llega a PS5 en 2026 con cooperativo, cross-play y misiones inéditas</h5>
                                    <p className="card-text text-muted">25 octubre, 2025</p>
                                    <p className="card-text">
                                        Halo llega por primera vez a PlayStation: “Halo: Campaign Evolved”, remake de la campaña original, se lanzará en PS5 en 2026 con cooperativo local y online.
                                    </p>
                                    <a href="#" className="btn btn-outline-dark">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">AMD pone a la venta su GPU de 32GB para IA</h5>
                                    <p className="card-text text-muted">24 octubre, 2025</p>
                                    <p className="card-text">
                                        AMD lanzará al público su tarjeta gráfica AI PRO R9700, antes exclusiva para equipos OEM, y ya reveló su precio.
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