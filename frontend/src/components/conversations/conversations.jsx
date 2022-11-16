import React from 'react'
import "./conversations.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { setCompanyIdUserApp } from '../Redux/reducers/Users/users';
import { setUserId } from '../Redux/reducers/usersAuth';
import { useEffect, useState } from "react";
import {  setCompanyId } from "../Redux/reducers/CompaniesAuth/index";
import {setUserCoId} from "../Redux/reducers/Companies/companies";

export default function Conversations() {

const dispatch =useDispatch()

  const { userName, room,  companyId ,userId,companyIdUserApp,userCoId  } = useSelector((state) => {
    return {
      userName: state.messenger.userName,
      room: state.messenger.room,
    
      companyIdUserApp: state.users.companyIdUserApp,
      userId: state.usersAuth.userId,
      companyId: state.CompaniesAuth.companyId ,
      userCoId: state.companies.userCoId,

    };
  });

const [conv, setConv] = useState([])

let people = []



const change =(userId,companyId)=>{

dispatch(setCompanyId(companyId)||setCompanyIdUserApp(companyId))
dispatch(setUserCoId(userId)||setUserId(userId))

}



 useEffect( () => {

if(userId){


  axios
  .get(`http://localhost:5000/messenger/${userId}`)
  .then((result) => {
    console.log(result);
    console.log(result.data.result);
    console.log("from USER GET")

    setConv(result.data.result)
  })
  .catch((err) => {
    console.log(err);
  });
}

else{

  axios
  .get(`http://localhost:5000/messenger?companyId=${companyId}`)
  .then((result) => {
    console.log(result);
    console.log(result.data.result);
    console.log("from Company GET")
    setConv(result.data.result)
  })
  .catch((err) => {
    console.log(err);
  });

}
 }, [])






for (let index = 0; index < conv.length; index++) {
if(conv[index].sender!==userName){
  people.push(conv[index])
}
}


  return (
<>

    <div >

  





{people&&people.map((elem,i)=>{
  return (
    <div className='conversations' onClick={()=>{change(elem.userid,elem.companyid);console.log("company id is  "+ elem.companyid);console.log("User id is  "+ elem.userid)}}>
    <img className='conversationImg' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    <span> {elem.sender}</span>
       </div>

  )
})}

    <span className='conversationName'></span>

    </div>
    </>
  )
}
