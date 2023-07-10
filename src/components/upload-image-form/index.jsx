import React, { useState } from "react";
import "./style.scss";

export default function UploadImageForm() {
  const [formValues, setFormValues] = useState({
    file: "",
    name: "",
    date: "",
  });

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const isSubmitDisabled = !formValues.name || !formValues.file || !formValues.date;


  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <div className="upload-form__input-file-container">
        <label className="upload-form__input-file-label" for="file" required>
          {formValues.file ? "Imagem selecionada" : "Enviar imagem"}
        </label>
        <input
          onChange={(event) => setFormValues({ ...formValues, file: event.target.files[0] })}
          id="file"
          name="file"
          className="upload-form__input--file"
          type="file"
          alt="upload"
          required
        />
      </div>
      <input
        onChange={(event) => setFormValues({ ...formValues, name: event.target.value })}
        className="upload-form__input"
        type="text"
        placeholder="Nome da imagem"
        required
      />
      <input
        onChange={(event) => setFormValues({ ...formValues, date: event.target.value })}
        className="upload-form__input"
        type="date"
        placeholder="Data da imagem"
      />
      <button className="upload-form__submit-button" type="submit" disabled={isSubmitDisabled}>
        Enviar
      </button>
    </form>
  );
}
