import React from "react";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
    {
        quote:
            "compre una consola y un juego y me llegaron muy pronto! 😍",
        name: "jeremias O.",
        rating: 5,
    },
    {
        quote:
            "Acabo de mi control de xbox nuevo, lo amo.",
        name: "Andres R.",
        rating: 5,
    },
    {
        quote:
            "Este juego es increibleee! ¡Muchas gracias!",
        name: "Ana M.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials" aria-labelledby="testimonials-title">
            <div className="container-narrow">
                <h2 id="testimonials-title">Nuestros Clientes</h2>
                <p className="subtitle">️</p>

                <div className="grid">
                    {TESTIMONIALS.map((t, idx) => (
                        <TestimonialCard key={idx} {...t} verified />
                    ))}
                </div>
            </div>
        </section>
    );
}
