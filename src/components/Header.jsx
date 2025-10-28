import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useCart } from './context/CartContext';
import { useAuth } from './context/AuthContext'; // <-- 1. Importa useAuth
import { toast } from 'react-toastify'; // Para feedback del logout

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const { currentUser, logout } = useAuth(); // <-- 2. Obtén currentUser y logout
    const navigate = useNavigate(); // Para redirigir después del logout

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        try {
            logout();
            toast.info('Has cerrado sesión.');
            navigate('/');
            setIsMenuOpen(false);
        } catch (err) {
            toast.error('Error al cerrar sesión.');
        }
    };

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src="/images/layout/logo_letras_gb_negro.png" alt="logo" />
            </a>

            <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/tienda">Tienda</Link></li>
                        {!currentUser && (
                            <li><Link to="/login">Login</Link></li>
                        )}
                    </ul>
                </nav>

                <div className="auth-buttons d-flex align-items-center">


                    {currentUser ? (
                        <>
                            <span className="me-3" style={{ color: 'var(--color-texto-secundario)' }}>
                                Hola, {currentUser.email.split('@')[0]} {/* Muestra el nombre antes del @ */}
                            </span>
                            <button onClick={handleLogout} className="btn btn-outline-warning btn-sm">
                                Logout
                            </button>
                        </>
                    ) : (

                        <Link to="/registro" className="btn btn-warning btn-sm">
                            Registrarse
                        </Link>
                    )}


                    <Link to="/cart" className="cart-link ms-3">
                        🛒
                        {totalItems > 0 && (
                            <span className="cart-badge badge rounded-pill bg-danger">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                </div>
            </div>

            <a href="#" className="menu" onClick={handleMenuToggle}>
                <button>
                    ☰
                </button>
            </a>
        </header>
    );
};

export default Header;