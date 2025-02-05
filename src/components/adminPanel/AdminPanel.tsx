import React, { useState } from "react";
// @ts-ignore
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css"; // Importe o CSS para estilização
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const db = getFirestore();

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleLogout = async (): Promise<void> => {
    await auth.signOut();
    navigate("/");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);

      // Criar URL para o preview da imagem
      const imageUrl = URL.createObjectURL(selectedImage);
      setImagePreview(imageUrl);
    }
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Erro ao converter imagem para Base64"));
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      console.error("Nenhuma imagem selecionada");
      return;
    }

    try {
      // Converter a imagem para Base64
      const base64Image = await convertImageToBase64(image);

      // Salvar os dados no Firestore com a imagem em Base64
      await addDoc(collection(db, "posts"), {
        title,
        description,
        imageBase64: base64Image,
        createdAt: new Date(),
      });

      console.log("Dados salvos com sucesso!");
      navigate('/');

      // Limpar os campos após o envio
      setTitle("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Bem-vindo ao Painel Administrativo</h2>
      <button onClick={handleLogout}>Sair</button>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <div className="image-preview">
              <h3>Pré-visualização da Imagem:</h3>
              <img src={imagePreview} alt="Pré-visualização" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          )}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default AdminPanel;
