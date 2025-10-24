import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src="/logo_letras_gb_negro.png" alt="logo" />
            </a>

            <div className="nav-right">
                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#">Juegos</a></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/productos">Tienda</Link></li>
                    </ul>
                </nav>

                <Link to="/login" className="btn">
                    <button>Login</button>
                </Link>
            </div>

            <a href="#" className="menu" onClick={handleMenuToggle}>
                <button>
                    <img className="menu-abrir" src="/img/menu.svg" alt="menu" />
                </button>
            </a>
        </header>
    );
};

export default Header;