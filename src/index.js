// src/index.js o src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Importamos el Router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Envolvemos la aplicación aquí */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);