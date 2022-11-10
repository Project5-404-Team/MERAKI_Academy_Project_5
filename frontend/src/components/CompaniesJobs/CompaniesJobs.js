import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCompanyJobs,
  deleteJobs,
  setJobDetails,
  updateJob
} from "../Redux/reducers/Companies/companies";

const CompaniesJobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { companyId, companyJobs } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      companyJobs: state.companies.companyJobs,
    };
  });
  const [jobTitle, setJobTitle] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [jobLocation, setJobLocation] = useState(null);
  const [careerLevel, setCareerLevel] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [jobRole, setJobRole] = useState(null);
  const [yearsOfExperience, setYearsOfExperience] = useState(null);
  const [countryOfCitizenship, setCountryOfCitizenship] = useState(null);
  const [countryOfResidence, setCountryOfResidence] = useState(null);
  const [salary, setSalary] = useState(null);
  const [numberOfHires, setNumberOfHires] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [language, setLanguage] = useState(null);
  const [jobRequirements, setJobRequirements] = useState(null);
  const [jobUpdateId, setJobUpdateId] = useState("");
  const [updateBox, setUpdateBox] = useState(false);

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
        dispatch(deleteJobs(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const body = {
    jobTitle,
    expiryDate,
    jobLocation,
    careerLevel,
    jobType,
    jobRole,
    yearsOfExperience,
    countryOfCitizenship,
    countryOfResidence,
    salary,
    numberOfHires,
    jobDescription,
    language,
    jobRequirements,
  };
  const handleUpdateClick = (job) => {
    setUpdateBox(!updateBox);
    setJobUpdateId(job.id);
    if (updateBox) updateJob1(job.id);
  };
  const updateJob1 = () => {
    axios
      .put(`http://localhost:5000/jobs/${jobUpdateId}`,body)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(updateJob({jobUpdateId:jobUpdateId,updatedJob:result.data.result}))
       
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
                <p
                  onClick={() => {
                    dispatch(setJobDetails(elem));
                    navigate("/companies/jobdetails");
                  }}
                >
                  {elem.jobtitle}
                </p>
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
                {updateBox && jobUpdateId === elem.id && (
                  <form>
                    <br />
                    <input
                      type="text"
                      placeholder="job title here"
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <br />
                    <input
                      placeholder="expiry date here"
                      onChange={(e) => setExpiryDate(e.target.value)}
                    ></input>
                    <br />
                    <input
                      placeholder="job location here"
                      onChange={(e) => setJobLocation(e.target.value)}
                    ></input>
                    <br />
                    <input
                      placeholder="career level here"
                      onChange={(e) => setCareerLevel(e.target.value)}
                    ></input>
                    <br />
                    <input
                      placeholder="job type here"
                      onChange={(e) => setJobType(e.target.value)}
                    ></input>
                    <br />
                    <input
                      placeholder="job role here"
                      onChange={(e) => setJobRole(e.target.value)}
                    ></input>
                    <input
                      placeholder="years of experience here"
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                    ></input>
                    <input
                      placeholder="country of citizenship here"
                      onChange={(e) => setCountryOfCitizenship(e.target.value)}
                    ></input>
                    <input
                      placeholder="country of residence here"
                      onChange={(e) => setCountryOfResidence(e.target.value)}
                    ></input>
                    <input
                      placeholder="salary here"
                      onChange={(e) => setSalary(e.target.value)}
                    ></input>
                    <input
                      placeholder="number of hires here"
                      onChange={(e) => setNumberOfHires(e.target.value)}
                    ></input>
                    <input
                      placeholder="job description here"
                      onChange={(e) => setJobDescription(e.target.value)}
                    ></input>
                    <input
                      placeholder="language here"
                      onChange={(e) => setLanguage(e.target.value)}
                    ></input>
                    <input
                      placeholder="job requirements here"
                      onChange={(e) => setJobRequirements(e.target.value)}
                    ></input>
                  </form>
                )}
                <p
                  onClick={() => {
                    handleUpdateClick(elem);
                  }}
                >
                  Update
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CompaniesJobs;
