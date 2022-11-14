import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../RegisterCompanies/RegisterCompanies.css"

const RegisterCompanies = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [contactPerson, setContactPerson] = useState(null);
  const [numberOfEmployees, setNumberOfEmployees] = useState(null);
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
    city,
    numberOfEmployees,
    contactPerson,
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
    <div className="mainPageRegisterCompany">
      <div className="navbar_container">
          <p
            className="navbar_user_login_link"
            onClick={() => {
              navigate("/users/user/login");
            }}
          >
            Job Seeker Account
          </p>
          <p className="or">or</p>
          <p
            className="navbar_company_login_link"
            onClick={() => {
              navigate("/companies/companies/login");
            }}
          >
            Employer Account
          </p>
        </div>
    <div className="bigDivRegisterCompany">
      <div className="infoContainerRegisterCompany">
      <h1 style={{textAlign:"left",marginBottom:"40px"}}> Employer Account Register</h1>

        <input
          placeholder="Company Name"
          className="RegInput"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />

<input
          placeholder="Country"
          className="RegInput"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          placeholder="City"
          className="RegInput"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <select className="RegInput"
          name="Industry"
          id="Industry"
          onChange={(e) => {
            setIndustry(e.target.value);
          }}
        >
          <option selected disabled hidden>
          Choose the Industry:
          </option>
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
          placeholder="Number of Employees"
          className="RegInput"
          onChange={(e) => {
            setNumberOfEmployees(e.target.value);
          }}
        />

<input
          placeholder="Contact Person"
          className="RegInput"
          onChange={(e) => {
            setContactPerson(e.target.value);
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
    <div className="paragraph">    <span style={{ fontWeight: 600 }}>Employer?</span>
              <p>Hire the perfect talent from many available candidate.</p>
              <span style={{ fontWeight: 600 }}>
                Post a Job{" "}
              </span> </div>
    </div>
  );
};
export default RegisterCompanies;
