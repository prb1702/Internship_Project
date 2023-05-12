import './App.css';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom";
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './components/homepage/Products'
import Skin from './components/homepage/skin/Skin'
import Hair from './components/homepage/Hair'

function App() {

  const [ user, setLoginUser ] = useState({})

  return (
    <div className='App'>

      <Router>
        <Routes>
          
          <Route 
            exact 
            path='/' 
            element={
              user && user._id
              ?
              <Homepage setLoginUser={setLoginUser}/>
              :
              <Login setLoginUser={setLoginUser} />
            } 
          />
          <Route 
            path='/login' 
            element={<Login setLoginUser={setLoginUser}/>} 
          />
          <Route 
            path='/register' 
            element={<Register />} 
          />
          <Route 
            path='/products'
            element={<Products setLoginUser={setLoginUser}/>}
          />
          <Route 
            path='/skin'
            element={<Skin setLoginUser={setLoginUser}/>}
          />
          <Route 
            path='/hair'
            element={<Hair setLoginUser={setLoginUser}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import './App.css';
// import Homepage from './components/homepage/homepage'
// import Login from './components/login/login'
// import Register from './components/register/register'
// import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom";
// import React, {useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function App() {

//   const [ user, setLoginUser ] = useState({})

//   return (
//     <div className='App'>

//       <Router>
//         <Routes>

//           <Route 
//             exact 
//             path='/' 
//             element={
//               user && user._id
//               ?
//               <Homepage setLoginUser={setLoginUser}/>
//               :
//               <Login setLoginUser={setLoginUser} />
//             } 
//           />
//           <Route 
//             path='/login' 
//             element={<Login setLoginUser={setLoginUser} />} 
//           />
//           <Route 
//             path='/register' 
//             element={<Register />} 
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
