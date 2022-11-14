import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UserComplete.css";
import { setUserPicture, setUserCv } from "../Redux/reducers/Users/users";
import UserNavbar from "../UserNavbar/UserNavbar";

const UserComplete = () => {
  const { userId, userPicture, userCv } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      userPicture: state.users.userPicture,
      userCv: state.users.userCv,
    };
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const [registeredSucssfully, setRegisteredSucssfully] = useState(false);


  const uploadCv = (cv) => {
    const formData = new FormData();
    formData.append("file", cv);
    formData.append("upload_preset", "basel_project5");

    axios
      .post("https://api.cloudinary.com/v1_1/did6jp3bj/image/upload", formData)
      .then((response) => {
        dispatch(setUserCv(response.data.secure_url));
        console.log(response.data);
      });
  };

  const uploadPicture = (picture) => {
    const formData = new FormData();
    formData.append("file", picture);
    formData.append("upload_preset", "basel_project5");

    axios
      .post("https://api.cloudinary.com/v1_1/did6jp3bj/image/upload", formData)
      .then((response) => {
        dispatch(setUserPicture(response.data.secure_url));
        console.log(response.data);
      });
  };

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
    cv: userCv,
    userImage: userPicture
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
    <>
      <UserNavbar />
      <div className="bigDivRegisterComplete">
        <h2 className="completeAccountpar">Complete Your Account !</h2>
        <div className="infoContainerRegister1">
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
         <div>
        
          <option selected disabled hidden>
          Choose Recent Job the Industry:
          </option>
          <select
            name="RecentJobIndutry"
            id="RecentJobIndutry"
            onChange={(e) => {
              setRecentJobTitle(e.target.value);
            }}
          >
            <option value="Non-Profit and Social Services">
              Non-Profit and Social Services
            </option>
            <option value="Education and Training">
              Education and Training
            </option>
            <option value="Government and Public Sector">
              Government and Public Sector
            </option>
            <option value="Healthcare and Medical Services">
              Healthcare and Medical Services
            </option>
            <option value="Retail and Wholesale">Retail and Wholesale</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Call Center, Telemarketing and BPO">
              Call Center, Telemarketing and BPO
            </option>
            <option value="Catering, Food Services and Restaurants">
              Catering, Food Services and Restaurants
            </option>
            <option value="Banking and Financial Services">
              Banking and Financial Services
            </option>
            <option value="Manufacturing and Production">
              Manufacturing and Production
            </option>
            <option value="Marketing, Advertising and Public Relations">
              Marketing, Advertising and Public Relations
            </option>
            <option value="Shipping and Logistics">
              Shipping and Logistics
            </option>

            <option value="Consultancy">Consultancy</option>
            <option value="Furniture and Office Equipment">
              Furniture and Office Equipment
            </option>
            <option value="Property and Real Estate">
              Property and Real Estate
            </option>
            <option value="Business Support Services">
              Business Support Services
            </option>
            <option value="Employment Placement Agencies and Human Resources">
              Employment Placement Agencies and Human Resources
            </option>
            <option value="Insurance">Insurance</option>
            <option value="Law Enforcement and Security Services">
              Law Enforcement and Security Services
            </option>
            <option value="Research and Development">
              Research and Development
            </option>
          </select></div>
         
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
         <div>
          <label for="image">Choose Your Profile Image</label>
          <input
            id="image"
            type="file"
            placeholder="user Image"
            className="RegInput"
            onChange={(e) => {
              uploadPicture(e.target.files[0])
            }
            }
          ></input>
       </div>
   
<div>
          <label for="Cv">Choose Your CV</label>
          <input
            id="Cv"
            type="file"
            placeholder="Cv"
            className="RegInput"
            onChange={(e) =>{ 
              uploadCv(e.target.files[0])
            }}

          ></input></div>
        
         
          {registeredSucssfully && (
            <div className="popuptry">
              <h1> Registerd In Sussfully</h1>
            </div>
          )}
<div>
       
          </div>
          <button
            className="registerButton1"
            onClick={() => {
              handleRegister();
            }}
          >
            {" "}
            Complete Information !
          </button>
        </div>
     
      </div>
    </>
  );
};
export default UserComplete;
