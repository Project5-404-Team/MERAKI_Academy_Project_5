import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { setLogout } from "../Redux/reducers/usersAuth/index";
import { useDispatch, useSelector } from "react-redux";


const UserNavbar = () => {
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

     

{isLoggedIn&&<p
          className="navbar_company"
        >
          My Account
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