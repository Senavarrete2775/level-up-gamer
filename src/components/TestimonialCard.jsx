import React from "react";

const Star = ({ filled }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.172L12 18.896l-7.336 3.873 1.402-8.172L.132 9.211l8.2-1.193L12 .587z"
            fill={filled ? "#F1B74A" : "none"}
            stroke="#F1B74A"
            strokeWidth="1.2"
        />
    </svg>
);

export default function TestimonialCard({ quote, name, rating = 5, verified = true }) {
    return (
        <article className="testimonial-card">
            <div className="stars" aria-label={`${rating} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < rating} />
                ))}
            </div>

            <p className="quote">“{quote}”</p>

            <h4 className="author">{name}</h4>

            {verified && (
                <div className="verified" aria-label="Compra verificada">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M7 12l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Verificado</span>
                </div>
            )}
        </article>
    );
}