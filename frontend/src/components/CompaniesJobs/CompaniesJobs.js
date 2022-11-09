import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCompanyJobs ,deleteJobs,setJobDetails} from "../Redux/reducers/Companies/companies";

const CompaniesJobs = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { companyId, companyJobs } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      companyJobs: state.companies.companyJobs,
    };
  });



  const getCompanyJobs = () => {
    axios
      .get(`http://localhost:5000/jobs/${companyId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setCompanyJobs(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteJob = (jobId) => {
    axios
      .delete(`http://localhost:5000/jobs/${jobId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(deleteJobs(result.data.result))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompanyJobs();
  }, []);

  return (
    <>
      <div className="jobsCardsDiv">
        {companyJobs &&
          companyJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p onClick={()=>{
                  dispatch(setJobDetails(elem))
                  navigate('/companies/jobdetails')
                }}>{elem.jobtitle}</p>
                <p>{elem.companyname}</p>
                <p>{elem.country}</p>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <p
                  onClick={() => {
                    deleteJob(elem.id);
                  }}
                >
                  Delete Job
                </p>
                <p onClick={() => {}}>Update</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CompaniesJobs;
