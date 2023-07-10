import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import Loading from "../loading";
import "./style.scss";

export default function UploadImageForm({ refresh, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    file: "",
    name: "",
    date: "",
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFormValues({ ...formValues, file: base64String });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setIsLoading(true);
      const postImage = async (formData) => {
        try {
          if (id !== undefined) {
            await axios({
              method: "put",
              url: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/images/${id}`,
              data: {
                file: formData.file,
                name: formData.name,
                date: formData.date,
              },
            });
            refresh();
            return;
          } else {
            await axios({
              method: "post",
              url: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/images`,
              data: {
                file: formData.file,
                name: formData.name,
                date: formData.date,
              },
            });
          }
          refresh();
        } catch (error) {
          alert("Erro ao enviar imagem", error);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      postImage(formValues);
    },
    [formValues, id, refresh]
  );

  const handleEdit = useCallback(() => {
    setIsLoading(true);
    const getImageInfo = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/images/${id}`,
        });
        setFormValues({
          file: response.data.file,
          name: response.data.name,
          date: response.data.date,
        });
      } catch (error) {
        alert("Erro ao buscar imagem", error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImageInfo();
  }, [id]);

  useEffect(() => {
    if (id !== "" && id !== undefined) {
      handleEdit();
    }
  }, [handleEdit, id]);

  const isSubmitDisabled =
    !formValues.name || !formValues.file || !formValues.date;

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="upload-form__input-file-container">
            <label
              className={`upload-form__input-file-label ${
                id !== undefined && "upload-form__input-file-label--disabled"
              }`}
              htmlFor="file"
              required
              disabled={id !== undefined}
            >
              {formValues.file ? "Imagem selecionada" : "Enviar imagem"}
            </label>
            <input
              onChange={handleFileUpload}
              id="file"
              name="file"
              className="upload-form__input--file"
              type="file"
              alt="upload"
              required
              disabled={id !== undefined}
            />
          </div>
          <input
            value={formValues.name}
            onChange={(event) =>
              setFormValues({ ...formValues, name: event.target.value })
            }
            className="upload-form__input"
            type="text"
            placeholder="Nome da imagem"
            required
          />
          <input
            value={formValues.date}
            onChange={(event) =>
              setFormValues({ ...formValues, date: event.target.value })
            }
            className="upload-form__input"
            type="date"
            placeholder="Data da imagem"
            required
          />
          <button
            className="upload-form__submit-button"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Enviar
          </button>
        </>
      )}
    </form>
  );
}
