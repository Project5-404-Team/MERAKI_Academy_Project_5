import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function JobDetailsUsers() {
  const { jobDetails, userId } = useSelector((state) => {
    return {
      jobDetails: state.users.jobDetails,
      userId: state.usersAuth.userId,
    };
  });
const jobApply = ()=>{
    axios.post(`http://localhost:5000/jobs/jobapply/${userId}`,{jobId:jobDetails.id}).then((result)=>{
        console.log(result)

    }).catch((err)=>{
        console.log(err)
    })
}


  return (
    <>
      {console.log(jobDetails)}

      <p>{jobDetails.companylogo}</p>
      <p>{jobDetails.jobtitle}</p>
      <p>{jobDetails.companyname}</p>
      <p>{jobDetails.industry}</p>
      <p>{jobDetails.jobtype}</p>
      <p>{jobDetails.jobrole}</p>
      <p>{jobDetails.careerLevel}</p>
      <p>{jobDetails.jobLocation}</p>
      <p>{jobDetails.yearsofexperience}</p>
      <p>{jobDetails.countryofcitizenship}</p>
      <p>{jobDetails.countryofresidence}</p>
      <p>{jobDetails.numberOfHires}</p>
      <p>{jobDetails.salary}</p>
      <p>{jobDetails.jobdescription}</p>
      <p>{jobDetails.jobrequirements}</p>
      <p>{jobDetails.language}</p>
      <p onClick={()=>{
jobApply()
      }}>Apply For This Job</p>
    </>
  );
}

export default JobDetailsUsers;
