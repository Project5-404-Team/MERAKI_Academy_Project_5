import axios from "axios";
import React from "react";
import {useEffect , useState } from "react"
import {  useNavigate  } from "react-router-dom";


const CompaniesHome = ()=>{
    
const [users,setAllUsers] = useState("")
const getAllUsers = ()=>{
axios.get('http://localhost:5000/users').then((result)=>{
    console.log(result)
    console.log(result.data.result)
    setAllUsers(result.data.result)
  

}).catch((err)=>{
console.log(err)
})}

useEffect(()=>{
    getAllUsers()
},[])


    return (
        <>
        <div className="usersCardsDiv">
        {users&&users.map((elem,index)=>{
            return<div id={elem.id} className="jobCard">
                <img src ={elem.companylogo}></img>
            <p>{elem.fullname}</p>
            <p> {elem.wheredoyoulive}</p>
            <p>{elem.recentjobtitle}</p>
            <p>{elem.industryofrecentjob}</p>
            <p> {elem.yearsofexperience}</p>

          </div>  
                  
                })}
            
        </div>
        
        
        </>
    )
}

export default CompaniesHome