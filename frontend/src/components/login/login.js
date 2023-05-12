import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
// import { useHistory } from "react-router-dom"

import Navbar from "../homepage/Navbar";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    // console.log(name,value)
    setUser({
      // Spread syntax allows you to deconstruct an array or object into separate variables
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  const logout = () => {
    axios.get("http://localhost:9002/logout").then((res) => {
      alert(res.data.message);
      setLoginUser(null);
      navigate("/login");
    });
  };
  

  return (
    <>
      <Navbar />
      <div className="back5">
        <div className="login">
          {console.log(user)}
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <div className="button" onClick={login}>
            <Link to="/login">Login</Link>
          </div>
          <div>or</div>
          <div className="button b">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
