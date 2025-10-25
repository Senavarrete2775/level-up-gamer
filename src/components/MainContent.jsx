import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Para el botón "Learn More"
import GameCard from "./GameCard";




const videosData = [
    {
        id: 1,
        subtitle: 'Expansión de Cyberpunk 2077',
        title: 'Phantom Liberty',
        videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fbI',
        thumbnailUrl: 'https://img.youtube.com/vi/8X2kIfS6fbI/mqdefault.jpg'
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
    // Añade más videos aquí si quieres
];

const gamesData = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "assets/img/cyberpunk.webp",
        category: "PC / PS5 / Xbox", // Añadido
        price: "49.99", // Añadido
    },
    {
        id: 2,
        title: "Starfield",
        image: "assets/img/starfield.jpg",
        category: "PC / Xbox", // Añadido
        price: "69.99", // Añadido
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        image: "assets/img/rdr2.jpg",
        category: "PC / PS4 / Xbox", // Añadido
        price: "39.99", // Añadido
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

            {/* --- 3. SECCIÓN DE VIDEO PRINCIPAL (reemplaza tu "Bienvenidos") --- */}
            <section className="video-hero-section">

                {/* A. El reproductor de video grande */}
                <div className="video-player-wrapper">
                    <iframe
                        key={selectedVideo.id} /* La key fuerza a React a recargar el iframe */
                        className="video-player-iframe"
                        src={selectedVideo.videoUrl}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* B. El contenido (título y botón) - Estilo Klei */}
                <div className="video-hero-content text-center py-4">
                    <h3 className="video-hero-subtitle">{selectedVideo.subtitle.toUpperCase()}</h3>
                    <h1 className="video-hero-title">PLAY {selectedVideo.title.toUpperCase()}</h1>
                    <Link to="/tienda" className="btn btn-warning mt-2">
                        Ver en la Tienda
                    </Link>
                </div>
            </section>

            {/* --- 4. CARRUSEL DE MINIATURAS (reemplaza 'Juegos Destacados') --- */}
            <section className="video-carousel-section">
                <button className="carousel-arrow" onClick={scrollLeft}>
                    &lt; {/* Símbolo de "menor que" */}
                </button>
                <div className="video-carousel-container" ref={carouselRef}>
                    {videosData.map(video => (
                        <div
                            key={video.id}
                            // Aplicamos la clase 'active' si el id coincide con el del video seleccionado
                            className={`video-thumbnail ${video.id === selectedVideo.id ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                            // Al hacer clic, actualizamos el estado al video clickeado
                            onClick={() => setSelectedVideo(video)}
                        />
                    ))}
                </div>
                <button className="carousel-arrow" onClick={scrollRight}>
                    &gt;
                </button>
            </section>

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


            <section id="news" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Últimas Noticias</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Análisis Final Fantasy VII Rebirth</h5>
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