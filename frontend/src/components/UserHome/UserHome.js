import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import {setCompanyDetailsInUsersApp }  from "../Redux/reducers/Users/users"
import "./UserHome.css"
import UserNavbar from "../UserNavbar/UserNavbar";
import FilterNav from "../FilterNavIndustry/FilterNavIndustry";
import Footer from "../Footer/Footer";
const UserHome = () => {




const dispatch =useDispatch()
const navigate=useNavigate()
  const { userId ,allJobs ,jobSearch,token} = useSelector((state) => {
    return {
       userId: state.usersAuth.userId,
      allJobs : state.users.allJobs,
      jobSearch : state.users.jobSearch,
token:state.usersAuth.token
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
      .post(`http://localhost:5000/jobs/favjobs/${userId}`,{jobId},{headers: {
        authorization: "Bearer " + token
      }})
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
     <div className="IconDiv">
<img src="https://res.cloudinary.com/did6jp3bj/image/upload/v1668624692/meraki/NiceJob__1_-removebg-preview_yvyumr.png"></img>
</div>
    <div className="userHomeDiv">
   
    <div className="filterNav1">
    
        <FilterNav/>
      </div>
    <div className="video">
      
    <video  style={{width:"400px"}} autoplay="true" muted="true" playsinline="true" loop="true" >
  <source src="https://www.freshresume.co/video/Freshresume_t1_new.mp4" type="video/mp4"/>
</video>
<h1>Create a winning<br></br>
  resume in minutes..</h1>
 
  <a href="https://www.freshresume.co/info/63754103e4e84dce557bca1e" target="blank"><button className="createCvButton" >Create Your Resume</button></a>
    </div>
      <div className="jobsCardsDiv1">
        {allJobs &&
          allJobs.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard1">
                <img className="companyLogoCard1" src={elem.companylogo}></img>
                <h2 className="jobTitleCard1" onClick={()=>{
                  dispatch(setJobDetails(elem))
                  navigate('/users/jobdetails')
                }}>{elem.jobtitle}</h2>
                <h4 className="companyNameCard1" onClick={()=>{
                  dispatch(setCompanyDetailsInUsersApp(elem))
                  navigate('/users/companydetails/userapp')
                }}>{elem.companyname} - {elem.industry} - {elem.country}</h4>
                
                
                <p className="carerLevelCard1">Career Level : {elem.careerlevel}</p>
                <p></p>
                <p className="createdDateCard1" style={{fontSize:"12px"}} >Date Posted :{elem.createdat.substring(0,10)}</p>
                <p className="expiryDateCard1" style={{fontSize:"12px"}}>Expiry Date: {elem.expirydate.substring(0,10)}</p>
                <p className="jobDescription1">{elem.jobdescription.substring(0,150)}...</p>
                <button className="addFavCard1" 
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
     <Footer/>
    </>
  );
};

export default UserHome;
