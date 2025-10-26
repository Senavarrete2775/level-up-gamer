import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
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
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>

                <div className="auth-buttons d-flex align-items-center">


                    <Link to="/registro" className="btn btn-warning btn-sm">
                        Registrarse
                    </Link>

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