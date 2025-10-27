import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainContent from './MainContent';
import * as CartContext from './context/CartContext';


describe('MainContent Integration (con Jasmine/Karma)', () => {

    const mockAddItemToCart = jasmine.createSpy('addItemToCart');

    beforeEach(() => {
        spyOn(CartContext, 'useCart').and.returnValue({
            addItemToCart: mockAddItemToCart
        });
        mockAddItemToCart.calls.reset();
    });


    it('debe renderizar los productos destacados', () => {


        render(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );


        expect(screen.getByText('Catan')).not.toBeNull();
        expect(screen.getByText('Carcassonne')).not.toBeNull();
        expect(screen.getByText('Controlador Inalámbrico Xbox Series X')).not.toBeNull();
    });


    it('debe añadir un producto al carrito desde la página de inicio', () => {

        render(
            <MemoryRouter>
                <MainContent />
            </MemoryRouter>
        );


        const allAddButtons = screen.getAllByText('Añadir al Carrito 🛒');
        fireEvent.click(allAddButtons[0]);


        expect(mockAddItemToCart).toHaveBeenCalled();
    });
});