// src/components/TestimonialCard.js
import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ rating, name, profileImage, review }) {
  // Placeholder for star ratings (can be implemented with SVG/icons later)
  const renderStars = (num) => {
    return '⭐'.repeat(num);
  };

  return (
    <article className="testimonial-card">
      <div className="rating">
        <strong>Ratings:</strong> {renderStars(rating)}
      </div>
      <div className="reviewer-info">
        <img src={profileImage} alt={name} className="profile-pic" />
        <span className="reviewer-name">{name}</span>
      </div>
      <p className="review-text">"{review}"</p>
    </article>
  );
}

export default TestimonialCard;