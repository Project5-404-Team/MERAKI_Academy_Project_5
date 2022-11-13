import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCompanies ,setJobs,setUsers ,deleteCompany ,deleteUser,deleteJob} from "../Redux/reducers/Admin/admin"





function AdminPanel() {


    const { users ,companies ,jobs} = useSelector((state) => {
        return {
            users: state.admin.users,
            companies : state.admin.companies,
            jobs : state.admin.jobs
    
        };
      });


  const navigate = useNavigate();
const dispatch =useDispatch()
 //const [users, setUsers] = useState([]);
 // const [jobs, setJobs] = useState([]);
  //const [companies, setCompanies] = useState([]);

//   const [id, setId] = useState("");

  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/admin/users")
      .then((result) => {
        console.log(result.data.result);
       dispatch (setUsers(result.data.result));

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllJobs = () => {
    axios
      .get("http://localhost:5000/admin/jobs")
      .then((result) => {
        console.log(result.data.result);
       dispatch (setJobs(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCompanies = () => {
    axios
      .get("http://localhost:5000/admin/companies")
      .then((result) => {
        console.log(result.data.result);
      dispatch  (setCompanies(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCompany = (CompanyId) => {
    axios
      .put(`http://localhost:5000/admin/companies/${CompanyId}`)
      .then((result) => {

        console.log(result);
        dispatch(deleteCompany(result.data.result))
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    axios
      .put(`http://localhost:5000/admin/users/${id}`)
      .then((result) => {
        dispatch(deleteUser(result.data.result))
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteJob = (jobId) => {
    axios
      .put(`http://localhost:5000/admin/jobs/${jobId}`)
      .then((result) => {
        console.log(result);
        dispatch(deleteJob(result.data.result))

   
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCompanies();
    getAllJobs();
    getAllUsers();
  }, []);

  return (
    <>
      <div className="bigDiv">
        <div>
          <h1> Users</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>phonenumber</th>
              <th>Email</th>
              <th>Password</th>
              <th>Detele User</th>
            </tr>

            {users &&
              users.map((elem, i) => {
                return (
                  < >
                    <tr >
                      <td> {elem.id} </td>
                      <td> {elem.fullname} </td>
                      <td> {elem.gender} </td>
                      <td> {elem.phonenumber} </td>
                      <td> {elem.email} </td>
                      <td> {elem.password} </td>
         <button onClick={()=>{deleteUser(elem.id)}}>Delete</button>
                    </tr>
                  </>
                );
              })}
          </table>
        </div>


        <div>
          <h1> Companies</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>industry</th>
              <th>phonenumber</th>
              <th>country</th>
              <th>Contact Person</th>
              <th>Email</th>
              <th>Password</th>
              <th>Detele Company</th>
            </tr>

            {companies &&
              companies.map((elem, i) => {
                return (
                  <>
                    <tr>
                      <td> {elem.id} </td>
                      <td> {elem.companyname} </td>
                      <td> {elem.industry} </td>
                      <td> {elem.phonenumber} </td>
                      <td> {elem.country} </td>
                      <td> {elem.contactperson} </td>
                      <td> {elem.email} </td>
                      <td> {elem.password} </td>
         <button onClick={()=>{deleteCompany(elem.id)}}>Delete</button>

                    </tr>
                  </>
                );
              })}
          </table>
        </div>

        <div>
          <h1> Jobs</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>industry</th>
              <th>phonenumber</th>
              <th>country</th>
              <th>Contact Person</th>
              <th>salary</th>
              <th>Years Of Experience</th>
              <th>Email</th>
              <th>Password</th>
              <th>Detele Job</th>

            </tr>

            {jobs &&
              jobs.map((elem, i) => {
                return (
                  <>
                    <tr >
                      <td> {elem.id} </td>
                      <td> {elem.jobtitle} </td>
                      <td> {elem.companyname} </td>
                      <td> {elem.industry} </td>
                      <td> {elem.phonenumber} </td>
                      <td> {elem.country} </td>
                      <td> {elem.contactperson} </td>
                      <td> {elem.salary} </td>
                      <td> {elem.yearsofexperience} </td>
                      <td> {elem.email} </td>
                      <td> {elem.password} </td>
         <button onClick={()=>{deleteJob(elem.id)}}>Delete</button> z
                    </tr>

                  </>
                );
              })}
          </table>
        </div>
       
      </div>
    </>
  );
}

export default AdminPanel;
