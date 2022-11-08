import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CompaniesHome = () => {
  const { companyId } = useSelector((state) => {
    return { companyId: state.CompaniesAuth.companyId };
  });

  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.CompaniesAuth.isLoggedIn };
  });
  const navigate = useNavigate();
  const [users, setAllUsers] = useState("");
  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        setAllUsers(result.data.result);
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
      <div>
        <p
          onClick={() => {
            navigate("/companies/company/complete");
          }}
        >
          Complete my account
        </p>
      </div>
      <div className="usersCardsDiv">
        {users &&
          users.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p>{elem.fullname}</p>
                <p> {elem.wheredoyoulive}</p>
                <p>{elem.recentjobtitle}</p>
                <p>{elem.industryofrecentjob}</p>
                <p> {elem.yearsofexperience}</p>
                <p
                  onClick={() => {
                    handleCompaniesFavUsers(elem.id);
                  }}
                >
                  {" "}
                  Add to Favorite
                </p>
              </div>
            );
          })}
      </div>
      <div>
        <p
          onClick={() => {
            navigate("/companies/addnewjob");
          }}
        >
          Add New Job
        </p>
      </div>
    </>
  );
};

export default CompaniesHome;
