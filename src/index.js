import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Style.css'; // Asegúrate que esta ruta es la correcta
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);