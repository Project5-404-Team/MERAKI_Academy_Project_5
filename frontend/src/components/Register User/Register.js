import axios from "axios";
import React from "react";
import {useEffect , useState } from "react"
import {  useNavigate  } from "react-router-dom";


const RegisterUser = () => {
    const [fullName ,setFullName]=useState("")
    const [gender  ,setGender]=useState("")
    const [country ,setCountry]=useState("")
    const [email , setEmail]=useState("")
    const [password, setPassword]= useState("")
    const [dateOfBirth, setDateOfBirth]= useState("")
    const [phoneNumber, setPhoneNumber]= useState("")
    const [maritalStatus, setMaritalStatus]= useState("")
    const [citizenships, setCitizenships]= useState("")
    const [whereDoYouLive, setWhereDoYouLive]= useState("")
    const [residencyStatus, setResidencyStatus]= useState("")
    const [yearsOfExperience, setYearsOfExperience]= useState("")
    const [recentJobTitle, setRecentJobTitle]= useState("")
    const [recentJobFunction, setRecentJobFunction]= useState("")
    const [industryOfRecentJob, setIndustryOfRecentJob]= useState("")
    const [languages, setLanguages]= useState("")
    const [skills, setSkills]= useState("")
    const [educationLevel, setEducationLevel]= useState("")
    const [major, setMajor]= useState("")
    const [educationalInstituteName, setEducationalInstituteName]= useState("")
    const [cv, setCv]= useState("")

    const navigate =useNavigate()

    

    const [role, setRole] = useState("")

    const [registeredSucssfully, setRegisteredSucssfully]= useState(false)
   
    
    const body = {fullName,
        dateOfBirth,
      country,
      email,
      password,
      gender,
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
    }
    
      const handleRegister = ()=>{
        axios.post("http://localhost:5000/register/users", body)
        .then((response)=>{
            console.log (response)
    
          setRegisteredSucssfully(true)
          setTimeout(() => {
            navigate("/user/login") 
          }, 1000);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    
      return <div className="bigDivRegister">
    
        <div className="infoContainerRegister">
          <p> Register</p>
          <input placeholder="Full Name" className="RegInput" onChange={(e)=>{setFullName(e.target.value)}}/>
    
        
          <input placeholder="date Of Birth" className="RegInput" onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
    
          
          <input placeholder="Country" className="RegInput" onChange={(e)=>{setCountry(e.target.value)}}/>
    
          <input placeholder="gender" className="RegInput" onChange={(e)=>{setGender(e.target.value)}}/>

          <input placeholder="phone Number" className="RegInput" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>

          <input placeholder="Marital Status" className="RegInput" onChange={(e)=>{setMaritalStatus(e.target.value)}}/>

          <input placeholder="citizenships" className="RegInput" onChange={(e)=>{setCitizenships(e.target.value)}}/>
          
          <input placeholder="Where DoYou Live" className="RegInput" onChange={(e)=>{setWhereDoYouLive(e.target.value)}}/>

          <input placeholder="Residency Status" className="RegInput" onChange={(e)=>{setResidencyStatus(e.target.value)}}/>

          <input placeholder="Years Of Experience" className="RegInput" onChange={(e)=>{setYearsOfExperience(e.target.value)}}/>

          <input placeholder="Recent Job Title" className="RegInput" onChange={(e)=>{setRecentJobTitle(e.target.value)}}/>

          <input placeholder="Recent Job Function" className="RegInput" onChange={(e)=>{setRecentJobFunction(e.target.value)}}/>

          <input placeholder="Industry Of RecentJob" className="RegInput" onChange={(e)=>{setIndustryOfRecentJob(e.target.value)}}/>

          <input placeholder="Languages" className="RegInput" onChange={(e)=>{setLanguages(e.target.value)}}/>
          
          <input placeholder="Skills" className="RegInput" onChange={(e)=>{setSkills(e.target.value)}}/>

          <input placeholder="Education Level" className="RegInput" onChange={(e)=>{setEducationLevel(e.target.value)}}/>

          <input placeholder="Major" className="RegInput" onChange={(e)=>{setMajor(e.target.value)}}/>

          <input placeholder="Educational Institute Name" className="RegInput" onChange={(e)=>{setEducationalInstituteName(e.target.value)}}/>

          
          
          <input placeholder="Email" className="RegInput" onChange={(e)=>{setEmail(e.target.value)}}/>
    
          
          <input type={"password"} placeholder="Password" className="RegInput" onChange={(e)=>{setPassword(e.target.value)}}/>
    
    
          
    {registeredSucssfully&& <div className="popuptry">
    
    <h1 >  Registerd In Sussfully</h1>
    </div>}
    
          <button className="registerButton" onClick={()=>{handleRegister()}} > Register Now !</button>
    

        
        </div>
        </div>;
    };
    export default RegisterUser;
    