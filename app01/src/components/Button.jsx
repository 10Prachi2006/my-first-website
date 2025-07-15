// src/components/Button.js
import React from 'react';
import './Button.css';

function Button({ children, type = 'primary', onClick, to = null }) {
  const ButtonContent = (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );

  // If 'to' prop is provided, render as an anchor tag
  if (to) {
    return (
      <a href={to} className={`button ${type}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return ButtonContent;
}

export default Button;