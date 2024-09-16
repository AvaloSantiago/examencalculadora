import React, { useState } from 'react';
import ButtonGrid from './components/ButtonGrid';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInputValue(''); 
    } else if (value === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue('Error');
      }
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <>
      <input 
        type="text" 
        value={inputValue} 
       />
      <ButtonGrid 
        numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '=', 'C']} 
        onButtonClick={handleButtonClick} 
      />
    </>
  );
};

export default App;
