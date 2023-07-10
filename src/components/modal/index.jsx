import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import "./style.scss";

export default function Modal({ isOpen, children }) {
  const [open, setOpen] = useState(isOpen);

  if(!open) return null;

  return (
    <div className="modal">
      <div className="modal__card">
        <div className="modal__close-icon">
          <GrFormClose onClick={() => setOpen(false)} />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
