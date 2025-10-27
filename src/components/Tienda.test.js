
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Tienda from './TiendaPage'


import * as CartContext from '../components/context/CartContext'; // Ajusta la ruta

describe('Tienda Page (con Jasmine/Karma)', () => {

    const mockAddItemToCart = jasmine.createSpy('addItemToCart');

    beforeEach(() => {
        spyOn(CartContext, 'useCart').and.returnValue({
            addItemToCart: mockAddItemToCart
        });
        mockAddItemToCart.calls.reset();
    });

    // --- PRUEBA 5 ---
    it('debe filtrar productos por la barra de búsqueda', () => {
        render(
            <MemoryRouter>
                <Tienda />
            </MemoryRouter>
        );


        const searchInput = screen.getByPlaceholderText('Buscar por nombre...');
        fireEvent.change(searchInput, { target: { value: 'Catan' } });

        expect(screen.getByText('Catan')).not.toBeNull();
        expect(screen.queryByText('Carcassonne')).toBeNull();
    });


    it('debe filtrar productos por el selector de categoría', () => {
        render(
            <MemoryRouter>
                <Tienda />
            </MemoryRouter>
        );

        const categorySelect = screen.getByDisplayValue('Todos'); // Busca el <select>
        fireEvent.change(categorySelect, { target: { value: 'Accesorios' } });

        expect(screen.getByText('Controlador Inalámbrico Xbox Series X')).not.toBeNull();
        expect(screen.queryByText('Catan')).toBeNull();
    });
});