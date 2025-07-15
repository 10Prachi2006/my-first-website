// src/components/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // State for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes && availableTimes.length > 0 ? availableTimes[0] : '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [email, setEmail] = useState(''); // New state for email

  // State for validation errors
  const [dateError, setDateError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [emailError, setEmailError] = useState(''); // New state for email error

  // State to track if the form is valid
  const [isFormValid, setIsFormValid] = useState(false);

  // Use useEffect to update the time when availableTimes prop changes
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    } else {
      setTime('');
    }
  }, [availableTimes]);

  // --- Validation Functions ---
  const validateDate = (selectedDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inputDate = new Date(selectedDate);
    inputDate.setHours(0, 0, 0, 0);

    if (!selectedDate) {
      setDateError('Date is required.');
      return false;
    } else if (inputDate < today) {
      setDateError('Date cannot be in the past.');
      return false;
    }
    setDateError('');
    return true;
  };

  const validateGuests = (numGuests) => {
    if (numGuests < 1 || numGuests > 10) {
      setGuestsError('Number of guests must be between 1 and 10.');
      return false;
    }
    setGuestsError('');
    return true;
  };

  const validateEmail = (inputEmail) => {
    // Basic regex for email validation (can be more complex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputEmail) {
      setEmailError('Email is required.');
      return false;
    } else if (!emailRegex.test(inputEmail)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  // --- Function to check overall form validity ---
  const checkFormValidity = () => {
    const isDateValid = validateDate(date);
    const isTimeValid = time !== '';
    const areGuestsValid = validateGuests(guests);
    const isOccasionValid = occasion !== '';
    const isEmailValid = validateEmail(email); // Validate email

    setIsFormValid(isDateValid && isTimeValid && areGuestsValid && isOccasionValid && isEmailValid);
  };

  // Run validation whenever relevant form fields change
  useEffect(() => {
    checkFormValidity();
  }, [date, time, guests, occasion, email, availableTimes]);

  // Handle date change
  const handleDateChange = (e) => {
    const selectedDateString = e.target.value;
    setDate(selectedDateString);
    validateDate(selectedDateString);

    const [year, month, day] = selectedDateString.split('-').map(Number);
    const selectedDateObject = new Date(year, month - 1, day);

    dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDateObject } });
  };

  // Handle guests change
  const handleGuestsChange = (e) => {
    const numGuests = parseInt(e.target.value);
    setGuests(numGuests);
    validateGuests(numGuests);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail); // Validate on change
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Re-run all validations on submit to catch any last-minute issues
    const isDateValid = validateDate(date);
    const areGuestsValid = validateGuests(guests);
    const isTimeValid = time !== '';
    const isOccasionValid = occasion !== '';
    const isEmailValid = validateEmail(email); // Re-validate email on submit

    if (isDateValid && areGuestsValid && isTimeValid && isOccasionValid && isEmailValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
        email, // Include email in formData
      };
      submitForm(formData);
    } else {
      console.log("Form is invalid. Please correct the errors.");
    }
  };

  // Get today's date in YYYY-MM-DD format for HTML5 min attribute
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          required
          min={getMinDate()}
          value={date}
          onChange={handleDateChange}
        />
        {dateError && <p className="error-message">{dateError}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes && availableTimes.length === 0 && <option value="">No times available</option>}
          {availableTimes && availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          id="guests"
          name="guests"
          required
          min="1"
          max="10"
          value={guests}
          onChange={handleGuestsChange}
        />
        {guestsError && <p className="error-message">{guestsError}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      {/* New Email Input Field */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email" // HTML5 validation for email format
          id="email"
          name="email"
          required
          placeholder="your.email@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <input
        type="submit"
        value="Make Your reservation"
        className="submit-button"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;