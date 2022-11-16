import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setuserDetailsInCompanyApp,setRelativeUsers } from "../Redux/reducers/Companies/companies";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import "./CompaniesHome.css"
import FilterNavCompanies from "../FilterNavCompanies/FilterNavCompanies";
import { setAllUsers } from "../Redux/reducers/Companies/companies";


const CompaniesHome = () => {
  const dispatch=useDispatch()
  const { companyId,companyDetails, relativeUsers ,allUsers} = useSelector((state) => {
    return { companyId: state.CompaniesAuth.companyId ,
      companyDetails: state.companies.companyDetails.industry,
      relativeUsers: state.companies.relativeUsers,
      allUsers:state.companies.allUsers

    };
  });

  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.CompaniesAuth.isLoggedIn };
  });
  const navigate = useNavigate();
  
  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setAllUsers(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCompaniesFavUsers = (userId) => {
    axios
      .post(`http://localhost:5000/companies/favusers/${companyId}`, { userId })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleRelevantUsers = () => {

    axios
      .get(`http://localhost:5000/users/search?search=${companyDetails}`)
      .then((result) => {
       // console.log(result);
        console.log(result.data.result);
   dispatch(setRelativeUsers(result.data.result))
     
   setTimeout(() => {
   navigate("/companies/relevantusers")
    
   }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    {
      console.log(isLoggedIn);
    }
  }, []);

  return (
    <>
    <CompaniesNavbar/>
    
   <div className="companyHomeDiv">
    <div className="filterNav">
        <FilterNavCompanies/>
      </div>
    
          
        

   <div className="usersCardsDiv">
   <button onClick={()=>{
handleRelevantUsers()

}}> Find Relative Users </button>
        {allUsers &&
          allUsers.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="userCard">
                <img className="userImageCard" src={elem.userimage}></img>
                <h2 className="fullNameCard" onClick={()=>{
                  dispatch(setuserDetailsInCompanyApp(elem))
                  navigate('/companies/userdetails/companyapp')
                  
                }}>{elem.fullname}</h2>
                  <h3 className="userjobsdetailingCard">{elem.recentjobtitle} - {elem.industryofrecentjob} - {elem.wheredoyoulive}</h3>
                  <p className="Majorusercard"> Major : {elem.major}</p>
                  <p className="yearsofexperienceusercard"> Years Of Experience : {elem.yearsofexperience}</p>
                  <p className="Languagesusercard"> Languages : {elem.languages}</p>
                  
          
                <button className="addFavCard" 
                  onClick={() => {
                    handleCompaniesFavUsers(elem.id);
                  }}
                >
                  {" "}
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

export default CompaniesHome;
