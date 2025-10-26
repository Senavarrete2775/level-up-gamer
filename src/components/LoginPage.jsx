import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con Email: ${email} y Contraseña: ${password}`);
    };

    return (
        <main className="main-content d-flex align-items-center justify-content-center">
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="text-center mb-4">
                    <img
                        src="/images/layout/LoginLogo.png"
                        alt="Logo Level-Up Gamer"
                        style={{ width: '450px', height: 'auto' }}
                    />
                </div>
                <div className="card shadow-sm">

                    <div className="card-body p-5">
                        <h2 className="text-center mb-4">Ingresar</h2>
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
                            <button type="submit" className="btn btn-warning w-100 mt-3">Ingresar</button>
                        </form>
                        <div className="text-center mt-3">
                            <Link to="/">Volver al inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;