
import { Routes, Route, Link , useNavigate ,useParams } from "react-router-dom";
import {useEffect , useState , createContext} from "react"
import RegisterCompanies from "../RegisterCompanies/RegisterCompanies";
import LoginCompanies from "../LoginCompanies/LoginCompanies";
import CompaniesHome from "../CompaniesHome/Companieshome";
import CompaniesComplete from '../CompaniesComplete/CompaniesComplete'
import AddNewJob from "../AddNewJob/AddNewJob";
import CompaniesNavbar from "../CompaniesNavbar/CompaniesNavbar";
import CompaniesJobs from "../CompaniesJobs/CompaniesJobs"
import CompaniesFavUsers from "../CompaniesFavUsers/CompaniesFavUsers";


function CompaniesApp() {
  return <div

   className="App">
<CompaniesNavbar/>
<Routes>
      <Route path = "/companies/register" element={<RegisterCompanies/> }  />
      <Route path = "/companies/login" element={<LoginCompanies/> }  />
      <Route path ="/companieshome" element ={<CompaniesHome/>}/>
      <Route path ="/company/complete" element ={<CompaniesComplete/>}/>
      <Route path = "/addnewjob" element={<AddNewJob/>}/>
      <Route path = "/companyjobs" element ={<CompaniesJobs/>}/>
      <Route path = "/favusers" element={<CompaniesFavUsers/>}/>

</Routes>

   </div>;
}

export default CompaniesApp;
