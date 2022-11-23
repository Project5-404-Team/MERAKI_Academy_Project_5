import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../Redux/reducers/Companies/companies";
import "./AddNewJob.css";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import Footer from "../Footer/Footer";
const AddNewJob = () => {
  const [success, setSuccess] = useState(false);
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
  const { companyId, token } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      token: state.CompaniesAuth.token,
    };
  });
  const ref = useRef();const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const handleAddNewJob = () => {
    axios
      .post(`http://localhost:5000/jobs/${companyId}`, body, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.result);
        dispatch(addJob(response.data.result[0]));
        setSuccess(true)

        setTimeout(() => {
        navigate("/companies/companyjobs");
        },1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (<>
   <CompaniesNavbar/>

   
    <div className="AddNewJob">
      <div className="infoContainerAddNewJob">
  
        <input
          placeholder="Job Title"
          className="AddNewJobInput"
          onChange={(e) => {
            setJobTitle(e.target.value);
          }}
        />
        <input
          placeholder="Expiry Date "
          ref={ref}
    
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
          className="AddNewJobInput"
          onChange={(e) => {
            setExpiryDate(e.target.value);
          }}
        />
        <input
          placeholder="Job Location "
          className="AddNewJobInput"
          onChange={(e) => {
            setJobLocation(e.target.value);
          }}
        />
        <input
          placeholder="Career Level "
          className="AddNewJobInput"
          onChange={(e) => {
            setCareerLevel(e.target.value);
          }}
        />
        <input
          placeholder="JobType"
          className="AddNewJobInput"
          onChange={(e) => {
            setJobType(e.target.value);
          }}
        />
        <input
          placeholder="Job Role"
          className="AddNewJobInput"
          onChange={(e) => {
            setJobRole(e.target.value);
          }}
        />
        <input
          placeholder="Years Of Experience"
          className="AddNewJobInput"
          onChange={(e) => {
            setYearsOfExperience(e.target.value);
          }}
        />
        <input
          placeholder="Country Of Citizenship"
          className="AddNewJobInput"
          onChange={(e) => {
            setCountryOfCitizenship(e.target.value);
          }}
        />
        <input
          placeholder="Country Of Residence"
          className="AddNewJobInput"
          onChange={(e) => {
            setCountryOfResidence(e.target.value);
          }}
        />
        <input
          placeholder="Salary"
          className="AddNewJobInput"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <input
          placeholder="Number Of Hires"
          className="AddNewJobInput"
          onChange={(e) => {
            setNumberOfHires(e.target.value);
          }}
        />
        <input
          placeholder="Job Description "
          className="AddNewJobInput"
          onChange={(e) => {
            setJobDescription(e.target.value);
          }}
        />
        <input
          placeholder="Language"
          className="AddNewJobInput"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        />
        <input
          placeholder="Job Requirements"
          className="AddNewJobInput"
          onChange={(e) => {
            setJobRequirements(e.target.value);
          }}
        />
        <button
          className="AddNewJobButton"
          onClick={() => {
            handleAddNewJob();
          }}
        >
          {" "}
          Add New Job{" "}
        </button>
      </div>
      {success&&   <p> Job Added Successfully !</p>}
      
    </div>
    
    <div className="Footer_user">
      <Footer/>
      </div>
      </>
  );
};
export default AddNewJob;
