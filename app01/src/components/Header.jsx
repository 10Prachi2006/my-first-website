// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// No specific CSS for Header in this minimal setup, can add if needed.
import './Header.css'; // If you create Header.css

function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: 'var(--color-primary-green)', color: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-lemon-yellow)' }}>Little Lemon</Link>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
          <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
          <li><Link to="/reservations" style={{ color: 'white' }}>Reservations</Link></li>
          <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
          <li><Link to="/menu" style={{ color: 'white' }}>Menu</Link></li>
          <li><Link to="/order-online" style={{ color: 'white' }}>Order Online</Link></li>
          <li><Link to="/login" style={{ color: 'white' }}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;