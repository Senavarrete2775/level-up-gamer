
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import PromoSlider from '../components/PromoSlider';
import TestimonialsSection from "./TestimonialsSection";

const ProductDetailPage = () => {

    const { productId } = useParams();
    const product = products.find(p => p.id === productId);
    const { addItemToCart } = useCart();

    if (!product) {
        return (
            <main className="main-content container py-5 text-center">
                <h2>Producto no encontrado</h2>
                <Link to="/tienda" className="btn btn-warning mt-3">
                    Volver a la Tienda
                </Link>
            </main>
        );
    }


    const handleAddToCart = () => {
        addItemToCart(product);
        toast.success(`${product.name} fue añadido al carrito!`);
    };


    const formattedPrice = product.price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });


    return (
        <main className="main-content">
            <section className="promo-slider-section 5">
                <div className="container-fluid">
                    <PromoSlider />
                </div>
            </section>
            <div className="container py-5 product-detail-container">

                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-detail-image"
                        />
                    </div>
                    <div className="col-md-6 product-detail-info">
                        <h1 className="mb-3">{product.name}</h1>
                        <h4 className="text-muted mb-3">{product.category}</h4>
                        <p className="lead mb-4">
                            {product.description || 'Descripción no disponible.'}
                        </p>
                        <h2 className="mb-4">
                            {formattedPrice}
                        </h2>
                        <button
                            className="btn btn-warning btn-lg"
                            onClick={handleAddToCart}
                        >
                            Añadir al Carrito 🛒
                        </button>
                        <Link to="/tienda" className="btn btn-outline-warning ms-3 btn-lg">
                            Volver a la Tienda
                        </Link>
                    </div>
                </div>
            </div>
            <section id="clientes" style={{ marginTop: '2.5rem' }}>
                <TestimonialsSection />
            </section>
        </main>

    );
};

export default ProductDetailPage;