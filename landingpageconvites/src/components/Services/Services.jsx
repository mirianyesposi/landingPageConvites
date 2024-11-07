import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="main">
            <header className="header">
                <h1>Convites Digitais</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Produto</li>
                        <li>Galeria</li>
                        <li>Sobre nós</li>
                    </ul>
                </nav>
            </header>
            <section className="services">
                <div className="titulo">
                <h1>Encontre praticidade, beleza e identidade </h1>
                </div>
                <div className="subtitulo">
                <h2> Em um momento único da sua vida.</h2>
                </div>
                <button className="button">
                    <a href="https://wa.me/4399914711" target="_blank" rel="noopener noreferrer">Nossos Serviços</a>
                </button>
            </section>
        </div>
    );
}

export default Services;
