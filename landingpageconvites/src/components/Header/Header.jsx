import React from 'react';
import './Header.css';

function Header() {
    return (
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
    );
}

export default Header;
