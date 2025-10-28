import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../data/testimonials";


export default function TestimonialsSection() {
    return (
        <section className="testimonials" aria-labelledby="testimonials-title">
            <div className="container-narrow">
                <h2 id="testimonials-title">Comentarios de nuestros clientes</h2>
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