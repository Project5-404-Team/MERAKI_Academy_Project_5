import react from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import { setJobSearch } from "../Redux/reducers/Users/users.js";
import { setAllUsers } from "../Redux/reducers/Companies/companies";

function FilterNavCompanies() {
  const dispatch = useDispatch();

  const HandleUserSearch = (search) => {
    axios
      .get(`http://localhost:5000/users/search/?search=${search}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setAllUsers(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="filterNavList">
        <ul>
          <h2>Filter</h2>
          <h3>Industry</h3>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Non-Profit and Social Services
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Education and Training
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Government and Public Sector{" "}
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Healthcare and Medical Services
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Retail and Wholesale{" "}
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Telecommunications
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Call Center, Telemarketing and BPO
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Catering, Food Services and Restaurants
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Banking and Financial Services
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Manufacturing and Production
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Marketing, Advertising and Public Relations
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Shipping and Logistics{" "}
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Consultancy
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Furniture and Office Equipment
          </li>
          <li
            value={"Property and Real Estate"}
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Property and Real Estate
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Business Support Services
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Employment Placement Agencies and Human Resources{" "}
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Insurance
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Law Enforcement and Security Services{" "}
          </li>
          <li
            onClick={(e) => {
              HandleUserSearch(e.target.innerText);
            }}
          >
            Research and Development{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default FilterNavCompanies;
