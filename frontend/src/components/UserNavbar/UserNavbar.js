import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { setLogout } from "../Redux/reducers/usersAuth/index";
import { useDispatch, useSelector } from "react-redux";
import JobsSearch from "../JobsSearch/JobsSearch.js";
import { setJobSearch } from "../Redux/reducers/Users/users.js";

const UserNavbar = (setSearch) => {



  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.usersAuth.isLoggedIn };
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
      navigate('/users/userhome');
    dispatch(setJobSearch (true))
     }}>Home</p>}

{isLoggedIn&& <JobsSearch />}


{isLoggedIn&&<p
onClick={()=>{ navigate("/users/user/userdetails")}}
          className="navbar_company"
        >
          My Account
        </p>}
        {isLoggedIn&&<p onClick={()=>{
          navigate('/users/user/complete')
        }}>Complete My Account</p>}
        {isLoggedIn&&<p
          className="navbar_company" onClick={()=>{
            (navigate("/users/user/favjobs"))
          }}
        >
          My Favorite Jobs
        </p>}
          
            {isLoggedIn&&<p
              onClick={() => {
                dispatch(setLogout());
                navigate('/users/user/login')
              }}
            >
              Logout
            </p>}
          
        
      </div>
    </>
  );
};

export default UserNavbar;
