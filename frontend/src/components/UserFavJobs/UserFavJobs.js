import React from "react";
import axios from "axios";
import {useEffect , useState } from "react"
import {  useNavigate  } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setFav } from "../Redux/reducers/fav/fav";


export default function UserFavJobs() {

  const dispatch = useDispatch();

const [allfav,setAllFav]=useState()

    const {userId} =useSelector((state)=>{
        return {
          userId: state.usersAuth.userId,
        }
      })

    const getAllFavJobs = ()=>{
        axios.get(`http://localhost:5000/jobs/favjobs/${userId}`).then((result)=>{
            console.log(result)
            console.log(result.data.result)
            setAllFav(result.data.result)
            dispatch(setFav(result.data.result))
        
        }).catch((err)=>{
        console.log(err)
        })}
        useEffect(()=>{
            getAllFavJobs()
        },[])


       const  deleteFavJob =()=>{
        

       }


  return (<>
    <div className="FavCardsDiv">
        {allfav&&allfav.map((elem,index)=>{
            return<div id={elem.id} key={index} className="jobCard">
                <img src ={elem.companylogo}></img>
            <p>{elem.jobtitle}</p>
            <p>{elem.companyname}</p>
            <p>{elem.country}</p>
            <p>{elem.industry}</p>
            <p>{elem.createdat}</p>
          </div>  
                  
                })}
            
        </div>
        </>
  )
}
