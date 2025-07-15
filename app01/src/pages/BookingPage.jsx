// src/pages/BookingPage.jsx
import React from 'react';
import BookingForm from '../components/BookingForm.jsx'; // Note the .jsx extension
import './BookingPage.css'; // Create this CSS file next

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page-container">
      <h1 className="booking-page-title">Reserve a Table at Little Lemon</h1>
      <p className="booking-page-description">
        Experience Mediterranean culinary delights in a cozy and inviting atmosphere.
        Fill out the form below to secure your spot!
      </p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <div className="booking-page-additional-content">
        <p>For large group bookings or special requests, please call us directly.</p>
      </div>
    </div>
  );
}

export default BookingPage;