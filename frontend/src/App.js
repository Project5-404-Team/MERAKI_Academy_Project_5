import "./App.css";
import { Routes, Route, Link , useNavigate ,useParams } from "react-router-dom";
import {useEffect , useState , createContext} from "react"
import LoginUser from "./components/LoginUser/Login";
import RegisterUser from "./components/Register User/Register";
import RegisterCompanies from "./components/RegisterCompanies/RegisterCompanies";
import LoginCompanies from "./components/LoginCompanies/LoginCompanies";
import UserHome from "./components/UserHome/UserHome";
import CompaniesHome from "./components/CompaniesHome/Companieshome";
import Navbar from './components/Navbar/Navbar';
import UserComplete from "./components/UserComplete/UserComplete"
import CompaniesComplete from './components/CompaniesComplete/CompaniesComplete'
import AddNewJob from "./components/AddNewJob/AddNewJob";




function App() {
  return <div

   className="App">
       <Navbar />
<Routes>
      <Route path = "/user/login" element={<LoginUser/> }  />
      <Route path = "/user/register" element={<RegisterUser/> }  />
      <Route path = "/companies/register" element={<RegisterCompanies/> }  />
      <Route path = "/companies/login" element={<LoginCompanies/> }  />
      <Route path ="/userhome" element ={<UserHome/>}/>
      <Route path ="/companieshome" element ={<CompaniesHome/>}/>
      <Route path ="/user/complete" element ={<UserComplete/>}/>
      <Route path ="/company/complete" element ={<CompaniesComplete/>}/>
      <Route path = "/addnewjob" element={<AddNewJob/>}/>

</Routes>

   </div>;
}

export default App;
