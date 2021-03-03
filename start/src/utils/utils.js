import React from 'react';

const padTimeFunction = (time) => {
  return time.toString().padStart(2, '0');
};

export default padTimeFunction;