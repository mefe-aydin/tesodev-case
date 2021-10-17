import React from 'react';

const LandingInput = ({ onChange, className }) => {
  return (
    <div className={`${className}-input-container`}>
      <input
        className={`${className}-input`}
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default LandingInput;
