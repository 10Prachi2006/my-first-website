// src/App.jsx (MODIFIED to use imports)
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage.jsx';
import LoginPage from './pages/LoginPage.jsx'

import './App.css';

// *** IMPORTANT CHANGE HERE: Import fetchAPI and submitAPI directly ***
import { fetchAPI, submitAPI } from '../public/api.js'; // Adjust path if api.js is not in public relative to src/
import AboutSection from './components/AboutSection.jsx';
import SpecialsSection from './components/SpecialsSection.jsx';

// --- Reducer Logic ---

const initializeTimes = () => {
  // Use the imported fetchAPI function
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = action.payload.date;
    // Use the imported fetchAPI function
    return fetchAPI(selectedDate);
  }
  return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Use the imported submitAPI function
    if (submitAPI(formData)) {
      navigate('/confirmed-booking');
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/reservations"
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}
          />
          <Route path="/confirmed-booking" element={<ConfirmedBookingPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/menu" element={<SpecialsSection />} />
          <Route path="/order-online" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;