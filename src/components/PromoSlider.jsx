import React from 'react';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { promoSlides } from '../data/promoSlides.js';

const PromoSlider = () => {
    return (
        <div className="promo-slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {promoSlides.map((slide) => (
                    <SwiperSlide key={slide.id} className="promo-slide">
                        <img src={slide.imageUrl} alt={slide.title} className="promo-slide-img" />
                        <div className="promo-slide-content">
                            <h3>{slide.subtitle}</h3>
                            <h2>{slide.title}</h2>
                            <Link to={slide.link} className="btn btn-warning">Ver más</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PromoSlider;