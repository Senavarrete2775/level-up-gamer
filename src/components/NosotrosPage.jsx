import React from 'react';

const NosotrosPage = () => {
    return (

        <main className="main-content">
            <div className="nosotros-container">
                <h1 className="titulo-nosotros">Sobre Level UP Gamer</h1>
                <p className="parrafo-nosotros">
                    Bienvenidos a Level UP Gamer, tu destino definitivo para todo lo relacionado con el mundo de los videojuegos.
                    Nacimos de la pasión por los mundos virtuales, las historias épicas y la adrenalina de la competición.
                </p>
                <div className="nosotros-grid">
                    <div className="mision">
                        <h2>Nuestra Misión</h2>
                        <p>
                            Ofrecer a la comunidad gamer un espacio integral donde puedan encontrar los últimos lanzamientos,
                            hardware de punta y una comunidad apasionada. Nos esforzamos por ser el puente entre los jugadores
                            y las experiencias inolvidables que solo los videojuegos pueden ofrecer.
                        </p>
                    </div>
                    <div className="vision">
                        <h2>Nuestra Visión</h2>
                        <p>
                            Convertirnos en el referente número uno de la cultura gamer en habla hispana, innovando constantemente
                            en la forma en que interactuamos con los videojuegos y la comunidad. Aspiramos a ser más que una
                            tienda; queremos ser un pilar de la comunidad.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img
                        src="/images/layout/logoNosotros.png"
                        alt="Logo Level-Up Gamer"
                        style={{ width: '900px', height: 'auto' }}
                    />
                </div>
            </div>
        </main>
    );
};

export default NosotrosPage;