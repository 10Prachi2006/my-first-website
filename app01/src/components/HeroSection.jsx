// src/components/HeroSection.js
import React from 'react';
import Button from './Button';

import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Button to="/reservations" type="primary">Reserve a Table</Button>
        </div>
        <div className="hero-image">
          <img src="hero.jpg" alt="Delicious Bruschetta" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;