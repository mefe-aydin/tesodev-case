import React from 'react';

const LandingButton = ({ onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <span className="title">Search</span>
    </div>
  );
};

export default LandingButton;
