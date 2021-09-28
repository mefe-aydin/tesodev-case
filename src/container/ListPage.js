import React from 'react';
import LandingImage from '../components/LandingPage/LandingImage';
import LandingInput from '../components/LandingPage/LandingInput';
import LandingButton from '../components/LandingPage/LandingButton';

function ListPage() {
  return (
    <div className="listpage-container">
      <LandingImage />
      <LandingInput />
      <LandingButton title="Search" />
    </div>
  );
}

export default ListPage;
