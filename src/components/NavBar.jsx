import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './css/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>1 Year</div>
      <div className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
        <li>
          <Link
            to="Home"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="Moments"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Moments
          </Link>
        </li>
        <li>
          <Link
            to="Letter"
            smooth={true}
            duration={500}
            className={styles.navLink}
            style={{ cursor: 'pointer' }}
            onClick={() => setMenuOpen(false)}
          >
            Letter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
