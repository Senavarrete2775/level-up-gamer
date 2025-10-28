import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import * as CartContext from './context/CartContext';
import * as AuthContext from './context/AuthContext';


describe('Header Component (con Jasmine/Karma)', () => {


    const mockLogout = jasmine.createSpy('logout');


    const setupMocks = (cartItemsCount, loggedInUser) => {
        spyOn(CartContext, 'useCart').and.returnValue({
            totalItems: cartItemsCount
        });
        spyOn(AuthContext, 'useAuth').and.returnValue({
            currentUser: loggedInUser,
            logout: mockLogout
        });
        mockLogout.calls.reset();
    };



    it('debe renderizar los links de navegación principales (usuario no logueado)', () => {
        setupMocks(0, null);

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText('Inicio')).not.toBeNull();
        expect(screen.getByText('Tienda')).not.toBeNull();
        expect(screen.getByText('Login')).not.toBeNull(); // Debe estar
        expect(screen.getByText('Registrarse')).not.toBeNull(); // Debe estar

        expect(screen.queryByText(/Hola,/)).toBeNull();
    });


    it('debe mostrar el número de items y saludo (usuario logueado)', () => {

        const mockUser = { email: 'test@example.com' };
        setupMocks(5, mockUser);

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText('5')).not.toBeNull();
        expect(screen.getByText('Hola, test')).not.toBeNull();
        expect(screen.getByText('Logout')).not.toBeNull();
        expect(screen.queryByText('Login')).toBeNull();
        expect(screen.queryByText('Registrarse')).toBeNull();
    });
});