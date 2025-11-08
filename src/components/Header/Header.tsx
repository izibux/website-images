import { useState } from 'react';
import { getImageUrl } from '../../config/cdn';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <img 
            src={getImageUrl('logo.png')} 
            alt="Izibux Logo"
            className={styles.logoImage}
            onError={(e) => {
              // Hide image if it fails to load, show text only
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={styles.logoText}>IZIBUX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Início</a>
          <a href="#about" className={styles.navLink}>Sobre</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          Começar
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" className={styles.mobileNavLink} onClick={toggleMenu}>Início</a>
          <a href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>Sobre</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contato</a>
          <button className={styles.mobileCtaButton}>Começar</button>
        </div>
      )}
    </header>
  );
};

export default Header;

