import React, { useState } from "react";
import "./style.scss";
import { isMobile } from "react-device-detect";
import MenuDesktop from "../../components/menu-desktop";
import MenuMobile from "../../components/menu-mobile";
import UploadImageCard from "../../components/upload-image-card";
import Modal from "../../components/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={`home-page ${ isMobile && 'home-page--mobile'}`}>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
      <div className="home-page__content">
        <UploadImageCard onClick={handleModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        <h3>teste</h3>
      </Modal>
    </div>
  );
}
