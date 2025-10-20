// src/App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

import Home from './components/Home';
import {Route, Routes} from "react-router-dom"; // O MainContent
const Usuarios = () => <h1>Página de Gestión de Usuarios</h1>;
const Productos = () => <h1>Página de Productos</h1>;
const Configuraciones = () => <h1>Página de Configuraciones</h1>;

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                {/* RUTA PRINCIPAL */}
                <Route path="/" element={<Home />} />

                {/* RUTAS DE LA BARRA LATERAL */}
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/configuraciones" element={<Configuraciones />} />

                {/* RUTA 404 */}
                <Route path="*" element={<h1>404 | Página no encontrada</h1>} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
