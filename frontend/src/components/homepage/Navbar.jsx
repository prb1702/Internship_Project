import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import "./Navbar.css";
import nykaa from "./nykaa.png";
import bag2 from "./bag2.png";
import app from "./app.png";
import loc from "./loc.png";
import gift from "./gift.png";
import help from "./help.png";
import Search from './Search';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Navbar = ({setLoginUser}) => {

  return (
    <div className="main">
      <div className="color">
        {/* <h1>Hello World</h1> */}
        <div className="marq">
          <marquee behavior="sliding" direction="up">
            <p className="m">Spring Splash Sale - Up To 50% Off</p>
          </marquee>
        </div>

        <a href="" className="top">
          <div className="app">
            <img className="appimg" src={app} alt="app" />
            <span>Get App</span>
          </div>
          {/* <div className="separator">
            <span>|</span>
          </div> */}
        </a>

        <div className="separator">
          <span>|</span>
        </div>

        <a href="" className="top">
          <div className="loc">
            <img className="appimg" src={loc} alt="app" />
            <span>Store & Events</span>
          </div>
          {/* <div className="separator">
            <span>|</span>npm s
          </div> */}
        </a>

        <div className="separator">
          <span>|</span>
        </div>

        <a href="" className="top">
          <div className="gift">
            <img className="appimg" src={gift} alt="app" />
            <span>Gift Card</span>
          </div>
          {/* <div className="separator">
            <span>|</span>
          </div> */}
        </a>

        <div className="separator">
          <span>|</span>
        </div>

        <a href="" className="top">
          <div className="help">
            <img className="appimg" src={help} alt="app" />
            <span>Help</span>
          </div>
        </a>
      </div>

      <nav className="no navbar">
        <div className="p p2">
          <Link className="logo" to='/'>
            <img src={nykaa}  alt="logo" />
          </Link>
          {/* <a className="logo" href="#">
            <img src={nykaa}  alt="logo" />
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
          // collapse navbar-collapse 
            className="n2"
            id=""
          >
            <ul className="new2">
              <li className="nav-item f3">
                <a
                  className="nav-link active f top f2 pd"
                  aria-current="page"
                  href="#"
                >
                  Categories
                </a>
              </li>
              <li className="nav-item f3">
                <a className="nav-link active f top f2 pd" href="#">
                  Brands
                </a>
              </li>
              <li className="nav-item f3">
                <a className="nav-link active f top f2" href="">
                  Luxe
                </a>
              </li>
              <li className="nav-item f3">
                <a className="nav-link active f top f2 wid" href="">
                  Nykaa Fashion
                </a>
              </li>
              <li className="nav-item f3">
                <a className="nav-link active f top f2 wid" href="">
                  Beauty Advice
                </a>
              </li>
            </ul>
            <form className="hov" role="search">
              {/* <Route component={({ history }) => <Search history={history} />} /> */}
              {/* <input
                className="me-2 in8"
                type="search"
                placeholder="Search on Nykaa"
                aria-label="Search"
                // onChange={Filter}
              /> */}
              <div className="logOut">
                <div className="button" onClick={() => setLoginUser({})}>
                  Logout
                </div>
              </div>
              {/* <button className="btn btn-outline-success" type="submit">
                 <Link to='/login'> Logout Link> 
              </button> */}
            </form>

            <div className="bag">
              <a href="">
                {" "}
                <img src={bag2} alt="bag" />{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";

// import "./Navbar.css";
// import nykaa from "./nykaa.png";
// import bag2 from "./bag2.png";
// import app from "./app.png";
// import loc from "./loc.png";
// import gift from "./gift.png";
// import help from "./help.png";

// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// export default function Navbar() {
//   return (
//     <div className="main">
//       <div className="color">
//         {/* <h1>Hello World</h1> */}
//         <div className="marq">
//           <marquee behavior="sliding" direction="up">
//             <p className="m">Spring Splash Sale - Up To 50% Off</p>
//           </marquee>
//         </div>

//         <a href="" className="top">
//           <div className="app">
//             <img className="appimg" src={app} alt="app" />
//             <span>Get App</span>
//           </div>
//           {/* <div className="separator">
//             <span>|</span>
//           </div> */}
//         </a>

//         <div className="separator">
//           <span>|</span>
//         </div>

//         <a href="" className="top">
//           <div className="loc">
//             <img className="appimg" src={loc} alt="app" />
//             <span>Store & Events</span>
//           </div>
//           {/* <div className="separator">
//             <span>|</span>
//           </div> */}
//         </a>

//         <div className="separator">
//           <span>|</span>
//         </div>

//         <a href="" className="top">
//           <div className="gift">
//             <img className="appimg" src={gift} alt="app" />
//             <span>Gift Card</span>
//           </div>
//           {/* <div className="separator">
//             <span>|</span>
//           </div> */}
//         </a>

//         <div className="separator">
//           <span>|</span>
//         </div>

//         <a href="" className="top">
//           <div className="help">
//             <img className="appimg" src={help} alt="app" />
//             <span>Help</span>
//           </div>
//         </a>
//       </div>

//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid p">
//           <a className="logo" href="#">
//             <img src={nykaa} alt="logo" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse n2" id="navbarSupportedContent">
//             <ul className="navbar-nav mb-2 mb-lg-0 ul">
//               <li className="nav-item f3">
//                 <a className="nav-link active f top f2" aria-current="page" href="#">
//                   Categories
//                 </a>
//               </li>
//               <li className="nav-item f3">
//                 <a className="nav-link active f top f2" href="#">
//                   Brands
//                 </a>
//               </li>
//               <li className="nav-item f3">
//                 <a className="nav-link active f top f2" href="">
//                   Luxe
//                 </a>
//               </li>
//               <li className="nav-item f3">
//                 <a className="nav-link active f top f2" href="">
//                   Nykaa Fashion
//                 </a>
//               </li>
//               <li className="nav-item f3">
//                 <a className="nav-link active f top f2" href="">
//                   Beauty Advice
//                 </a>
//               </li>
//             </ul>
//             <form className="hov" role="search">
//               <input
//                 className="me-2 in8"
//                 type="search"
//                 placeholder="Search on Nykaa"
//                 aria-label="Search"
//               />
//               {/* <button className="btn btn-outline-success" type="submit">
//                  <Link to='/login'> Sign in </Link>
//               </button> */}
//             </form>

//             <div className="bag">
//               <a href="">
//                 {" "}
//                 <img src={bag2} alt="bag" />{" "}
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
