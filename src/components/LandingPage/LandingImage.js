import React from 'react';
import logo from './../../tesodev.jpg';

const LandingImage = ({ className }) => {
  return (
    <div className={`${className}-image-container`}>
      <img src={logo} alt="tesodev" />
    </div>
  );
};

export default LandingImage;
