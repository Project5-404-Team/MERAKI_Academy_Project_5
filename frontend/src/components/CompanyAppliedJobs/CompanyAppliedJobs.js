import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyAppliedJobs,setJobDetails } from "../Redux/reducers/Companies/companies";

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
      <div>
        {companyAppliedJobs &&
          companyAppliedJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="favCard">
                <h1 onClick={()=>{
                        dispatch(setJobDetails(elem))
                        navigate('/companies/jobdetails')
                }}>{elem.jobtitle}</h1>
                <p>{elem.fullname}</p>
                <p>{elem.citizenships}</p>
                <p>{elem.cv}</p>
                <p>{elem.dateofbirth}</p>
                <p>{elem.educationalinstitutename}</p>
                <p>{elem.gender}</p>
                <p>{elem.languages}</p>
                <p>{elem.major}</p>
                <p>{elem.maritalstatus}</p>
                <p>{elem.phonenumber}</p>
                <p>{elem.recentjobfunction}</p>
                <p>{elem.recentjobtitle}</p>
                <p>{elem.residencystatus}</p>
                <p>{elem.skills}</p>
                <p>{elem.wheredoyoulive}</p>
                <p>{elem.yearsofexperience}</p>
               
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CompaniesAppliedJobs;
