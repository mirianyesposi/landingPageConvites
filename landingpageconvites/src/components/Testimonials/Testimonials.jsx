import React from 'react';
import './Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonials">
            <h2>Feedback dos Nossos Clientes</h2>
            <div className="testimonial-list">
                <blockquote>
                    <p>"Amei o convite! Ele é super interativo e ficou exatamente do jeito que imaginávamos. Nossos convidados acharam incrível poder ver todas as informações de forma tão prática e moderna. A personalização foi perfeita, e tudo foi entregue com muita rapidez. Super recomendo!"</p>
                    <cite>– Ana Paula e Ricardo</cite>
                </blockquote>
                <blockquote>
                    <p>"Nós adoramos o convite digital! Além de lindo, ele é muito funcional e fácil de usar. Conseguimos compartilhar com todos rapidamente e nossos amigos amaram a interatividade, especialmente o mapa para o local da festa. Fez toda a diferença no nosso casamento!"</p>
                    <cite>– Gabriela e Lucas</cite>
                </blockquote>
                <blockquote>
                    <p>"O convite digital é maravilhoso! Foi muito fácil de personalizar e superou nossas expectativas. Os convidados ficaram encantados com a apresentação e com a facilidade de acesso. O design é moderno e prático, e o custo-benefício é excelente. Não poderíamos estar mais felizes!"</p>
                    <cite>– Beatriz e Henrique</cite>
                </blockquote>
            </div>
        </section>
    );
}

export default Testimonials;
