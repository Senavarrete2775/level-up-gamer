import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import GameCard from "./GameCard";
import {products} from "../data/products";
import { videosData } from '../data/videosData.js';
import {newsData} from "../data/newsData";




function MainContent() {
    const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
    const carouselRef = useRef(null);
    const currentIndex = videosData.findIndex(v => v.id === selectedVideo.id);

    const scrollToActiveThumb = (id) => {
        const el = carouselRef.current?.querySelector(`[data-vid="${id}"]`);
        if (el) {
            el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
        }
    };

    const changeVideo = (direction) => {
        const nextIdx =
            direction === "left"
                ? (currentIndex - 1 + videosData.length) % videosData.length
                : (currentIndex + 1) % videosData.length;
        const nextVideo = videosData[nextIdx];
        setSelectedVideo(nextVideo);
        scrollToActiveThumb(nextVideo.id);

        requestAnimationFrame(() => {
            carouselRef.current?.scrollBy({
                left: direction === "left" ? -250 : 250,
                behavior: "smooth",
            });
        });
    };

    const handleThumbnailClick = (video) => {
        setSelectedVideo(video);
        scrollToActiveThumb(video.id);
    };

    return (
        <main className="main-content">
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
            <section className="video-carousel-section">
                <button className="carousel-arrow" onClick={() => changeVideo("left")}>
                    &lt;
                </button>
                <div className="video-carousel-container" ref={carouselRef}>
                    {videosData.map(video => (
                        <div
                            key={video.id}
                            data-vid={video.id}
                            className={`video-thumbnail ${video.id === selectedVideo.id ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                            onClick={() => handleThumbnailClick(video)}
                        />
                    ))}
                </div>
                <button className="carousel-arrow" onClick={() => changeVideo("right")}>
                    &gt;
                </button>
            </section>
            <section id="featured" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Artículos destacados</h2>
                    <div className="row justify-content-center">


                        {products.slice(0, 6).map(product => (
                            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>

                                <GameCard game={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="news" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Últimas Noticias</h2>
                    <div className="row justify-content-center">

                        {newsData.map(article => (
                            <div className="col-lg-6 mb-4" key={article.id}>
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text text-muted">{article.date}</p>
                                        <p className="card-text">{article.excerpt}</p>
                                        <a href={article.url} className="btn btn-outline-dark">Leer más</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainContent;
