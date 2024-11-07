import React, { useState } from 'react';
import './Contact.css';
import db from '../../database/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia os dados do formulário para a coleção "contacts" no Firestore
            await addDoc(collection(db, "contacts"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date() // Armazena a data e hora do envio
            });
            
            console.log('Dados enviados com sucesso para o Firestore');
            // Limpa o formulário após o envio
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            alert("Mensagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar os dados: ", error);
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    };

    return (
        <section className="contact">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Entre em Contato</h2>
                    <p>Call: 43 9 9911 - 4711</p>
                    <p>Email: miriany.esposi@gmail.com</p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Telefone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Mensagem:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
