import React from 'react';
import './Button.css'; 

const Button = ({number, onClick}) => {
  return (
    <button className="number-button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
};

export default Button;
