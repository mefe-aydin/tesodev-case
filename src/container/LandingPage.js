import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingImage from './../components/Landing Page/LandingImage';
import LandingInput from '../components/Landing Page/LandingInput';
import LandingButton from '../components/Landing Page/LandingButton';

function LandingPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://drive.google.com/file/d/1EhLvmOC_d7WNCMDmBua0lsjp2PDfTdr2/view')
      .then((res) => setData(res.data));
  }, [data]);

  return (
    <div className="landing-container">
      <LandingImage />
      <LandingInput />
      <LandingButton />
    </div>
  );
}

export default LandingPage;
