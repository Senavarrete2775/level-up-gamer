import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


import GameCard from './GameCard';


import * as CartContext from './context/CartContext';


const mockGame = {
    id: 'JM001',
    name: 'Catan',
    category: 'Juegos de Mesa',
    price: 29990,
    image: '/images/products/catan.jpg'
};


describe('GameCard Component (con Jasmine/Karma)', () => {


    const mockAddItemToCart = jasmine.createSpy('addItemToCart');

    beforeEach(() => {

        spyOn(CartContext, 'useCart').and.returnValue({
            addItemToCart: mockAddItemToCart
        });

        // Limpiamos el historial de la espía
        mockAddItemToCart.calls.reset();
    });

    it('debe renderizar la información del juego correctamente', () => {

        render(<GameCard game={mockGame} />);


        expect(screen.getByText('Catan')).not.toBeNull();
        expect(screen.getByText('Juegos de Mesa')).not.toBeNull();
        expect(screen.getByText('$ 29.990')).not.toBeNull();
    });

    it('debe llamar a addItemToCart con el juego correcto al hacer clic', () => {

        render(<GameCard game={mockGame} />);


        const addButton = screen.getByText('Añadir al Carrito 🛒');
        fireEvent.click(addButton);


        expect(mockAddItemToCart).toHaveBeenCalled();
        expect(mockAddItemToCart).toHaveBeenCalledWith(mockGame);
    });
});