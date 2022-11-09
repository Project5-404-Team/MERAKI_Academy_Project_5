import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import {setCompanyDetailsInUsersApp }  from "../Redux/reducers/Users/users"

const UserHome = () => {


const dispatch =useDispatch()
const navigate=useNavigate()
  const { userId ,allJobs} = useSelector((state) => {
    return {
       userId: state.usersAuth.userId,
      allJobs : state.users.allJobs
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
  }, []);

  return (
    <>
      <div className="jobsCardsDiv">
        {allJobs &&
          allJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p onClick={()=>{
                  dispatch(setJobDetails(elem))
                  navigate('/users/jobdetails')
                }}>{elem.jobtitle}</p>
                <p onClick={()=>{
                  dispatch(setCompanyDetailsInUsersApp(elem))
                  navigate('/users/companydetails/userapp')
                }}>{elem.companyname}</p>
                <p>{elem.country}</p>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <p
                  onClick={(e) => {
                    handleAddToFav(elem.id);
                  }}
                >
                  Add to Favorite
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserHome;
