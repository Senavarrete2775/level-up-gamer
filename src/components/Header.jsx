// src/components/Header.jsx

import { Link } from 'react-router-dom'; // ⬅️ ¡Asegúrate de importar Link!
import React from 'react'; // Mantener si estás usando sintaxis JSX

function Header() {
    return (
        <header className="header">
            {/* Logo: debe ir a la ruta principal */}
            <Link to="/" className="logo">
                <img src="assets/img/logo.png" alt="Logo de Level Up Gamer" className="logo-img" />
            </Link>

            <nav className="sidebar d-flex flex-column p-3">
                {/* Logo en la barra lateral */}
                <Link to="/" className="mb-4">
                    <img src="../assets/img/logo_letras_gb_negro.png" alt="Logo" className="logo" />
                </Link>

                <ul className="nav nav-pills flex-column mb-auto">
                    {/* ENLACES DE NAVEGACIÓN */}
                    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                    <li><Link className="nav-link" to="/usuarios">Usuarios</Link></li>
                    <li><Link className="nav-link" to="/productos">Productos</Link></li>
                </ul>

                <ul className="nav nav-pills flex-column mt-auto">
                    <li><Link className="nav-link" to="/configuraciones">Configuraciones</Link></li>
                    {/* Cerrar Sesión: Si esto lleva a una página HTML externa (login.html), se debe usar <a> */}
                    <li><a className="nav-link" href="../html_tienda/login.html">Cerrar sesión</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;