import React from "react"
import "./homepage.css"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import Main from "./Main"
import Card1 from './Card1';
import Title1 from './Title1';
import Title2 from './Title2';
import Title3 from './Title3';
import Title4 from './Title4';
import Cards2 from './Cards2';
import Footer from './Footer';
import Cards3 from './Cards3';
import Save from './Save';
import Card4 from './Card4';
// import Products from './Products';

const Homepage = ({setLoginUser}) => {


    // const keyword = match.params.keyword;

    return (
        <div> 
            {/* <Products /> */}
            {/* <h1>Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div> */}
            <Navbar setLoginUser={setLoginUser}/>
            <Navbar2 />
            <Main />
            <Card1 />
            <Title1 />
            <Cards2 />
            <Title2 />
            <Cards3 />
            <Title3  />
            <Save />
            <Title4 />
            <Card4 />
            <Footer />
        </div>
    )
}

export default Homepage 