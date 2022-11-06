import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginCompanies.css";
import { useDispatch, useSelector } from "react-redux"
import { setLogin, setCompanyId } from "../Redux/reducers/CompaniesAuth";



const LoginCompanies = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInSucssfully, setLoggedInSucssfully] = useState(false);
  const [iserror, setIserror]= useState(false)
  const body = { email, password };

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login/companies",body)
      .then((response) => {
       
        setLoggedInSucssfully(true);
        console.log(response.data.token);
        console.log(response.data.payload.companyId);
        dispatch(setLogin(response.data.token))
        dispatch(setCompanyId(response.data.payload.companyId))
       
        navigate('/companieshome')

      })

      .catch((err) => {
        console.log(err);
        
      });
  };

  return (
    <>
      <div>
        <div className="BigDivLogin">
    

         

            <div className="infoContainer">
              <h1> Login</h1>
              {/* <p> Email</p> */}
              <input
                className="emailInput"
                placeholder="  Email "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* <p> Password</p> */}
              <input
                type={"password"}
                className="emailInput"
                placeholder=" Password "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {loggedInSucssfully && (
                <div className="popuptry">
                  <h1> Logged In Sussfully</h1>
                </div>
              )}

              <button
                className="loginButton"
                onClick={() => {
                  handleLogin();
                  
                }}
              >
                {" "}
                Login{" "}
              </button>
              <p>{!iserror ? error : null}</p>
            </div>
          </div>
      </div>
      <div>
        <p onClick={()=>{
          navigate('/companies/register')
        }}>Dont Have Account! Register Now</p>
      </div>
    </>
  );
};

export default LoginCompanies
