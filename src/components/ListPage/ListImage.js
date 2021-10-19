import React from 'react';
import logo from './../../images/sort.png';

const ListImage = ({ className }) => {
  return (
    <div className={`${className}-image-container`}>
      <img src={logo} alt="tesodev" />
    </div>
  );
};

export default ListImage;
