import React from "react";
import "./Navbar2.css";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Navbar2() {
  return (
    <>
      <div className="nav2">
        <nav className="navbar navbar-expand-lg shadow nav10">
          <div className=" p">
            <div
              className="class"
              id=""
            >
              <ul className="new">
                <li className="nav-item tem">
                  {/* <a className="nav-link f f3" aria-current="page" href="#">
                    Makeup
                  </a> */}
                  <Link className="nav-link f f3" to='/products'> Makeup </Link>
                  {/* <div className="disp">
                  Hello
                </div> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link f" href="#">
                    Skin
                  </a> */}
                  <Link className="nav-link f f3" to='/skin'> Skin </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link f" href="">
                    Hair
                  </a> */}
                  <Link className="nav-link f f3" to='/hair'> Hair </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Appliances
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Bath & Body
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Natural
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Mom & Baby
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Health & Wellness
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Men
                  </a> 
                </li>
                <li className="nav-item">
                  <a className="nav-link f" href="">
                    Fragrance
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  f" href="">
                    Pop Ups
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
