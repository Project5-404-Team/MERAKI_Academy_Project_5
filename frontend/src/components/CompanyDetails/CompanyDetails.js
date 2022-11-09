import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"



function CompanyDetails() {
    const {companyDetails} = useSelector((state) => {
        return {
            companyDetails: state.companies.companyDetails,
        
        };
      });



  return (
<>
{console.log(companyDetails)}
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

    </>
  )
}

export default CompanyDetails