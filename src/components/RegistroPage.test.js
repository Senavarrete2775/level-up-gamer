
import React from 'react';
// ¡Ya no necesitamos 'waitFor'!
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistroPage from './RegistroPage';

describe('RegistroPage (con Jasmine/Karma)', () => {

    // --- PRUEBA 9 (NUEVA - Síncrona) ---
    it('debe marcar/desmarcar el checkbox de edad al hacer clic', () => {
        render(
            <MemoryRouter>
                <RegistroPage />
            </MemoryRouter>
        );

        // Buscar el checkbox por su etiqueta asociada
        const checkbox = screen.getByLabelText('Confirmo que soy mayor de 18 años');

        // Afirmar: Inicialmente NO está marcado
        // Usamos '.toBeFalsy()' que es el equivalente Jasmine de '.toBe(false)'
        expect(checkbox.checked).toBeFalsy();

        // Actuar: Hacemos clic
        fireEvent.click(checkbox);

        // Afirmar: Ahora SÍ debe estar marcado
        // Usamos '.toBeTruthy()' que es el equivalente Jasmine de '.toBe(true)'
        expect(checkbox.checked).toBeTruthy();

        // Actuar: Hacemos clic de nuevo
        fireEvent.click(checkbox);

        // Afirmar: Debe volver a estar desmarcado
        expect(checkbox.checked).toBeFalsy();
    });

    // --- PRUEBA 10 (NUEVA - Síncrona) ---
    it('debe actualizar el valor del input de email al escribir', () => {
        render(
            <MemoryRouter>
                <RegistroPage />
            </MemoryRouter>
        );

        // Buscar el input por su etiqueta asociada
        const emailInput = screen.getByLabelText('Correo Electrónico');

        // Afirmar: Inicialmente está vacío
        expect(emailInput.value).toBe('');

        // Actuar: Simulamos escribir en el input
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Afirmar: El valor del input debe haber cambiado
        expect(emailInput.value).toBe('test@example.com');
    });
});