// src/components/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Header from './Header';
import * as CartContext from './context/CartContext';

describe('Header Component (con Jasmine/Karma)', () => {


    it('debe renderizar los links de navegación principales', () => {

        spyOn(CartContext, 'useCart').and.returnValue({ totalItems: 0 });

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText('Inicio')).not.toBeNull();
        expect(screen.getByText('Tienda')).not.toBeNull();
        expect(screen.getByText('Login')).not.toBeNull();
        expect(screen.getByText('Registrarse')).not.toBeNull();
    });

    // --- PRUEBA 8 ---
    it('debe mostrar el número de items en el badge del carrito', () => {

        spyOn(CartContext, 'useCart').and.returnValue({ totalItems: 5 });

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );


        expect(screen.getByText('5')).not.toBeNull();
    });
});