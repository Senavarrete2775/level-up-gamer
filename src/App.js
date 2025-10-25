import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Importa Routes y Route

import RegistroPage from './components/RegistroPage';
import TiendaPage from './components/TiendaPage';
import Contactopage from './components/Contactopage';
import NosotrosPage from './components/NosotrosPage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage'; // 2. Importa la nueva página de Login
import Footer from './components/Footer';
import CartPage from './components/CartPage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegistroPage />} />
                <Route path="/nosotros" element={<NosotrosPage />}/>
                <Route path="/contacto" element={<Contactopage />} />
                <Route path="/tienda" element={<TiendaPage />} />
                <Route path="/tienda" element={<TiendaPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;