import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { setLogout } from "../Redux/reducers/CompaniesAuth/index";
import { useDispatch, useSelector } from "react-redux";


const CompaniesNavbar = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.CompaniesAuth.isLoggedIn };
  });

  const navigate = useNavigate();
  const axios = require("axios");
useEffect(()=>{
    {console.log(isLoggedIn)}
},[])
  return (
    <>
   
      <div className="navbar_container">
        <img
          src="https://www.svgrepo.com/show/26693/job-search-symbol-of-suitcase-and-curriculum-paper.svg"
          className="navbar_logo"
        ></img>

{isLoggedIn&&<p onClick={()=>{
  navigate("/companies/companieshome")
}}>Home</p>}
{isLoggedIn&&<p
          onClick={() => {
            navigate("/companies/addnewjob");
          }}
        >
          Add New Job
        </p>}

        {isLoggedIn&&<p
          className="navbar_company"
        >
          My Account
        </p>}
      {isLoggedIn&&<p onClick={()=>{
        navigate('/companies/companyjobs')
      }}>
        My Jobs</p>}
        {isLoggedIn&&<p onClick={()=>{
          navigate('/companies/favusers')
        }}> My Favorite Users
          </p>}
         {isLoggedIn&&<p onClick={()=>{
          navigate('/companies/company/complete')
        }}>Complete My Account</p>}
           {isLoggedIn&&<p
              onClick={() => {
                dispatch(setLogout());
                navigate('/companies/companies/login')
              }}
            >
              Logout
            </p>}
          
        
      </div>
    </>
  );
};

export default CompaniesNavbar;
