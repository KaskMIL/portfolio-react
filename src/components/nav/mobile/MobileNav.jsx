import React from 'react';
import PropTypes from 'prop-types';
import styles from './MobileNav.module.scss';

const MobileNav = ({ children }) => (
  <>
    <nav className={styles.nav}>
      <ul>
        <li>Main</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Let&apos;s talk</li>
      </ul>
    </nav>
    <div>{children}</div>
  </>
);

MobileNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileNav;
