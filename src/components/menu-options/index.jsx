import React from 'react';
import './style.scss';

export default function MenuOptions() {
  return (
    <ul className="menu-options">
      <li className="menu-options__item menu-options__item--selected">
        <a className="menu-options__option" href="#home">Home</a>
      </li>
      <li className="menu-options__item">
        <a className="menu-options__option" href="https://github.com/BiancaGrenzel">Github</a>
      </li>
      <li className="menu-options__item">
        <a className="menu-options__option" href="https://www.linkedin.com/in/bianca-grenzel-severo-07b770188/">Linkedin</a>
      </li>
      <li className="menu-options__item">
        <a className="menu-options__option" href="https://github.com/BiancaGrenzel/gallery-website">Este Respositório</a>
      </li>
    </ul>
  );
}
