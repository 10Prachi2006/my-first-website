// src/components/TestimonialsSection.js
import React from 'react';
import TestimonialCard from './TestimonialCard';


import './TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      name: 'Alice Johnson',
      profileImage: "lego1.jpg",
      review: 'The food was amazing, and the service was impeccable! A truly delightful experience.',
    },
    {
      rating: 4,
      name: 'Bob Williams',
      profileImage: "lego1.jpg",
      review: 'Great ambiance and delicious dishes. The Greek salad is a must-try!',
    },
    {
      rating: 5,
      name: 'Charlie Brown',
      profileImage: "lego1.jpg",
      review: 'Little Lemon never disappoints! Fresh ingredients and authentic flavors every time.',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              name={testimonial.name}
              profileImage={testimonial.profileImage}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;