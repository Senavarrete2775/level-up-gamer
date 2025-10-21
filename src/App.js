import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Importa Routes y Route

import Header from './components/Header';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage'; // 2. Importa la nueva página de Login
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;