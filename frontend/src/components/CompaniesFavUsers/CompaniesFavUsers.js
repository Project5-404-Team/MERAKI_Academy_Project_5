import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavUsers,
  deleteFavUsers,
} from "../Redux/reducers/Companies/companies";
import { setuserDetailsInCompanyApp,setRelativeUsers } from "../Redux/reducers/Companies/companies";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import "./CompaniesFavUsers.css"
const CompaniesFavUsers = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { companyId, favUsers } = useSelector((state) => {
    return {
      companyId: state.CompaniesAuth.companyId,
      favUsers: state.companies.favUsers,
    };
  });
  const [allCompaniesFavUsers, setAllCompaniesFavUsers] = useState("");

  const getCompaniesFavUsers = () => {
    axios
      .get(`http://localhost:5000/companies/favusers/${companyId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(setFavUsers(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteCompaniesFavUsers = (favId) => {
    axios
      .delete(`http://localhost:5000/companies/favusers/${favId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        dispatch(deleteFavUsers(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompaniesFavUsers();
  }, []);
  return (
    <>
    <CompaniesNavbar/>
    <div className="companyfavDiv">
   <div className="usersCardsDivcompanyfav">
        {favUsers &&
          favUsers.map((elem, index) => {
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
                <button className="deleteFavCard"
                  onClick={() => {
                    deleteCompaniesFavUsers(elem.id);
                  }}
                >
                  Delete From Favorites
                </button>
              </div>
            );
          })}
      </div></div>
    </>
  );
};

export default CompaniesFavUsers;
