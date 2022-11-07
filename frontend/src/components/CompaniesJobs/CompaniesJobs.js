import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesJobs = () => {
    const {companyId}=useSelector((state)=>{
        return {companyId:state.CompaniesAuth.companyId}
    })

  const [companyjobs, setCompanyJobs] = useState("");

  const getCompanyJobs = () => {
    axios
      .get(`http://localhost:5000/jobs/${companyId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        setCompanyJobs(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteJob = (jobId)=>{
    axios
      .delete(`http://localhost:5000/jobs/${jobId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCompanyJobs();
  }, []);

  return (
    <>
      <div className="jobsCardsDiv">
        {companyjobs &&
          companyjobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p>{elem.jobtitle}</p>
                <p>{elem.companyname}</p>
                <p>{elem.country}</p>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <p onClick={()=>{
                deleteJob(elem.id)
                }}>Delete Job</p>
                <p onClick={()=>{
                    
                }}>Update</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CompaniesJobs;
