// src/components/SpecialCard.js
import React from 'react';
import Button from './Button';
import './SpecialCard.css';

function SpecialCard({ image, title, price, description }) {
  return (
    <article className="special-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <Button type="text" onClick={() => console.log(`Order ${title}`)}>
          Order a delivery
        </Button>
      </div>
    </article>
  );
}

export default SpecialCard;