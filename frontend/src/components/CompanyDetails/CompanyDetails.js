import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyDetails } from "../Redux/reducers/Companies/companies";
import UserDetails from "../UserDetails/UserDetails";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import "./CompanyDetails.css"

function CompanyDetails() {
  const dispatch=useDispatch()
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [ceo, setCeo] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [weekends, setWeekends] = useState("");
  const [lunchBreak, setLunchBreak] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updateBox, setUpdateBox] = useState(false);
  const [companyUpdateId, setCompanyUpdateId] = useState(false);
  const body = {
    companyWebsite,
    ceo,
    workingHours,
    weekends,
    lunchBreak,
    companyOverview,
    companyLogo,
    officeLocation,
    companyName,
    industry,
    numberOfEmployees,
    country,
    city,
    contactPerson,
    phoneNumber,
    email,
    password,
  };
  
  const handleUpdateClick = (companyId) => {
    setUpdateBox(!updateBox);
    setCompanyUpdateId(companyId)
    if (updateBox) updateCompany(companyId);
  };
  const { companyDetails,companyId ,token} = useSelector((state) => {
    return {
      companyDetails: state.companies.companyDetails,
      companyId: state.CompaniesAuth.companyId,
      token:state.CompaniesAuth.token
    };
  });
  const updateCompany = () => {
    axios
      .put(`http://localhost:5000/companies/${companyId}`, body,{
        headers: {
          authorization: "Bearer " + token,
        }})
      .then((result) => {
        console.log(result);
        dispatch(setCompanyDetails(result.data.result[0]));
       

      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <CompaniesNavbar/>
      <div className="companyDetailsMainDiv">
        <div className="companyDetailsCard">
        
        <div className="generallInfocompanydetails">
        
     
          <img className="companyDetailLogo" src={companyDetails.companylogo}></img>
         
          <div>
              <p style={{ fontWeight: "600" }}>Company Name:</p><p>{companyDetails.companyname}</p></div>
              <div> <p style={{ fontWeight: "600" }}>Industry:</p><p>{companyDetails.industry}</p></div>
              <div><p style={{ fontWeight: "600" }}>Country:</p><p>{companyDetails.country}</p></div>
              <div><p style={{ fontWeight: "600" }}>City:</p><p>{companyDetails.city}</p></div>
              <div><p style={{ fontWeight: "600" }}>Number Of Employees:</p><p>{companyDetails.numberofemployees}</p></div>
              <div><p style={{ fontWeight: "600" }}>Contact Person:</p><p>{companyDetails.contactperson}</p></div>
              <div><p style={{ fontWeight: "600" }}>Phone Number:</p><p>{companyDetails.phonenumber}</p></div>
              <p style={{ fontWeight: "600" }}>Website:</p><p>{companyDetails.companywebsite}</p>
        </div>
      <div className="detailedInfo">
      <div><p style={{ fontWeight: "600" }}>Company Overview </p><p>{companyDetails.companyoverview}</p></div>
      <div className="additionalInfo">
      <div><p style={{ fontWeight: "600" }}>Working Hours </p><p>{companyDetails.workinghours}</p></div>
      <div><p style={{ fontWeight: "600" }}>Lunch Break </p><p>{companyDetails.lunchbreak}</p></div>
      <div><p style={{ fontWeight: "600" }}>Weekends </p><p>{companyDetails.weekends}</p></div>
      <div><p style={{ fontWeight: "600" }}>ceo: </p><p>{companyDetails.ceo}</p>
      </div>
      <button onClick={() => {handleUpdateClick(companyId)}}>Edit My Information !</button>
</div>

</div>

 </div>
 </div>
     
      <div>
  
        {updateBox && companyUpdateId === companyId && (<div>
              <h1>Update Any Field You Want !</h1>
              <div className="updateSectionDetailsCompany">
         
      
            <input
              type="text"
              placeholder="company website here"
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
        
            <input
              placeholder="ceo here"
              onChange={(e) => setCeo(e.target.value)}
            ></input>
        
            <input
              placeholder="working hours here"
              onChange={(e) => setWorkingHours(e.target.value)}
            ></input>
       
            <input
              placeholder="Weekends here"
              onChange={(e) => setWeekends(e.target.value)}
            ></input>
       
            <input
              placeholder="lunch break here"
              onChange={(e) => setLunchBreak(e.target.value)}
            ></input>
       
            <input
              placeholder="company overview here"
              onChange={(e) => setCompanyOverview(e.target.value)}
            ></input>
            <input
              placeholder="company logo here"
              onChange={(e) => setCompanyLogo(e.target.value)}
            ></input>
            <input
              placeholder="office location here"
              onChange={(e) => setOfficeLocation(e.target.value)}
            ></input>
            <input
              placeholder="company name here"
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
            <input
              placeholder="Industry here"
              onChange={(e) => setIndustry(e.target.value)}
            ></input>
            <input
              placeholder="number of employees here"
              onChange={(e) => setNumberOfEmployees(e.target.value)}
            ></input>
            <input
              placeholder="Country here"
              onChange={(e) => setCountry(e.target.value)}
            ></input>
            <input
              placeholder="City here"
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
              placeholder="contact person here"
              onChange={(e) => setContactPerson(e.target.value)}
            ></input>
            <input
              placeholder="phone number here"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <input
              placeholder="email here"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="password here"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
             <button
          onClick={() => {
            handleUpdateClick()
            console.log("yes")
          }}
        >
          Update
        </button>
          </div>
          
          </div>
        
        )}
  
      </div>
      
    </>
  );
}

export default CompanyDetails;
