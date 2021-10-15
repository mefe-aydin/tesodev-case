import './../../style/LandingInput.css';
import React from 'react';

const LandingInput = ({ onChange }) => {
  return (
    <div className="input-container">
      <input className="input" type="text" placeholder="Search" onChange={onChange} />
    </div>
  );
};

export default LandingInput;
