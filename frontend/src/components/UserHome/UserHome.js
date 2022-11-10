import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import {setCompanyDetailsInUsersApp }  from "../Redux/reducers/Users/users"
import "./UserHome.css"

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
      <div className="jobsCardsDiv">
        {allJobs &&
          allJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <h2 onClick={()=>{
                  dispatch(setJobDetails(elem))
                  navigate('/users/jobdetails')
                }}>{elem.jobtitle}</h2>
                <h4 onClick={()=>{
                  dispatch(setCompanyDetailsInUsersApp(elem))
                  navigate('/users/companydetails/userapp')
                }}>{elem.companyname}</h4>
                <h5>{elem.country}</h5>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <button
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
    </>
  );
};

export default UserHome;
