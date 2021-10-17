import React from 'react';

const LandingButton = ({ title, onClick, className }) => {
  return (
    <div className={`${className}-button-container`} onClick={onClick}>
      <span className="search"> {title} </span>
    </div>
  );
};

export default LandingButton;
