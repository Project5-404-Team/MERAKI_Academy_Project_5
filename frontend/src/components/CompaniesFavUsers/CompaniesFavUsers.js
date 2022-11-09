import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavUsers,
  deleteFavUsers,
} from "../Redux/reducers/Companies/companies";

const CompaniesFavUsers = () => {
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
      <div className="allCompaniesFavUsers">
        {favUsers &&
          favUsers.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="favCard">
                <img src={elem.companylogo}></img>
                <p>{elem.fullname}</p>
                <p> {elem.wheredoyoulive}</p>
                <p>{elem.recentjobtitle}</p>
                <p>{elem.industryofrecentjob}</p>
                <p> {elem.yearsofexperience}</p>
                <p
                  onClick={() => {
                    deleteCompaniesFavUsers(elem.id);
                  }}
                >
                  Delete From Favorites
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CompaniesFavUsers;
