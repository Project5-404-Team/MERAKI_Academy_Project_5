import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterCompanies = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  var companyLogo1;

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [registeredSucssfully, setRegisteredSucssfully] = useState(false);

  const body = {
    companyName,
    industry,
    email,
    password,
    country,
    phoneNumber,
    companyWebsite,
    companyLogo1,
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register/companies", body)
      .then((response) => {
        console.log(response);

        setRegisteredSucssfully(true);
        setTimeout(() => {
          navigate("/companies/companies/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bigDivRegister">
      <div className="infoContainerRegister">
        <p> Register</p>

        <input
          placeholder="Company Name"
          className="RegInput"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />

        <label for="Indutry">Choose the Industry:</label>
        <select
          name="Indutry"
          id="Industry"
          onChange={(e) => {
            setIndustry(e.target.value);
          }}
        >
          <option value="Non-Profit and Social Services">
            Non-Profit and Social Services
          </option>
          <option value="Education and Training">Education and Training</option>
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
          <option value="Shipping and Logistics">Shipping and Logistics</option>

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
        </select>

        <input
          placeholder="Country"
          className="RegInput"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <input
          placeholder="phone Number"
          className="RegInput"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <input
          placeholder="Company Website"
          className="RegInput"
          onChange={(e) => {
            setCompanyWebsite(e.target.value);
          }}
        />

        <input
          placeholder="Email"
          className="RegInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type={"password"}
          placeholder="Password"
          className="RegInput"
          onChange={(e) => {
            setPassword(e.target.value);
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
          Register Now !
        </button>
      </div>
    </div>
  );
};
export default RegisterCompanies;
