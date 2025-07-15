// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="footer.jpg" alt="Little Lemon Footer Logo" />
        </div>

        <div className="footer-section">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><address>123 Lemon Street, Chicago, IL</address></li>
            <li><a href="tel:+11234567890">(123) 456-7890</a></li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;