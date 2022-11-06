import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./style.css";


const Navbar = () => {
 
  const navigate = useNavigate();
  const axios = require("axios");

  return (
    <>
      <div className="navbar_container">
        <img src="https://www.svgrepo.com/show/26693/job-search-symbol-of-suitcase-and-curriculum-paper.svg"
          className="navbar_logo"
         ></img>
         

          <p
            className="navbar_user_login_link"
            onClick={() => {
              navigate("/user/login");
            
            }}
          >
            Job Seeker Account
          </p>
       

        <p
          className="navbar_company_login_link"
          onClick={() => {
            navigate("/companies/login");
          }}
        >
         Employer Account
        </p>


         
         
        
      </div>
    </>
  );
};

export default Navbar;
