// Importamos 'useState' desde React. Es un "Hook" que nos permite añadir un estado al componente.
import React, { useState } from 'react';

const Header = () => {
    // 1. CREAMOS EL ESTADO
    // 'isMenuOpen' será nuestra variable que nos dirá si el menú está abierto (true) o cerrado (false).
    // 'setIsMenuOpen' es la función que usaremos para cambiar el valor de 'isMenuOpen'.
    // Por defecto, el menú estará cerrado (useState(false)).
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. CREAMOS LA FUNCIÓN PARA CAMBIAR EL ESTADO
    // Esta función se ejecutará cada vez que el usuario haga clic en el botón del menú.
    const handleMenuToggle = () => {
        // Cambiamos el valor de 'isMenuOpen' al contrario del que tenga actualmente.
        // Si está en 'false', lo cambia a 'true', y viceversa.
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/img/logo.svg" alt="logo" />
            </div>
            <nav>
                {/* 3. APLICAMOS LA CLASE CONDICIONALMENTE */}
                {/* Usamos una plantilla de cadena (``) para construir el className.
            Siempre tendrá la clase 'nav-links'.
            Si 'isMenuOpen' es true, le añadiremos la clase 'active'. Si no, no añadimos nada.
        */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Juegos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <a href="#" className="btn"><button>Login</button></a>

            {/* 4. ASIGNAMOS EL EVENTO AL BOTÓN */}
            {/* Añadimos el evento 'onClick' al botón. Cuando se haga clic,
          llamará a nuestra función 'handleMenuToggle'.
      */}
            <a href="#" className="menu" onClick={handleMenuToggle}>
                <button>
                    <img className="menu-abrir" src="/img/menu.svg" alt="menu" />
                </button>
            </a>
        </header>
    );
};

export default Header;