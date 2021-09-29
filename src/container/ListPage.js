import React, { useState } from 'react';
import LandingImage from '../components/LandingPage/LandingImage';
import LandingInput from '../components/LandingPage/LandingInput';
import LandingButton from '../components/LandingPage/LandingButton';
import { data } from './../data/mockData.json';

function ListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const onClickHandler = () => {
    const inputValue = document.getElementsByClassName('input')[0].value;

    setSearchTerm(inputValue);
  };
  return (
    <div className="listpage-container">
      <LandingImage />
      <LandingInput type="text" placeholder="search" />
      <LandingButton onClick={onClickHandler} title="Search" />
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
              return (
                <div className="search-result" key={index}>
                  <p className="result-country-city"> {`${val[4]}- ${val[5]}`} </p>
                  <p className="result-email"> {`Email: ${val[2]}`} </p>
                  <p className="result-name-year"> {`${val[0]} - ${val[3]}`} </p> <hr />
                </div>
              );
            })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ListPage;
