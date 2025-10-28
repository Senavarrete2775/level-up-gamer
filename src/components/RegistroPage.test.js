
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistroPage from './RegistroPage';


import * as AuthContext from '../components/context/AuthContext';

describe('RegistroPage (con Jasmine/Karma)', () => {

    const mockRegister = jasmine.createSpy('register');

    beforeEach(() => {

        spyOn(AuthContext, 'useAuth').and.returnValue({
            register: mockRegister,
            currentUser: null
        });
        mockRegister.calls.reset();
    });



    it('debe marcar/desmarcar el checkbox de edad al hacer clic', () => {
        render(
            <MemoryRouter>
                <RegistroPage />
            </MemoryRouter>
        );
        const checkbox = screen.getByLabelText('Confirmo que soy mayor de 18 años');
        expect(checkbox.checked).toBeFalsy();
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBeTruthy();
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBeFalsy();
    });

    it('debe actualizar el valor del input de email al escribir', () => {
        render(
            <MemoryRouter>
                <RegistroPage />
            </MemoryRouter>
        );
        const emailInput = screen.getByLabelText('Correo Electrónico');
        expect(emailInput.value).toBe('');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(emailInput.value).toBe('test@example.com');
    });
});