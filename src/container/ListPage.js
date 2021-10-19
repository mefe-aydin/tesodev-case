import './../style/ListPage.css';
import React, { useState } from 'react';
import LandingImage from '../components/LandingPage/LandingImage';
import LandingInput from '../components/LandingPage/LandingInput';
import LandingButton from '../components/LandingPage/LandingButton';
import ListImage from '../components/ListPage/ListImage';
import { data } from './../data/mockData.json';
import sort from './../images/sort.png';

function ListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('nameAscending');

  const onClickHandler = () => {
    const inputValue = document.getElementsByClassName('listpage-input')[0].value;
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
    return (
      <div className="result-container">
        {sorted.map((val, index) => {
          return (
            <div className="result" key={index}>
              <div className="left-area">
                <p className="country-city"> {`${val[4]}- ${val[5]}`} </p>
                <p className="name-year"> {`${val[0]} - ${val[3]}`} </p>
              </div>
              <div className="right-area">
                <p className="email"> {`Email: ${val[2]}`} </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="listpage-container">
      <LandingImage className="listpage" />
      <LandingInput className="listpage" type="text" placeholder="search" />
      <LandingButton className="listpage" onClick={onClickHandler} title="Search" />
      <div className="listpage-order-by-data">
        <ListImage className="listpage" />
        <div className="select-container">
          <select className="orderByData" onChange={(e) => setSortType(e.target.value)}>
            <option> Order By </option> <option value="nameAscending"> Name ascending </option>
            <option value="nameDescending"> Name descending </option>
            <option value="yearAscending"> Year ascending </option>
            <option value="yearDescending"> Year descending </option>
          </select>
        </div>
      </div>
      {sortData(sortType)}
    </div>
  );
}

export default ListPage;
