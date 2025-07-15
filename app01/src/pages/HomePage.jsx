// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection'; // CallToAction
import SpecialsSection from '../components/SpecialsSection'; // Specials
import TestimonialsSection from '../components/TestimonialsSection'; // CustomersSay
import AboutSection from '../components/AboutSection'; // Chicago

// No specific CSS for HomePage itself, as sections handle their own styling.
// You can add HomePage.css if needed for overall page specific layouts.

function HomePage() {
    return (
        <> {/* Using a React Fragment to group components without an extra div */}
            <HeroSection />
            <SpecialsSection />
            <TestimonialsSection />
            <AboutSection />
        </>
    );
}

export default HomePage;