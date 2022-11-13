import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import {setCompanyDetailsInUsersApp }  from "../Redux/reducers/Users/users"
import "./UserHome.css"
import UserNavbar from "../UserNavbar/UserNavbar";

const UserHome = () => {




const dispatch =useDispatch()
const navigate=useNavigate()
  const { userId ,allJobs ,jobSearch} = useSelector((state) => {
    return {
       userId: state.usersAuth.userId,
      allJobs : state.users.allJobs,
      jobSearch : state.users.jobSearch

    };
  });

  const [jobs, setJobs] = useState("");


  const getAllJobs = () => {
    axios
      .get("http://localhost:5000/jobs")
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        setJobs(result.data.result);
        dispatch(setAllJobs(result.data.result))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddToFav = (jobId) => {
    axios
      .post(`http://localhost:5000/jobs/favjobs/${userId}`,{jobId})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllJobs();
  }, [jobSearch]);

  return (
   
    <>
     <UserNavbar/>
    <div className="userHomeDiv">
      <div className="filterDiv">
<p>

</p>

      </div>
      <div className="jobsCardsDiv">
        {allJobs &&
          allJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img className="companyLogoCard" src={elem.companylogo}></img>
                <h2 className="jobTitleCard" onClick={()=>{
                  dispatch(setJobDetails(elem))
                  navigate('/users/jobdetails')
                }}>{elem.jobtitle}</h2>
                <h4 className="companyNameCard" onClick={()=>{
                  dispatch(setCompanyDetailsInUsersApp(elem))
                  navigate('/users/companydetails/userapp')
                }}>{elem.companyname} - {elem.industry} - {elem.country}</h4>
                
                
                <p className="carerLevelCard">Career Level : {elem.careerlevel}</p>
                <p></p>
                <p className="createdDateCard" style={{fontSize:"12px"}} >Date Posted :{elem.createdat.substring(0,10)}</p>
                <p className="expiryDateCard" style={{fontSize:"12px"}}>Expiry Date: {elem.expirydate.substring(0,10)}</p>
                <p className="jobDescription">{elem.jobdescription.substring(0,150)}...</p>
                <button className="addFavCard" 
                  onClick={(e) => {
                    handleAddToFav(elem.id);
                  }}
                >
                  Add to Favorite
                </button>
                
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
};

export default UserHome;
