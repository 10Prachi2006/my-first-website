// src/pages/ConfirmedBooking.jsx
import React from 'react';
import './ConfirmedBookingPage.css'; // Create this CSS file next

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking-container">
      <h1 className="confirmed-booking-title">Booking Confirmed!</h1>
      <p className="confirmed-booking-message">
        Your table has been successfully reserved at Little Lemon.
      </p>
      <p className="confirmed-booking-details">
        We look forward to seeing you! A confirmation email with details has been sent.
      </p>
      <a href="/" className="back-home-button">Back to Home</a>
    </div>
  );
}

export default ConfirmedBooking;