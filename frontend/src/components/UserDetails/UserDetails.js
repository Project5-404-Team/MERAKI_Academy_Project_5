import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../Redux/reducers/Users/users";
import UserNavbar from "../UserNavbar/UserNavbar";
import './UserDetails.css'
function UserDetails() {
  const dispatch = useDispatch()
  const {userDetails,userId} = useSelector((state) => {
    return {
        userDetails: state.users.userDetails,
        userId: state.usersAuth.userId
    };
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
  const [educationalInstituteName, setEducationalInstituteName] =  useState(null);
  const [cv, setCv] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState(null);
  const [updateBox, setUpdateBox] = useState(false);
  const [userUpdateId, setUserUpdateId] = useState(false);
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
    email,
    password,
     fullName,
      dateOfBirth,
   gender,
  };
  const handleUpdateClick = (user) => {
    setUpdateBox(!updateBox);
    setUserUpdateId(userId)
    if (updateBox) updateUser(userId);
  };
  const updateUser = ()=>{
    axios
    .put(`http://localhost:5000/users/${userId}`,body)
    .then((result) => {
      console.log(result);
      console.log(result.data.result);
      dispatch(setUserDetails(result.data.result[0]))
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
    {console.log(userDetails)}
       <UserNavbar/>
       <div className="userDetailsMainDiv">
        <div className="userDetailsCard">
        <div className="profilePicture">
          <img src={userDetails.userimage}></img>
          <a href={userDetails.cv} download><button>Download My CV</button></a>
          <button onClick={() => {handleUpdateClick(userId)}}>Edit My Information !</button>
        </div>
        <div className="personalInfo">
          <h3>Personal Information</h3>
      <p>Full Name :{userDetails.fullname}</p>
      <p>Date Of Birth :{userDetails.dateofbirth.substring(0,10)}</p>
      <p>Gender :{userDetails.gender}</p>
      <p>Phone Number :{userDetails.phonenumber}</p>
      <p>Address :{userDetails.wheredoyoulive}</p>
      <p>Citizenship : {userDetails.citizenships}</p>
      <p>Material Status :{userDetails.maritalstatus}</p>
      <p>Languages :{userDetails.languages}</p>
      </div>
      <div className="professionalInfo">
      <h3>Professional Information</h3>
<p>Recent Job Function :{userDetails.recentjobfunction}</p>
<p>Recent Job Title :{userDetails.recentjobtitle}</p>
<p>Years Of Experience :{userDetails.yearsofexperience}</p>
<p>Skills :{userDetails.skills}</p>
<h3>Educational Information</h3>
<p>Major :{userDetails.major}</p>
<p>Educational Institute Name :{userDetails.educationalinstitutename}</p>
</div>



 </div>

 
      {updateBox && userUpdateId === userDetails.id && (<div>
        <h1>Update Any Field You Want !</h1>
                   <div className="updateSectionDetailsUser">
              
                    <input
                      type="text"
                      placeholder="phone number here"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    
                    <input
                      placeholder="marital status here"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    ></input>
                    
                    <input
                      placeholder="citizenships here"
                      onChange={(e) => setCitizenships(e.target.value)}
                    ></input>

                    <input
                      placeholder="where do you live here"
                      onChange={(e) => setWhereDoYouLive(e.target.value)}
                    ></input>
                 
                    <input
                      placeholder="residency status here"
                      onChange={(e) => setResidencyStatus(e.target.value)}
                    ></input>

                    <input
                      placeholder="years of experience here"
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                    ></input>

<input
                      placeholder="recent job title here"
                      onChange={(e) => setRecentJobTitle(e.target.value)}
                    ></input>
<input
                      placeholder="recent job function here"
                      onChange={(e) => setRecentJobFunction(e.target.value)}
                    ></input>

<input
                      placeholder="industry of recent job here"
                      onChange={(e) => setIndustryOfRecentJob(e.target.value)}
                    ></input>

<input
                      placeholder="languages here"
                      onChange={(e) => setLanguages(e.target.value)}
                    ></input>

<input
                      placeholder="skills here"
                      onChange={(e) => setSkills(e.target.value)}
                    ></input>
                    
                    <input
                      placeholder="education level here"
                      onChange={(e) => setEducationLevel(e.target.value)}
                    ></input>

<input
                      placeholder="major here"
                      onChange={(e) => setMajor(e.target.value)}
                    ></input>

<input
                      placeholder="educational institute name here"
                      onChange={(e) => setEducationalInstituteName(e.target.value)}
                    ></input>

<input
                      placeholder="cv here"
                      onChange={(e) => setCv(e.target.value)}
                    ></input>

<input
                      placeholder="email here"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>

<input
                      placeholder="password here"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>

<input
                      placeholder="full name here"
                      onChange={(e) => setFullName(e.target.value)}
                    ></input>

<input
                      placeholder="date of birth here"
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    ></input>

<input
                      placeholder="gender here"
                      onChange={(e) => setGender(e.target.value)}
                    ></input>

<button onClick={() => {handleUpdateClick(userId)}}>Update</button>
                </div></div>
                )}
                 
                  
                  </div>   
    </>
    
  );
}

export default UserDetails;
