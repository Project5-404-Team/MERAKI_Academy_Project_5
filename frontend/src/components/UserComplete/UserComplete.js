import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UserComplete.css"

const UserComplete = () => {
  const { userId } = useSelector((state) => {
    return { userId: state.usersAuth.userId };
  });
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [citizenships, setCitizenships] = useState(null);
  const [whereDoYouLive, setWhereDoYouLive] = useState(null);
  const [residencyStatus, setResidencyStatus] = useState(null);
  const [yearsOfExperience, setYearsOfExperience] = useState(null);
  const [recentJobTitle, setRecentJobTitle] = useState(null);
  const [recentJobFunction, setRecentJobFunction] = useState(null);
  const [industryOfRecentJob, setIndustryOfRecentJob] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [skills, setSkills] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);
  const [major, setMajor] = useState(null);
  const [educationalInstituteName, setEducationalInstituteName] =
    useState(null);
  const [cv, setCv] = useState(null);
  

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [registeredSucssfully, setRegisteredSucssfully] = useState(false);

  const body = {
    phoneNumber,
    maritalStatus,
    citizenships,
    whereDoYouLive,
    residencyStatus,
    yearsOfExperience,
    recentJobTitle,
    recentJobFunction,
    industryOfRecentJob,
    languages,
    skills,
    educationLevel,
    major,
    educationalInstituteName,
    cv,
  };

  const handleRegister = () => {
    axios
      .put(`http://localhost:5000/register/users/${userId}`, body)
      .then((response) => {
        console.log(response);

        setRegisteredSucssfully(true);
        setTimeout(() => {
          navigate("/users/userhome");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bigDivRegister">
      <div className="infoContainerRegister">
       
        <input
          placeholder="Phone Number"
          className="RegInput"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <input
          placeholder="Marital Status"
          className="RegInput"
          onChange={(e) => {
            setMaritalStatus(e.target.value);
          }}
        />

        <input
          placeholder="citizenships"
          className="RegInput"
          onChange={(e) => {
            setCitizenships(e.target.value);
          }}
        />

        <input
          placeholder="Where DoYou Live"
          className="RegInput"
          onChange={(e) => {
            setWhereDoYouLive(e.target.value);
          }}
        />

        <input
          placeholder="Residency Status"
          className="RegInput"
          onChange={(e) => {
            setResidencyStatus(e.target.value);
          }}
        />

        <input
          placeholder="Years Of Experience"
          className="RegInput"
          onChange={(e) => {
            setYearsOfExperience(e.target.value);
          }}
        />

        <input
          placeholder="Recent Job Title"
          className="RegInput"
          onChange={(e) => {
            setRecentJobTitle(e.target.value);
          }}
        />

        <input
          placeholder="Recent Job Function"
          className="RegInput"
          onChange={(e) => {
            setRecentJobFunction(e.target.value);
          }}
        />

        <input
          placeholder="Industry Of RecentJob"
          className="RegInput"
          onChange={(e) => {
            setIndustryOfRecentJob(e.target.value);
          }}
        />

        <input
          placeholder="Languages"
          className="RegInput"
          onChange={(e) => {
            setLanguages(e.target.value);
          }}
        />

        <input
          placeholder="Skills"
          className="RegInput"
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />

        <input
          placeholder="Education Level"
          className="RegInput"
          onChange={(e) => {
            setEducationLevel(e.target.value);
          }}
        />

        <input
          placeholder="Major"
          className="RegInput"
          onChange={(e) => {
            setMajor(e.target.value);
          }}
        />

        <input
          placeholder="Educational Institute Name"
          className="RegInput"
          onChange={(e) => {
            setEducationalInstituteName(e.target.value);
          }}
        />
        <input
          placeholder="Cv"
          className="RegInput"
          onChange={(e) => {
            setCv(e.target.value);
          }}
        />

        {registeredSucssfully && (
          <div className="popuptry">
            <h1> Registerd In Sussfully</h1>
          </div>
        )}

        <button
          className="registerButton"
          onClick={() => {
            handleRegister();
          }}
        >
          {" "}
          Complete Information !
        </button>
      </div>
    </div>
  );
};
export default UserComplete;
