import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyLogo } from "../Redux/reducers/Companies/companies";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import "./CompaniesComplete.css"

const CompaniesComplete = () => {
  const [companyWebsite, setCompanyWebsite] = useState(null);
  const [ceo, setCeo] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [weekends, setWeekends] = useState(null);
  const [lunchBreak, setLunchBreak] = useState(null);
  const [companyOverview, setCompanyOverview] = useState(null);
  const [officeLocation, setOfficeLocation] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { companyId, companyLogo } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      companyLogo: state.companies.companyLogo,
    };
  });

  const [registeredSucssfully, setRegisteredSucssfully] = useState(false);



  
  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "basel_project5");

    axios
      .post("https://api.cloudinary.com/v1_1/did6jp3bj/image/upload", formData)
      .then((response) => {
        dispatch(setCompanyLogo(response.data.secure_url));
        console.log(companyLogo);
      });
  };
  const body = {
    companyWebsite,
    ceo,
    workingHours,
    weekends,
    lunchBreak,
    companyOverview,
    companyLogo,
    officeLocation,
  };

  const handleRegister = () => {
    axios
      .put(`http://localhost:5000/register/companies/${companyId}`, body)
      .then((response) => {
        console.log(response);

        setRegisteredSucssfully(true);
        setTimeout(() => {
          navigate("/companies/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <CompaniesNavbar/>
    <div className="bigDivRegisterComplete">
      <div className="infoContainerRegister1">
       

        <input
          placeholder="Company Website"
          className="RegInput"
          onChange={(e) => {
            setCompanyWebsite(e.target.value);
          }}
        />

        <input
          placeholder="CEO"
          className="RegInput"
          onChange={(e) => {
            setCeo(e.target.value);
          }}
        />

        <input
          placeholder="Working Hours"
          className="RegInput"
          onChange={(e) => {
            setWorkingHours(e.target.value);
          }}
        />

        <input
          placeholder="Weekends"
          className="RegInput"
          onChange={(e) => {
            setWeekends(e.target.value);
          }}
        />

        <input
          placeholder="Lunch Break"
          className="RegInput"
          onChange={(e) => {
            setLunchBreak(e.target.value);
          }}
        />

        <input
          placeholder="Company Overview"
          className="RegInput"
          onChange={(e) => {
            setCompanyOverview(e.target.value);
          }}
        />

        <div>
        <label for="image">Choose Your Company Logo</label>
          <input
            id="image"
            type="file"
            placeholder="ompany Logoe"
            className="RegInput"
            onChange={(e) => {
              uploadImage(e.target.files[0])
            }
            }
          ></input></div>
        <input
          placeholder="Office Location"
          className="RegInput"
          onChange={(e) => {
            setOfficeLocation(e.target.value);
          }}
        />

        {registeredSucssfully && (
          <div className="popuptry">
            <h1> Registerd In Sussfully</h1>
          </div>
        )}

        <button
          className="registerButton1complete"
          onClick={() => {
            handleRegister();
          }}
        >
          {" "}
          Complete Information !
        </button>
      </div>
    </div></>
  );
};
export default CompaniesComplete;
