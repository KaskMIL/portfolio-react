import React from 'react';

import { FaBars } from 'react-icons/fa';
import MobileNav from './nav/mobile/MobileNav';

const Header = () => {
  const title = 'This is a title';
  return (
    <header>
      <FaBars />
      <MobileNav>
        <h2>{title}</h2>
      </MobileNav>
    </header>
  );
};

export default Header;
