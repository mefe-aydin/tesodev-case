import './../style/ListPage.css';
import React, { useState } from 'react';
import LandingImage from '../components/LandingPage/LandingImage';
import LandingInput from '../components/LandingPage/LandingInput';
import LandingButton from '../components/LandingPage/LandingButton';
import { data } from './../data/mockData.json';

function ListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('nameAscending');

  const onClickHandler = () => {
    const inputValue = document.getElementsByClassName('input')[0].value;
    setSearchTerm(inputValue);
  };

  const sortData = (type) => {
    const sorted = data.filter((val) => {
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
    });
    if (type === 'nameAscending') {
      sorted.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (type === 'nameDescending') {
      sorted.sort((a, b) => b[0].localeCompare(a[0]));
    } else if (type === 'yearAscending') {
      sorted.sort(
        (a, b) => new Date(a[3].split('/').reverse()) - new Date(b[3].split('/').reverse()),
      );
    } else if (type === 'yearDescending') {
      sorted.sort(
        (a, b) => new Date(b[3].split('/').reverse()) - new Date(a[3].split('/').reverse()),
      );
    }
    console.log(sorted);
    return (
      <div className="search-result-container">
        {sorted.map((val, index) => {
          return (
            <div className="search-result" key={index}>
              <p className="result-country-city"> {`${val[4]}- ${val[5]}`} </p>
              <p className="result-email"> {`Email: ${val[2]}`} </p>
              <p className="result-name-year"> {`${val[0]} - ${val[3]}`} </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="listpage-container">
      <LandingImage />
      <LandingInput type="text" placeholder="search" />
      <LandingButton onClick={onClickHandler} title="Search" />
      <select className="orderByData" onChange={(e) => setSortType(e.target.value)}>
        <option>Order By</option>
        <option value="nameAscending">Name ascending</option>
        <option value="nameDescending">Name descending</option>
        <option value="yearAscending">Year ascending</option>
        <option value="yearDescending">Year descending</option>
      </select>
      {sortData(sortType)}
    </div>
  );
}

export default ListPage;
