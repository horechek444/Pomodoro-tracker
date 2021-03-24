import React from 'react';
import './Button.css';

const Button = ({onClick, title}) => {
  return (
    <button
      className='button'
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
