import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserId } from "../Redux/reducers/usersAuth";
import { setUserDetails, setAppliedJobs } from "../Redux/reducers/Users/users";

const LoginUser = () => {
  const { userId, allJobs, isLoggedIn } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      allJobs: state.users.allJobs,
      isLoggedIn: state.usersAuth.isLoggedIn,
    };
  });

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
        console.log(response.data.payload);
        dispatch(setUserDetails(response.data.payload.user));
        navigate("/users/userhome");
      })

      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
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
              /*type={"password"}*/
              className="emailInput"
              placeholder=" Password "
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
        <p
          onClick={() => {
            navigate("/users/user/register");
          }}
        >
          Dont Have Account! Register Now
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/users/user/login/Google");
        }}
      >
        LOGIN WITH GOOGLE
      </div>
    </>
  );
};

export default LoginUser;
