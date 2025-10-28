
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { useCart } from '../components/context/CartContext';
import { toast } from 'react-toastify';

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
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded shadow-sm" // Clases de Bootstrap
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className="mb-3">{product.name}</h1>
                        <h4 className="text-muted mb-3">{product.category}</h4>
                        <p className="lead mb-4" style={{ color: 'var(--color-texto-secundario)' }}>
                            {product.description || 'Descripción no disponible.'}
                        </p>
                        <h2 className="mb-4" style={{ color: 'var(--color-acento2)' }}>
                            {formattedPrice}
                        </h2>
                        <button
                            className="btn btn-warning btn-lg" // Botón más grande
                            onClick={handleAddToCart}
                        >
                            Añadir al Carrito 🛒
                        </button>
                        <Link to="/tienda" className="btn btn-outline-secondary ms-3 btn-lg">
                            Volver a la Tienda
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetailPage;