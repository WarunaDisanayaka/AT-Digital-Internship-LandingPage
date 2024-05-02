import React from 'react';
import './Button.css'; 


function CustomButton({ children, className }) {
  return (
    <button
      type="button"
      className={`btn btn-primary ${className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
