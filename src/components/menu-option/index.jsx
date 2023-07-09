import React from 'react';
import './style.scss';

export default function MenuOption() {
  return (
    <ul className="menu-options">
      <li className="menu-options__item menu-options__item--selected">
        <a className="option" href="#home">Home</a>
      </li>
      <li className="menu-options__item">
        <a className="menu-options__option" href="#sair">Sair</a>
      </li>
    </ul>
  );
}
