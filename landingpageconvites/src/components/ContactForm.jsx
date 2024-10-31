import React from "react";
import '../styles.css';

const ContactForm = () => (
  <section id="contact">
    <h3>Entre em Contato</h3>
    <form>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Sua mensagem" />
      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default ContactForm;
