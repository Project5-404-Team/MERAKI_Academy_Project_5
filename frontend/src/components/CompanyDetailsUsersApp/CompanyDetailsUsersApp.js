import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CompanyDetailsUsersApp() {
  const { companyDetailsInUsersApp } = useSelector((state) => {
    return {
      companyDetailsInUsersApp: state.users.companyDetailsInUsersApp,
    };
  });

  return (
    <>
      <p>{companyDetailsInUsersApp.companylogo}</p>
      <p>{companyDetailsInUsersApp.companyname}</p>
      <p>{companyDetailsInUsersApp.industry}</p>
      <p>{companyDetailsInUsersApp.country}</p>
      <p>{companyDetailsInUsersApp.city}</p>
      <p>{companyDetailsInUsersApp.numberofemployees}</p>
      <p>{companyDetailsInUsersApp.contactperson}</p>
      <p>{companyDetailsInUsersApp.phonenumber}</p>
      <p>{companyDetailsInUsersApp.companywebsite}</p>
      <p>{companyDetailsInUsersApp.ceo}</p>
      <p>{companyDetailsInUsersApp.workinghours}</p>
      <p>{companyDetailsInUsersApp.weekends}</p>
      <p>{companyDetailsInUsersApp.lunchbreak}</p>
      <p>{companyDetailsInUsersApp.companyoverview}</p>
      <p>{companyDetailsInUsersApp.officelocation}</p>
      <p>{companyDetailsInUsersApp.yearsofexperience}</p>
    </>
  );
}

export default CompanyDetailsUsersApp;
