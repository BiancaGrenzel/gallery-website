import React, { useEffect, useState, useCallback } from "react";
import { isMobile } from "react-device-detect";
import axios from "axios";
import MenuDesktop from "../../components/menu-desktop";
import MenuMobile from "../../components/menu-mobile";
import UploadImageCard from "../../components/upload-image-card";
import Modal from "../../components/modal";
import UploadImageForm from "../../components/upload-image-form";
import Loading from "../../components/loading";
import ImageCard from "../../components/image-card";
import "./style.scss";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/images`,
      });
      setImages(response.data);
    } catch (error) {
      alert("Erro ao buscar imagens", error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshPage = useCallback(() => {
    getImages();
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (isLoading) {
    return;
  }

  return (
    <div className={`home-page ${isMobile && "home-page--mobile"}`}>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`home-page__content ${
            isMobile && "home-page__content--mobile"
          }`}
        >
          <UploadImageCard onClick={handleModal} />
          {images &&
            images.map((image) => (
              <ImageCard key={image._id} image={image} refresh={refreshPage} />
            ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <UploadImageForm refresh={refreshPage}/>
      </Modal>
    </div>
  );
}
