import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
// import {Search} from '../public/makeup/combine.json'
import search from "../combine.json";

import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from './Footer';
// import Homepage from './homepage/homepage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


// notation using which you can transport data


const Products = ({ setLoginUser }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [records, setRecords] = useState([data]);

  // allows you to perform side effects in your components.
  // What is the use of DOM in React?
  // The DOM (Document Object Model) represents the web page as a tree structure. Any piece of HTML that we write is added as a node, to this tree. With JavaScript, we can access any of these nodes (HTML elements) and update their styles, attributes, and so on.

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "/makeup/combine.json",
      // url: "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush",
      // url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
      // url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="mk">
      <Navbar setLoginUser={setLoginUser} />
      <Navbar2 />
      <input
        className="me-2 in8"
        type="text"
        placeholder="Search on Nykaa"
        aria-label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="products-container">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>{" "}
          </div>
        )}

        {data
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.product_type.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              // else if(val.brand.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          })
          .map((product) => (
            <div key={product.id} className="card">
              <div className="prod">
                <img src={product.image_link} alt="#" />
                {/* <img src={product.image} alt="#" /> */}
              </div>
              <div className="card-description">
                <h6>{product.title}</h6>
                <h6>{`Price: ${product.price}$`}</h6>
                <h6>{`Brand: ${product.brand}`}</h6>
                <div className="b">
                  <Link to="/">Add to Cart</Link>
                </div>
                {/* <h6>{`Description: ${product.description}`}</h6> */}
              </div>
            </div>
          ))}
          <Footer />
      </div>
    </div>
  );
};

export default Products;
