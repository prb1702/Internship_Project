import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Hair = ({ setLoginUser }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "/hair/combine.json",
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
    <dic className="mk">
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
            }
            // else if(val.product_type.toLowerCase().includes(searchTerm.toLowerCase())){
            else if (
              val.brand.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((product) => (
            <div key={product.id} className="card">
              <div className="prod">
                <img src={product.image} alt="#" />
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
    </dic>
  );
};

export default Hair;
