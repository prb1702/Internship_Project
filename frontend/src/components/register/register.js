import React, { useState } from "react";
import "./register.css";
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
import Navbar from "../homepage/Navbar";


const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    // .target returns the element on which the event occured
    const { name, value } = e.target;
    // console.log(name,value)

    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password == reEnterPassword) {
      // alert("posted")
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Navbar />
      <div className="back5">
        <div className="register">
          {console.log("User", user)}
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          />
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
          <div className="button" onClick={register}>
            <Link to="/register">Register</Link>
          </div>
          <div>or</div>
          <div className="button">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
