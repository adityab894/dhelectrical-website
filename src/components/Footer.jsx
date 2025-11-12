import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4m0 12v4m9-10h-4M7 12H3m15.364-6.364l-2.828 2.828M9.464 14.536l-2.828 2.828m12.728 0l-2.828-2.828M9.464 9.464L6.636 6.636" />
              </svg>
              <span className="logo-text">Darshil Heat Electrical</span>
            </div>
            <p className="company-name">Darshil Heat Electrical Inc.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>109-B, Survey No. 70/2, Bajrang Krupa Ind. Estate, Athal, Silvassa - 396230</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 95109 19644</span>
                <span>+91 98250 86138</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@dhelectricals.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Product Categories</h3>
            <ul className="footer-links">
              <li><a href="#">Industrial Furnaces</a></li>
              <li><a href="#">Process Heaters</a></li>
              <li><a href="#">Boilers &amp; Steam Systems</a></li>
              <li><a href="#">Heat Exchangers</a></li>
              <li><a href="#">Combustion Equipment</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Certifications</h3>
            <div className="certifications">
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                </svg>
              </div>
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              </div>
            </div>

            <h4 className="follow-title">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"></a>
              <a href="#" className="social-link" aria-label="Twitter"></a>
              <a href="#" className="social-link" aria-label="Instagram"></a>
              <a href="#" className="social-link" aria-label="LinkedIn"></a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 Industrial Heat Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


