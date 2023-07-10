import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import Modal from "../modal";
import UploadImageForm from "../upload-image-form";
import "./style.scss";

export default function ImageCard({ image, refresh }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteImage = async () => {
    try {
      await axios({
        method: "delete",
        url: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/images/${image._id}`,
      });
      refresh();
    } catch (error) {
      alert("Erro ao deletar imagem", error);
      console.log(error);
    }
  };

  const handleEditModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="image-card" id={image.id}>
      <img className="image-card__image" src={image.file} alt={image.name} />
      <div className="image-card__icons-container">
        <AiFillDelete
          className="image-card__icon image-card__icon--delete"
          onClick={deleteImage}
        />
        <AiFillEdit
          className="image-card__icon image-card__icon--edit"
          onClick={handleEditModal}
        />
      </div>
      <div className="image-card__info">
        <p className="image-card__text">{image.name}</p>
        <p className="image-card__text">{image.date}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleEditModal}>
        <UploadImageForm refresh={refresh} id={image._id}/>
      </Modal>
    </div>
  );
}
