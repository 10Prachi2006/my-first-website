// src/components/SpecialsSection.js
import React from 'react';
import SpecialCard from './SpecialCard';
import Button from './Button';


import './SpecialsSection.css';

function SpecialsSection() {
  const specials = [
    {
      image: "greek salad.jpg",
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      image: "bruchetta.svg", // Placeholder for another image
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      image: "lemon dessert.jpg", // Placeholder for another image
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <Button type="primary">Online Menu</Button>
        </div>
        <div className="specials-cards-grid">
          {specials.map((special, index) => (
            <SpecialCard
              key={index}
              image={special.image}
              title={special.title}
              price={special.price}
              description={special.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;