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

        <input
          placeholder="Industry"
          className="RegInput"
          onChange={(e) => {
            setIndustry(e.target.value);
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
