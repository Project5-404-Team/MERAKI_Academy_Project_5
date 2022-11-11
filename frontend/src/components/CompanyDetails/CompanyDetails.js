import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyDetails } from "../Redux/reducers/Companies/companies";
import UserDetails from "../UserDetails/UserDetails";

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
  const { companyDetails,companyId } = useSelector((state) => {
    return {
      companyDetails: state.companies.companyDetails,
      companyId: state.CompaniesAuth.companyId,
    };
  });
  const updateCompany = () => {
    axios
      .put(`http://localhost:5000/companies/${companyId}`, body)
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
     
      <p>{companyDetails.companylogo}</p>
      <p>{companyDetails.companyname}</p>
      <p>{companyDetails.industry}</p>
      <p>{companyDetails.country}</p>
      <p>{companyDetails.city}</p>
      <p>{companyDetails.numberofemployees}</p>
      <p>{companyDetails.contactperson}</p>
      <p>{companyDetails.phonenumber}</p>
      <p>{companyDetails.companywebsite}</p>
      <p>{companyDetails.ceo}</p>
      <p>{companyDetails.workinghours}</p>
      <p>{companyDetails.weekends}</p>
      <p>{companyDetails.lunchbreak}</p>
      <p>{companyDetails.companyoverview}</p>
      <p>{companyDetails.officelocation}</p>
      <p>{companyDetails.yearsofexperience}</p>
      <div>
        {updateBox && companyUpdateId === companyId && (
          <form>
            <br />
            <input
              type="text"
              placeholder="company website here"
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
            <br />
            <input
              placeholder="ceo here"
              onChange={(e) => setCeo(e.target.value)}
            ></input>
            <br />
            <input
              placeholder="working hours here"
              onChange={(e) => setWorkingHours(e.target.value)}
            ></input>
            <br />
            <input
              placeholder="Weekends here"
              onChange={(e) => setWeekends(e.target.value)}
            ></input>
            <br />
            <input
              placeholder="lunch break here"
              onChange={(e) => setLunchBreak(e.target.value)}
            ></input>
            <br />
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
          </form>
        )}
        <p
          onClick={() => {
            handleUpdateClick(companyId);
          }}
        >
          Update
        </p>
      </div>
    </>
  );
}

export default CompanyDetails;
