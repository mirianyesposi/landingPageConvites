import React from 'react';
import '../styles.css';

const Gallery = () => (
  <section id="gallery">
    <h3>Galeria de Convites</h3>
    <div className="gallery-grid">
      <div className="gallery-item">Convite 1</div>
      <div className="gallery-item">Convite 2</div>
      <div className="gallery-item">Convite 3</div>
      {/* Adicione mais itens conforme necessário */}
    </div>
  </section>
);

export default Gallery;
