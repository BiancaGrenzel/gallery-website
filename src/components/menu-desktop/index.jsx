import React from 'react';
import './style.scss';
import MenuOption from '../menu-option';

export default function MenuDesktop() {
  return (
    <nav className="menu">
      <h3 className="menu__title">Gallery</h3>
      <image className="menu__image" alt="gallery" />
      <p className="menu__subtitle">Bianca Grenzel Severo</p>
      <MenuOption />
    </nav>
  );
}
