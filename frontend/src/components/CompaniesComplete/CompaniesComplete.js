import axios from "axios";
import React from "react";
import {useEffect , useState } from "react"
import {  useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"


const CompaniesComplete = () => {
    const [numberOfEmployees ,setNumberOfEmployees]=useState("")
    const [city, setCity]= useState("")
    const [contactPerson, setContactPerson]= useState("")
    const [ceo, setCeo]= useState("")
    const [workingHours, setWorkingHours]= useState("")
    const [weekends, setWeekends]= useState("")
    const [lunchBreak, setLunchBreak]= useState("")
    const [companyOverview, setCompanyOverview]= useState("")
    const [officeLocation, setOfficeLocation]= useState("")
   // const [companyId , setCompanyId]=useState(localStorage.getItem("CompanyId"))

    const navigate =useNavigate()

    const {companyId} = useSelector((state)=>{
      return {companyId: state.companiesAuth.companyId}
    })

    const [role, setRole] = useState("")

    const [registeredSucssfully, setRegisteredSucssfully]= useState(false)
   
    
    const body = {
        numberOfEmployees,
      city,
      contactPerson,
      ceo,
      workingHours,
      weekends,
      lunchBreak,
      companyOverview,
      officeLocation,
   
    }
    
      const handleRegister = ()=>{
        axios.put(`http://localhost:5000/register/companies/${companyId}`, body)
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

          <input placeholder="Number Of Employees" className="RegInput" onChange={(e)=>{setNumberOfEmployees(e.target.value)}}/>

          <input placeholder="City" className="RegInput" onChange={(e)=>{setCity(e.target.value)}}/>

          <input placeholder="Contact Person" className="RegInput" onChange={(e)=>{setContactPerson(e.target.value)}}/>

          <input placeholder="Ceo" className="RegInput" onChange={(e)=>{setCeo(e.target.value)}}/>

          <input placeholder="Working Hours" className="RegInput" onChange={(e)=>{setWorkingHours(e.target.value)}}/>

          <input placeholder="Weekends" className="RegInput" onChange={(e)=>{setWeekends(e.target.value)}}/>

          <input placeholder="Lunch Break" className="RegInput" onChange={(e)=>{setLunchBreak(e.target.value)}}/>

          <input placeholder="Company Overview" className="RegInput" onChange={(e)=>{setCompanyOverview(e.target.value)}}/>
          
          <input placeholder="Office Location" className="RegInput" onChange={(e)=>{setOfficeLocation(e.target.value)}}/>
    
    
          
    {registeredSucssfully&& <div className="popuptry">
    
    <h1 >  Registerd In Sussfully</h1>
    </div>}
    
          <button className="registerButton" onClick={()=>{handleRegister()}} > Complete Information !</button>
    

        
        </div>
        </div>;
    };
    export default CompaniesComplete;
    