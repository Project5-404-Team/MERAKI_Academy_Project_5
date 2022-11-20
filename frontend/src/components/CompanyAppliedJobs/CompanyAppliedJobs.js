import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyAppliedJobs,setJobDetails } from "../Redux/reducers/Companies/companies";
import "./CompaniesAppliedJobs.css"
import Navbar from "../Navbar/Navbar";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";

const CompaniesAppliedJobs = () => {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const { companyId, companyAppliedJobs } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      companyAppliedJobs: state.companies.companyAppliedJobs,
    };
  });

  const getCompaniesAppliedJobs = () => {
    axios
      .get(`http://localhost:5000/jobs/jobapplies/${companyId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setCompanyAppliedJobs(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompaniesAppliedJobs();
  }, []);
  return (
    <>
   <CompaniesNavbar/>
      <div className="jobApplicationMainPage">
      {!companyAppliedJobs.length&& <div className="empety">
      <img src="https://res.cloudinary.com/dfpuepvtg/image/upload/v1668974149/no_kxgfhk.png" />
      <h1> There is no incoming applications yet</h1>
      
      </div>}
        {companyAppliedJobs &&
          companyAppliedJobs.map((elem, index) => {
            return (
              <div className="jobApplication">
                 <div className="jobApplicationCard">
    
              <div className="profilePicture">
                <img src={elem.userimage}></img>
                <a href={elem.cv} download target="blank"><button>Download CV</button></a>
              </div>
              <div className="personalInfo">
                <h3>Personal Information</h3>
            <p>Full Name :{elem.fullname}</p>
            <p>Date Of Birth :{elem.dateofbirth.substring(0,10)}</p>
            <p>Gender :{elem.gender}</p>
            <p>Phone Number :{elem.phonenumber}</p>
            <p>Address :{elem.wheredoyoulive}</p>
            <p>Citizenship : {elem.citizenships}</p>
            <p>Material Status :{elem.maritalstatus}</p>
            <p>Languages :{elem.languages}</p>
            </div>
            <div className="professionalInfo">
            <h3>Professional Information</h3>
      <p>Recent Job Function :{elem.recentjobfunction}</p>
      <p>Recent Job Title :{elem.recentjobtitle}</p>
      <p>Years Of Experience :{elem.yearsofexperience}</p>
      <p>Skills :{elem.skills}</p>
      <h3>Educational Information</h3>
      <p>Major :{elem.major}</p>
      <p>Educational Institute Name :{elem.educationalinstitutename}</p>
      </div>
      </div>
      <h2 style={{marginLeft:"500px"}}>Job Details</h2>
      <div id={elem.id} key={elem.id} className="jobCardDetailsApplied">
   
       <div className="generalInfoApplied">
        <div>
        <p style={{ fontWeight: "600" }}>Job Title :</p><p className="jobTitleCardDetails">
           {elem.jobtitle}
        </p>
        </div>
         <div>
           <p style={{ fontWeight: "600" }}>Job Location:</p>
           <p>{elem.joblocation}</p>
         </div>
         <div>
           {" "}
           <p style={{ fontWeight: "600" }}>Job Type:</p>{" "}
           <p>{elem.jobtype}</p>
         </div>
         <div>
           {" "}
           <p style={{ fontWeight: "600" }}>Job Role:</p>
           <p>{elem.jobrole}</p>
         </div>
         <div>
           <p style={{ fontWeight: "600" }}>Career Level: </p>
           <p>{elem.careerlevel}</p>
         </div>
         <div>
           <p style={{ fontWeight: "600" }}>Date Posted:</p>
           <p>{elem.createdat.substring(0, 10)}</p>
         </div>
         <div>
         <p style={{ fontWeight: "600" }}>Expiry Date: </p>
         <p>{elem.expirydate.substring(0, 10)}</p>
      </div>
       <div>
             <p style={{ fontWeight: "600" }}>Years Of Experience</p>
             <p>{elem.yearsofexperience}</p>
           </div>
           <div>
             {" "}
             <p style={{ fontWeight: "600" }}>Country Of Citizenship</p>
             <p>{elem.countryofcitizenship}</p>
           </div>
           <div>
             {" "}
             <p style={{ fontWeight: "600" }}>Country Of Residence</p>
             <p>{elem.countryofresidence}</p>
           </div>
           <div>
             <p style={{ fontWeight: "600" }}>Languages</p>
             <p>{elem.language}</p>
           </div>
           <div>
             <p style={{ fontWeight: "600" }}>Salary</p>
             <p>{elem.salary}</p>
           </div></div> 
       <div className="jobDetailsInfoApplied">
       
         <br></br>
         <p style={{ fontWeight: "600" }}>Job Description</p>{" "}
         <p className="jobDescriptionDetails">{elem.jobdescription}</p>
         <br></br>
         <p style={{ fontWeight: "600" }}>Job Requirements</p>
         <p>{elem.jobrequirements}</p>
         <br></br>
         
         </div>
      
     
      </div></div>
      

              
     
            
               
         
         
            );
          })}
      </div>
    </>
  );
};

export default CompaniesAppliedJobs;
