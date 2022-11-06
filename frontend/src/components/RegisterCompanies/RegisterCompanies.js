import axios from "axios";
import React from "react";
import {useEffect , useState } from "react"
import {  useNavigate  } from "react-router-dom";


const RegisterCompanies = () => {
    const [companyName ,setCompanyName]=useState("")
    const [industry ,setIndustry]=useState("")
    const [numberOfEmployees ,setNumberOfEmployees]=useState("")
    const [email , setEmail]=useState("")
    const [password, setPassword]= useState("")
    const [country, setCountry]= useState("")
    const [phoneNumber, setPhoneNumber]= useState("")
    const [city, setCity]= useState("")
    const [contactPerson, setContactPerson]= useState("")
    const [companyWebsite, setCompanyWebsite]= useState("")
    const [ceo, setCeo]= useState("")
    const [workingHours, setWorkingHours]= useState("")
    const [weekends, setWeekends]= useState("")
    const [lunchBreak, setLunchBreak]= useState("")
    const [companyOverview, setCompanyOverview]= useState("")
    const [companyLogo, setCompanyLogo]= useState("")
    const [officeLocation, setOfficeLocation]= useState("")
    

    const navigate =useNavigate()

    

    const [role, setRole] = useState("")

    const [registeredSucssfully, setRegisteredSucssfully]= useState(false)
   
    
    const body = {companyName,
        industry ,
        numberOfEmployees,
      email,
      password,
      country,
      phoneNumber,
      city,
      contactPerson,
      companyWebsite,
      ceo,
      workingHours,
      weekends,
      lunchBreak,
      companyOverview,
      companyLogo,
      officeLocation,
   
    }
    
      const handleRegister = ()=>{
        axios.post("http://localhost:5000/register/companies", body)
        .then((response)=>{
            console.log (response)
    
          setRegisteredSucssfully(true)
          setTimeout(() => {
            navigate("/companies/login") 
          }, 1000);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    
      return <div className="bigDivRegister">
    
        <div className="infoContainerRegister">
          <p> Register</p>

          <input placeholder="Company Name" className="RegInput" onChange={(e)=>{setCompanyName(e.target.value)}}/>
        
          <input placeholder="Industry" className="RegInput" onChange={(e)=>{setIndustry(e.target.value)}}/>
    
          <input placeholder="Number Of Employees" className="RegInput" onChange={(e)=>{setNumberOfEmployees(e.target.value)}}/>
    
          <input placeholder="Country" className="RegInput" onChange={(e)=>{setCountry(e.target.value)}}/>

          <input placeholder="phone Number" className="RegInput" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>

          <input placeholder="City" className="RegInput" onChange={(e)=>{setCity(e.target.value)}}/>

          <input placeholder="Contact Person" className="RegInput" onChange={(e)=>{setContactPerson(e.target.value)}}/>
          
          <input placeholder="Company Website" className="RegInput" onChange={(e)=>{setCompanyWebsite(e.target.value)}}/>

          <input placeholder="Ceo" className="RegInput" onChange={(e)=>{setCeo(e.target.value)}}/>

          <input placeholder="Working Hours" className="RegInput" onChange={(e)=>{setWorkingHours(e.target.value)}}/>

          <input placeholder="Weekends" className="RegInput" onChange={(e)=>{setWeekends(e.target.value)}}/>

          <input placeholder="Lunch Break" className="RegInput" onChange={(e)=>{setLunchBreak(e.target.value)}}/>

          <input placeholder="Company Overview" className="RegInput" onChange={(e)=>{setCompanyOverview(e.target.value)}}/>

          <input placeholder="Company Logo" className="RegInput" onChange={(e)=>{setCompanyLogo(e.target.value)}}/>
          
          <input placeholder="Office Location" className="RegInput" onChange={(e)=>{setOfficeLocation(e.target.value)}}/>
          
          <input placeholder="Email" className="RegInput" onChange={(e)=>{setEmail(e.target.value)}}/>
    
          <input type={"password"} placeholder="Password" className="RegInput" onChange={(e)=>{setPassword(e.target.value)}}/>
    
    
          
    {registeredSucssfully&& <div className="popuptry">
    
    <h1 >  Registerd In Sussfully</h1>
    </div>}
    
          <button className="registerButton" onClick={()=>{handleRegister()}} > Register Now !</button>
    

        
        </div>
        </div>;
    };
    export default RegisterCompanies;
    