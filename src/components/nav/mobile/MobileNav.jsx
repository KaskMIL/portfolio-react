import React from 'react';
import SocialIcons from '../../social/Social';
import styles from './MobileNav.module.scss';

const MobileNav = () => (
  <>
    <nav className={styles.nav}>
      <ul className={`${styles.itemCont} ${styles.mobileItems}`}>
        <li>Main</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Let&apos;s talk</li>
      </ul>
      <SocialIcons />
    </nav>
  </>
);

export default MobileNav;
