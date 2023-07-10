import React from 'react';
import './style.scss';
import MenuOption from '../menu-options';
import LogoImage from '../../utils/assets/logo.svg';

export default function MenuDesktop() {
  return (
    <nav className="menu">
      <h3 className="menu__title">Gallery</h3>
      <img className="menu__image" alt="gallery" src={LogoImage}/>
      <p className="menu__subtitle">Bianca Grenzel Severo</p>
      <MenuOption />
    </nav>
  );
}
