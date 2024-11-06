import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <section className="gallery">
            <h2>Nossos Modelos</h2>
            <div className="model-list">
                <p>Green</p>
                <p>Green (sem foto)</p>
                <p>Black</p>
                <p>Vintage</p>
            </div>
        </section>
    );
}

export default Gallery;
