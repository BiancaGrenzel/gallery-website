import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./style.scss";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__card">
        <div className="modal__close-icon">
          <GrFormClose onClick={onClose} />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
