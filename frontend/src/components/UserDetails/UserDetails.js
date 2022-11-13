import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../Redux/reducers/Users/users";
import UserNavbar from "../UserNavbar/UserNavbar";
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
       <UserNavbar/>
      <p>{userDetails.fullname}</p>
      <p>{userDetails.citizenships}</p>
      <p>{userDetails.cv}</p>
      <p>{userDetails.dateofbirth}</p>
      <p>{userDetails.educationalinstitutename}</p>
      <p>{userDetails.gender}</p>
      <p>{userDetails.languages}</p>
      <p>{userDetails.major}</p>
      <p>{userDetails.maritalstatus}</p>
      <p>{userDetails.phonenumber}</p>
      <p>{userDetails.recentjobfunction}</p>
      <p>{userDetails.recentjobtitle}</p>
      <p>{userDetails.residencystatus}</p>
      <p>{userDetails.skills}</p>
      <p>{userDetails.wheredoyoulive}</p>
      <p>{userDetails.yearsofexperience}</p>
      {updateBox && userUpdateId === userDetails.id && (
                  <form>
                    <br />
                    <input
                      type="text"
                      placeholder="phone number here"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <br />
                    <input
                      placeholder="marital status here"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    ></input>
                    <br/>
                    <input
                      placeholder="citizenships here"
                      onChange={(e) => setCitizenships(e.target.value)}
                    ></input>
<br/>
                    <input
                      placeholder="where do you live here"
                      onChange={(e) => setWhereDoYouLive(e.target.value)}
                    ></input>
                     <br/>
                    <input
                      placeholder="residency status here"
                      onChange={(e) => setResidencyStatus(e.target.value)}
                    ></input>
<br/>
                    <input
                      placeholder="years of experience here"
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="recent job title here"
                      onChange={(e) => setRecentJobTitle(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="recent job function here"
                      onChange={(e) => setRecentJobFunction(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="industry of recent job here"
                      onChange={(e) => setIndustryOfRecentJob(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="languages here"
                      onChange={(e) => setLanguages(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="skills here"
                      onChange={(e) => setSkills(e.target.value)}
                    ></input>
                    <br/>
                    <input
                      placeholder="education level here"
                      onChange={(e) => setEducationLevel(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="major here"
                      onChange={(e) => setMajor(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="educational institute name here"
                      onChange={(e) => setEducationalInstituteName(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="cv here"
                      onChange={(e) => setCv(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="email here"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="password here"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="full name here"
                      onChange={(e) => setFullName(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="date of birth here"
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    ></input>
<br/>
<input
                      placeholder="gender here"
                      onChange={(e) => setGender(e.target.value)}
                    ></input>
                  </form>
                )}
                  <p onClick={() => {handleUpdateClick(userId)}}>Update</p>
             
    </>
  );
}

export default UserDetails;
