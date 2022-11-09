import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function UserDetailsCompanyApp() {
  const { userDetailsInCompanyApp } = useSelector((state) => {
    return {
      userDetailsInCompanyApp: state.companies.userDetailsInCompanyApp,
    };
  });

  return (
    <>
      <p>{userDetailsInCompanyApp.fullname}</p>
      <p>{userDetailsInCompanyApp.citizenships}</p>
      <p>{userDetailsInCompanyApp.cv}</p>
      <p>{userDetailsInCompanyApp.dateofbirth}</p>
      <p>{userDetailsInCompanyApp.educationalinstitutename}</p>
      <p>{userDetailsInCompanyApp.gender}</p>
      <p>{userDetailsInCompanyApp.languages}</p>
      <p>{userDetailsInCompanyApp.major}</p>
      <p>{userDetailsInCompanyApp.maritalstatus}</p>
      <p>{userDetailsInCompanyApp.phonenumber}</p>
      <p>{userDetailsInCompanyApp.recentjobfunction}</p>
      <p>{userDetailsInCompanyApp.recentjobtitle}</p>
      <p>{userDetailsInCompanyApp.residencystatus}</p>
      <p>{userDetailsInCompanyApp.skills}</p>
      <p>{userDetailsInCompanyApp.wheredoyoulive}</p>
      <p>{userDetailsInCompanyApp.yearsofexperience}</p>
    </>
  );
}

export default UserDetailsCompanyApp;
