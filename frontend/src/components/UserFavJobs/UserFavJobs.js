import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFav, deleteFav } from "../Redux/reducers/fav/fav";

export default function UserFavJobs() {
  const dispatch = useDispatch();

  const [allfav, setAllFav] = useState();

  const { userId, fav } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      fav: state.fav.fav,
    };
  });

  const getAllFavJobs = () => {
    axios
      .get(`http://localhost:5000/jobs/favjobs/${userId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
        setAllFav(result.data.result);
        dispatch(setFav(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllFavJobs();
  }, []);

  const deleteFavJob = (favJobId) => {
    axios
      .delete(`http://localhost:5000/jobs/favjobs/${favJobId}`)
      .then((result) => {
        console.log(result);
        console.log(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="FavCardsDiv">
        {fav &&
          fav.map((elem, index) => {
            return (
              <div id={elem.id} key={index} className="jobCard">
                <img src={elem.companylogo}></img>
                <p>{elem.jobtitle}</p>
                <p>{elem.companyname}</p>
                <p>{elem.country}</p>
                <p>{elem.industry}</p>
                <p>{elem.createdat}</p>
                <button
                  onClick={() => {
                    deleteFavJob(elem.id);
                    dispatch(deleteFav(elem.id));
                  }}
                >
                  {" "}
                  delete from Fav
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
