
import { Routes, Route, Link , useNavigate ,useParams } from "react-router-dom";
import {useEffect , useState , createContext} from "react"
import LoginUser from "../LoginUser/Login";
import RegisterUser from "../RegisterUser/Register";
import UserHome from "../UserHome/UserHome";
import UserComplete from "../UserComplete/UserComplete"
import UserNavbar from "../UserNavbar/UserNavbar";





function UsersApp() {
  return <div

   className="App">
<UserNavbar/>
<Routes>
      <Route path = "/user/login" element={<LoginUser/> }  />
      <Route path = "/user/register" element={<RegisterUser/> }  />
      <Route path ="/userhome" element ={<UserHome/>}/>
      <Route path ="/user/complete" element ={<UserComplete/>}/>

</Routes>

   </div>;
}

export default UsersApp;
