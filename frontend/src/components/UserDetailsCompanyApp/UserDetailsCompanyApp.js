import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import {setUserCoId} from "../Redux/reducers/Companies/companies"


function UserDetailsCompanyApp() {


  const dispatch =useDispatch()
  const navigate=useNavigate()

  const { userDetailsInCompanyApp } = useSelector((state) => {
    return {
      userDetailsInCompanyApp: state.companies.userDetailsInCompanyApp,
    };
  });

  return (
    <>
         <CompaniesNavbar/>
         <div className="userDetailsMainDiv">
        <div className="userDetailsCard">
          <div className="profilePicture">
            <img src={userDetailsInCompanyApp.userimage}></img>
            {userDetailsInCompanyApp.cv && (
              <a href={userDetailsInCompanyApp.cv} download>
                <button>Download CV</button>
              </a>
            )}
           
          </div>
          <div className="personalInfo">
            <h3>Personal Information</h3>
            <p>Full Name :{userDetailsInCompanyApp.fullname}</p>
            <p>Date Of Birth :{userDetailsInCompanyApp.dateofbirth.substring(0, 10)}</p>
            <p>Gender :{userDetailsInCompanyApp.gender}</p>
            <p>Phone Number :{userDetailsInCompanyApp.phonenumber}</p>
            <p>Address :{userDetailsInCompanyApp.wheredoyoulive}</p>
            <p>Citizenship : {userDetailsInCompanyApp.citizenships}</p>
            <p>Material Status :{userDetailsInCompanyApp.maritalstatus}</p>
            <p>Languages :{userDetailsInCompanyApp.languages}</p>
          </div>
          <div className="professionalInfo">
            <h3>Professional Information</h3>
            <p>Recent Job Function :{userDetailsInCompanyApp.recentjobfunction}</p>
            <p>Recent Job Title :{userDetailsInCompanyApp.recentjobtitle}</p>
            <p>Years Of Experience :{userDetailsInCompanyApp.yearsofexperience}</p>
            <p>Skills :{userDetailsInCompanyApp.skills}</p>
            <h3>Educational Information</h3>
            <p>Major :{userDetailsInCompanyApp.major}</p>
            <p>
              Educational Institute Name :{userDetailsInCompanyApp.educationalinstitutename}
            </p>
          </div>
        </div>
        <button onClick={()=>{
dispatch(setUserCoId(userDetailsInCompanyApp.id))
navigate("/messenger")
    }}> Send Message</button>
      
        </div>
    </>
  );
}

export default UserDetailsCompanyApp;
