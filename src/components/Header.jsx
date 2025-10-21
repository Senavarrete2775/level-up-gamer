import React, { useState } from 'react';

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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Juegos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <a href="#" className="btn">
                    <button>Login</button>
                </a>
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