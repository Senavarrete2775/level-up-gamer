import React, { useState } from 'react';

const Contactopage = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        alert(`¡Mensaje enviado! Gracias por contactarnos, ${nombre}.`);

        // Limpiamos los campos del formulario
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (

        <main className="main-content">
            <div className="container py-5" style={{ maxWidth: '800px' }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 className="text-center mb-4">Contáctanos</h1>
                        <p className="text-center text-muted mb-5">
                            ¿Tienes alguna duda, sugerencia o quieres colaborar? Llena el formulario y nos pondremos en contacto contigo.
                        </p>


                        <div className="card shadow-sm">
                            <div className="card-body p-5">
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