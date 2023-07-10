import React from "react";
import UploadImage from "../../utils/assets/upload.svg";
import "./style.scss";

export default function UploadImageCard({ onClick }) {
  return (
    <div className="upload-card" onClick={onClick}>
      <img className="upload-card__image" src={UploadImage} alt="upload" />
      <p className="upload-card__title">Subir nova imagem</p>
    </div>
  );
}
