import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../UserNavbar/UserNavbar";
import "../UserFavJobs/UserFavJobs.css"

import {

  setJobDetails,
  setCompanyDetailsInUsersApp,
  setAppliedJobs,deleteAppliedJobs
} from "../Redux/reducers/Users/users";
function UserAppliedJobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const { userId, appliedJobs } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      appliedJobs: state.users.appliedJobs,
    };
  });

  const getAppliedJobJobs = () => {
    axios
      .get(`http://localhost:5000/jobs/jobapply/${userId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setAppliedJobs(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAppliedJobJobs();
  }, []);

  const deleteAppliedJob1 = (appliedJobId) => {
    axios
      .delete(`http://localhost:5000/jobs/jobapply/${appliedJobId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
       <UserNavbar/>
       <div className="favHomeDiv">
 
      <div className="favjobsCardsDiv">
        {appliedJobs &&
          appliedJobs.map((elem, index) => { return(
            <div id={elem.id} key={index} className="favjobCard">
            <img className="companyLogoCard" src={elem.companylogo}></img>
            <h2 className="jobTitleCard" onClick={()=>{
              dispatch(setJobDetails(elem))
              navigate('/users/jobdetails')
            }}>{elem.jobtitle}</h2>
            <h4 className="companyNameCard" onClick={()=>{
              dispatch(setCompanyDetailsInUsersApp(elem))
              navigate('/users/companydetails/userapp')
            }}>{elem.companyname} - {elem.industry} - {elem.country}</h4>
            
            
            <p className="carerLevelCard">Career Level : {elem.careerlevel}</p>
            <p></p>
            <p className="createdDateCard" style={{fontSize:"12px"}} >Date Posted :{elem.createdat.substring(0,10)}</p>
            <p className="expiryDateCard" style={{fontSize:"12px"}}>Expiry Date: {elem.expirydate.substring(0,10)}</p>
            <p className="jobDescription">{elem.jobdescription.substring(0,150)}...</p>
                <button className="deleteFavButton"
                  onClick={() => {
                    deleteAppliedJob1(elem.id)
                    dispatch(deleteAppliedJobs(elem.id));
                    
                  }}
                >
                  {" "}
                  Delete Application
                </button>
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
}
export default UserAppliedJobs;
