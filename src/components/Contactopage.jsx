import React, { useState } from 'react';
import LogoContacto from '../img/layout/ContactoLogo.png';

const Contactopage = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`¡Mensaje enviado! Gracias por contactarnos, ${nombre}.`);

        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <main className="main-content">

            <div className="container py-5 contact-container">
                <div className="row justify-content-center">


                    <div className="col-12 text-center mb-4">
                        <img
                            src={LogoContacto}
                            alt="Logo Level-Up Gamer Contacto"
                            style={{ width: '350px', height: 'auto' }}
                        />
                    </div>


                    <div className="col-lg-8 col-md-10">
                        <h1 className="text-center mb-4">Contáctanos</h1>


                        <p className="text-center text-muted mb-5">
                            ¿Tienes alguna duda, sugerencia o quieres colaborar? Llena el formulario y nos pondremos en contacto contigo.
                        </p>

                        <div className="card shadow-sm">
                            <div className="card-body p-4 p-md-5">
                                <form onSubmit={handleSubmit}>


                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Tu Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Tu Correo Electrónico</label>
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
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                        <textarea
                                            className="form-control"
                                            id="mensaje"
                                            rows="5"
                                            value={mensaje}
                                            onChange={(e) => setMensaje(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-warning w-100">Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contactopage;