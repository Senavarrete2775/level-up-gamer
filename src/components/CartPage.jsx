
import React from 'react';
import {useCart} from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    const formatPrice = (number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number);
    };

    if (cartItems.length === 0) {
        return (
            <main className="main-content container py-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <Link to="/tienda" className="btn btn-warning mt-3">
                    Ir a la Tienda
                </Link>
            </main>
        );
    }

    return (
        <main className="main-content container py-5">
            <h1 className="text-center mb-5">Carrito de Compras</h1>
            <div className="table-responsive">
                <table className="table table-dark table-hover align-middle">
                    <thead>
                    <tr>
                        <th scope="col" style={{ width: '10%' }}></th> {/* Imagen */}
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.title} style={{ width: '60px', height: 'auto', borderRadius: '4px' }} />
                            </td>
                            <td>{item.title}</td>
                            <td>{formatPrice(item.priceNumber)}</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-outline-warning btn-sm me-2"
                                        onClick={() => updateQuantity(item.id, -1)}
                                        disabled={item.quantity <= 1} // Disable if quantity is 1
                                    >
                                        -
                                    </button>
                                    {item.quantity}
                                    <button
                                        className="btn btn-outline-warning btn-sm ms-2"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>{formatPrice(item.priceNumber * item.quantity)}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="text-end mt-4">
                <h2>Total: {formatPrice(totalPrice)}</h2>
                <button className="btn btn-warning mt-3">Proceder al Pago</button>
            </div>
        </main>
    );
};

export default CartPage;