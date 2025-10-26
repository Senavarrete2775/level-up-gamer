import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistroPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOver18, setIsOver18] = useState(false); // Estado para el checkbox
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!isOver18) {
            setError('Debes ser mayor de 18 años para registrarte.');
            return;
        }

        setError('');

        alert(`¡Registro exitoso para: ${email}!`);
    };

    return (
        <main className="main-content d-flex align-items-center justify-content-center">
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="text-center mb-4">
                    <img
                        src="/images/layout/RegistroLogo.png"
                        alt="Logo Level-Up Gamer"
                        style={{ width: '450px', height: 'auto' }}
                    />
                </div>
                <div className="card shadow-sm">
                    <div className="card-body p-5">
                        <h2 className="text-center mb-4">Crear Cuenta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isOver18"
                                    checked={isOver18}
                                    onChange={(e) => setIsOver18(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="isOver18">
                                    Confirmo que soy mayor de 18 años
                                </label>
                            </div>


                            {error && <div className="alert alert-danger p-2">{error}</div>}

                            <button type="submit" className="btn btn-warning w-100 mt-2">Registrarse</button>
                        </form>
                        <div className="text-center mt-3">
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RegistroPage;