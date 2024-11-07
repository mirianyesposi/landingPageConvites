import React from 'react';
import './Gallery.css';
import imgGreen from '../../assets/modelo-1.png';
import imgGreenNoPhoto from '../../assets/modelo-2.png';
import imgBlack from '../../assets/modelo-3.png';
import imgVintage from '../../assets/modelo-4.png';

function Gallery() {
    return (
        <section className="gallery">
            <h2>Nossos Modelos</h2>
            <div className="model-list">
                <div className="model-item">
                    <img src={imgGreen} alt="Green Model" />
                    <p>Green</p>
                </div>
                <div className="model-item">
                    <img src={imgGreenNoPhoto} alt="Green Model (sem foto)" />
                    <p>Green (sem foto)</p>
                </div>
                <div className="model-item">
                    <img src={imgBlack} alt="Black Model" />
                    <p>Black</p>
                </div>
                <div className="model-item">
                    <img src={imgVintage} alt="Vintage Model" />
                    <p>Vintage</p>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
