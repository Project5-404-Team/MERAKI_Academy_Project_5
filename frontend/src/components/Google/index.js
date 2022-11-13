import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserId } from "../Redux/reducers/usersAuth";
import { setUserDetails } from "../Redux/reducers/Users/users";

const Google = () => {
  const { userId, allJobs, isLoggedIn } = useSelector((state) => {
    return {
      userId: state.usersAuth.userId,
      allJobs: state.users.allJobs,
      isLoggedIn: state.usersAuth.isLoggedIn,
    };
  });
  const login = (decoded1) => {
    axios
      .post("http://localhost:5000/login/users/googlelogin", {
        fullName: decoded1.name,
        email: decoded1.email,
        password: "0",
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setUserId(response.data.payload.userId));
        dispatch(setLogin(response.data.token));
        dispatch(setUserDetails(response.data.payload.user));
        navigate("/users/userhome");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="googleLogin">
      <GoogleOAuthProvider clientId="1051135409617-k2pttkrl0j8jtmh40184b9d1dm3vnetf.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded1 = jwtDecode(credentialResponse.credential);
            login(decoded1);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Google;
