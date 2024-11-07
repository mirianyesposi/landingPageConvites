import React from 'react';
import './CustomizeInvite.css';
import img from '../../assets/servicos.png';

function CustomizeInvite() {
    return (
        <section className="secaoConvite">
            <div className="secao1">
                <h2>Personalize o Convite para o Dia Mais Feliz da Sua Vida</h2>
                <ul>
                    <li>Cor fonte</li>
                    <li>Cor flores</li>
                    <li>Nome</li>
                    <li>Data</li>
                    <li>Horário</li>
                    <li>Local</li>
                    <li>Fotos</li>
                </ul>
                <button>
                    <a href="https://wa.me/4399914711">Consultar agora</a>
                </button>
            </div>
            <div className="secao2">
                <img src={img} alt="Casal feliz em seu casamento" />
            </div>
        </section>
    );
}

export default CustomizeInvite;
