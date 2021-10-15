import './../style/LandingPage.css';
import React, { useState } from 'react';
import LandingImage from '../components/LandingPage/LandingImage';
import LandingInput from '../components/LandingPage/LandingInput';
import LandingButton from '../components/LandingPage/LandingButton';
import { useHistory } from 'react-router-dom';
import { data } from './../data/mockData.json';
import listpage from './ListPage';

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  let elementNumber;

  const handleClick = () => {
    history.push('/listpage');
  };

  return (
    <div className="landing-container">
      <LandingImage />
      <LandingInput
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <LandingButton
        onClick={() => {
          history.push('/listpage');
        }}
        component={listpage}
        title="Search"
      />

      {searchTerm ? (
        <div className="search-result-container">
          {data
            .filter((val) => {
              if (searchTerm === '') {
                return '';
              } else if (
                val[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
                val[1].toLowerCase().includes(searchTerm.toLowerCase()) ||
                val[2].toLowerCase().includes(searchTerm.toLowerCase()) ||
                val[3].toLowerCase().includes(searchTerm.toLowerCase()) ||
                val[4].toLowerCase().includes(searchTerm.toLowerCase()) ||
                val[5].toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, index) => {
              elementNumber = index;
              return (
                <div className="search-result" key={index}>
                  <div className="result-left-area">
                    <p className="result-country-city">{`${val[4]}- ${val[5]}`}</p>
                    <p className="result-name-year"> {`${val[0]} - ${val[3].split('/')[2]}`} </p>
                  </div>
                  <div className="result-right-area">
                    <p className="result-email"> {`Email: ${val[2]}`} </p>
                  </div>
                </div>
              );
            })}
          <div className="show-more" onClick={handleClick} component={listpage}>
            {elementNumber >= 2 ? (
              <div>
                <p>Show More</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default LandingPage;
