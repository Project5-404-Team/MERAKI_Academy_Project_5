import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
      <div className="FavCardsDiv">
        {appliedJobs &&
          appliedJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p
                  onClick={() => {
                    dispatch(setJobDetails(elem));
                    navigate("/users/jobdetails");
                  }}
                >
                  {elem.jobtitle}
                </p>
                <p
                  onClick={() => {
                    dispatch(setCompanyDetailsInUsersApp(elem));
                    navigate("/users/companydetails/userapp");
                  }}
                >
                  {elem.companyname}
                </p>
                <p>{elem.country}</p>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <button
                  onClick={() => {
                    deleteAppliedJob1(elem.id)
                    dispatch(deleteAppliedJobs(elem.id));
                    
                  }}
                >
                  {" "}
                  delete Application
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default UserAppliedJobs;
