import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductMegaMenu from './ProductMegaMenu.jsx';
import logoImage from '../assets/dhe-bg.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenQuote = () => {
    if (typeof window.openQuoteModal === 'function') {
      window.openQuoteModal();
    }
  };

  const handleDownloadCatalog = () => {
    if (typeof window.downloadCatalog === 'function') {
      window.downloadCatalog();
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logoImage} alt="DHE logo" className="logo-icon" />
          <span className="logo-text"></span>
        </div>

        <div className="nav-menu" id="nav-menu">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <button className="nav-link nav-link-button" onClick={() => setMenuOpen((v) => !v)} onMouseEnter={() => setMenuOpen(true)}>
            Products
          </button>
          <ProductMegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>

          <div className="nav-buttons">
            <button className="btn btn-outline" onClick={handleOpenQuote}>
              Request a Quote
            </button>
            <button className="btn btn-primary" onClick={handleDownloadCatalog}>
              Download Catalog
            </button>
          </div>
        </div>

        <div className="nav-toggle" id="nav-toggle" data-testid="button-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}


