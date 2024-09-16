import React from 'react';
import Button from './Button';
import './ButtonGrid.css';

const ButtonGrid = ({ numbers, onButtonClick }) => {
  return (
    <div className="numbers">
      {numbers.map((item, index) => (
        <Button key={index} number={item} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default ButtonGrid;
