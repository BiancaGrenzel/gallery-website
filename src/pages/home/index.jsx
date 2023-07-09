import React from 'react';
import './style.scss';
import { isMobile } from 'react-device-detect';
import MenuDesktop from '../../components/menu-desktop';
import MenuMobile from '../../components/menu-mobile';

export default function Home() {
  return (
    <div className="home">
      {
            isMobile ? (
              <MenuMobile />
            ) : (
              <MenuDesktop />
            )
        }
    </div>
  );
}
