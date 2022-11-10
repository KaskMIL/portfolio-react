import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import MobileNav from './nav/mobile/MobileNav';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const title = 'This is a title';
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <FaBars onClick={showSidebar} />
      <MobileNav />
      { title }
    </header>
  );
};

export default Header;
