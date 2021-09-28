import React from 'react';

const LandingButton = ({ title, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <span className="title">{title}</span>
    </div>
  );
};

export default LandingButton;
