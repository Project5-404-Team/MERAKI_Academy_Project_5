import react from "react";
import { useDispatch, useSelector } from "react-redux"

import axios from "axios";
import "./JobsSearch.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setAllJobs, setJobDetails } from "../Redux/reducers/Users/users";
import { setJobSearch } from "../Redux/reducers/Users/users.js";


function JobsSearch() {




const [search, setSearch] = useState("")

const dispatch =useDispatch()





    const HandleJobSearch = () => {



        axios
          .get(`http://localhost:5000/jobs/search/${search}`)
          .then((result) => {
            console.log(result);
            console.log(result.data.result);
            dispatch(setAllJobs(result.data.result))
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
<>
    <div>
      <input onChange={(e)=>{
        setSearch(e.target.value)
      }} placeholder="Search"/>

      <button onClick={()=>{
        HandleJobSearch() 
      }}>Search Now !</button>
    </div>
    </>
  )
}

export default JobsSearch