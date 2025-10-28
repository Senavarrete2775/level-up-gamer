

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import GameCard from './GameCard';
import * as CartContext from './context/CartContext'; // Ajusta ruta

let mockGame = { };
mockGame = {
    id: 'JM001',
    name: 'Catan',
    category: 'Juegos de Mesa',
    price: 29990,
    image: 'images/products/catan.jpg'
};


describe('GameCard Component (con Jasmine/Karma)', () => {
    const mockAddItemToCart = jasmine.createSpy('addItemToCart');

    beforeEach(() => {
        spyOn(CartContext, 'useCart').and.returnValue({
            addItemToCart: mockAddItemToCart
        });
        mockAddItemToCart.calls.reset();
    });

    it('debe renderizar la información del juego correctamente', () => {
        render(
            <MemoryRouter>
                <GameCard game={mockGame} />
            </MemoryRouter>
        );

        expect(screen.getByText('Catan')).not.toBeNull();
        expect(screen.getByText('Juegos de Mesa')).not.toBeNull();
        expect(screen.getByText('$29.990')).not.toBeNull(); // Sin espacio
    });

    it('debe llamar a addItemToCart con el juego correcto al hacer clic', () => {
        render(
            <MemoryRouter>
                <GameCard game={mockGame} />
            </MemoryRouter>
        );

        const addButton = screen.getByText('Añadir al Carrito 🛒');
        fireEvent.click(addButton);

        expect(mockAddItemToCart).toHaveBeenCalled();
        expect(mockAddItemToCart).toHaveBeenCalledWith(mockGame);
    });
});