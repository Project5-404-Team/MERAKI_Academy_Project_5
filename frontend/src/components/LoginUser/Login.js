import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserId } from "../Redux/reducers/usersAuth";
import { setUserDetails, setAppliedJobs } from "../Redux/reducers/Users/users";
import { setUserName } from "../Redux/reducers/Messenger/messenger";

import { useRef } from "react";
const LoginUser = () => {
  const { userId, allJobs, isLoggedIn } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      allJobs: state.users.allJobs,
      isLoggedIn: state.usersAuth.isLoggedIn,
    };
  });
  const buttRef = useRef();
  const [signIn, setSignIn] = useState("Sign in");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInSucssfully, setLoggedInSucssfully] = useState(false);
  const [iserror, setIserror] = useState(false);
  const body = { email, password };

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login/users", body)
      .then((response) => {
        setLoggedInSucssfully(true);
        dispatch(setUserId(response.data.payload.userId));
        dispatch(setLogin(response.data.token));
        dispatch(setUserDetails(response.data.payload.user));
        dispatch(setUserName(response.data.payload.user.fullname));

        navigate("/users/userhome");
      })

      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      })
      .finally(() => {
        buttRef.current.disabled = false;
        buttRef.current.innerText = "Sign in";
      });
  };

  return (
    <>
      <div className="mainPageLoginUser">
        <div className="navbar_container">
          <p
            className="navbar_user_login_link"
            onClick={() => {
              navigate("/users/user/login");
            }}
          >
            Job Seeker Account
          </p>
          <p className="or">or</p>
          <p
            className="navbar_company_login_link"
            onClick={() => {
              navigate("/companies/companies/login");
            }}
          >
            Employer Account
          </p>
        </div>
        <div className="BigDivLogin">
          <div className="infoContainer">
            <h1 style={{ textAlign: "left", marginBottom: "40px" }}>
              {" "}
              Job Seeker Account Login
            </h1>
            {/* <p> Email</p> */}
            <input
              className="emailInput"
              placeholder=" Email "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <p> Password</p> */}
            <input
              type={"password"}
              className="emailInput"
              placeholder=" Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {loggedInSucssfully && (
              <div className="popuptry">
                <h1> Logged In Successfully</h1>
              </div>
            )}

            <button
              ref={buttRef}
              className="loginButton"
              onClick={(e) => {
                buttRef.current.disabled = true;
                setTimeout(handleLogin, 3000);
                console.log(e);
                setSignIn(<i class="fa fa-circle-o-notch fa-spin"></i>);
              }}
            >
              {" "}
              {signIn}{" "}
            </button>
            <p>{!iserror ? error : null}</p>
          </div>
        </div>
        <div className="paragraph">
          {" "}
          <span style={{ fontWeight: 600 }}>Job Seeker?</span>
          <p> Join Us and let employers find you easily and get hired now.</p>
          <span style={{ fontWeight: 600 }}>Build your profile</span>{" "}
        </div>
        <div className="belowLoginDiv">
          <p
            className="registerLink"
            onClick={() => {
              navigate("/users/user/register");
            }}
          >
            Dont Have Account! Register Now
          </p>

          <p
            className="googleLink"
            onClick={() => {
              navigate("/users/user/login/Google");
            }}
          >
            LOGIN WITH GOOGLE
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
