// src/components/AboutSection.js
import React from 'react';

import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
          <p>
            Our cozy atmosphere and friendly staff make it the perfect spot for
            a quick lunch, a romantic dinner, or a gathering with friends.
            Come and experience the taste of authentic Mediterranean cuisine with a modern twist.
          </p>
        </div>
        <div className="about-images">
          <img src="chef1.jpg" alt="Chef cooking" className="image-top" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;