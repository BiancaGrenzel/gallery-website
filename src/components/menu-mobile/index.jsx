import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import MenuOption from '../menu-option';
import './style.scss';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <HiOutlineMenu role="presentation" className="burger-menu__icon" onClick={handleMenuClick} />
      {isOpen && (
        <div className="burger-menu__content">
          <h2 className="burger-menu__title">Gallery</h2>
          <p className="burger-menu__subtitle">Bianca Grenzel Severo</p>
          <MenuOption />
        </div>
      )}
    </div>
  );
}
