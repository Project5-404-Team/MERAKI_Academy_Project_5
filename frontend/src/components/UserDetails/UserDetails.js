import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"



function UserDetails() {
    const {userDetails} = useSelector((state) => {
        return {
            userDetails: state.users.userDetails,
        
        };
      });



  return (
<>
<p>{userDetails.fullname}</p>
<p>{userDetails.citizenships}</p>
<p>{userDetails.cv}</p>
<p>{userDetails.dateofbirth}</p>
 <p>{userDetails.educationalinstitutename}</p>
 <p>{userDetails.gender}</p>
 <p>{userDetails.languages}</p>
 <p>{userDetails.major}</p>
 <p>{userDetails.maritalstatus}</p>
 <p>{userDetails.phonenumber}</p>
 <p>{userDetails.recentjobfunction}</p>
<p>{userDetails.recentjobtitle}</p>
 <p>{userDetails.residencystatus}</p>
 <p>{userDetails.skills}</p>
<p>{userDetails.wheredoyoulive}</p>
 <p>{userDetails.yearsofexperience}</p>

    </>
  )
}

export default UserDetails