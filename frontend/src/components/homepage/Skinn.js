import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Skin.css";
// import {Search} from './'

import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const Skin = ({setLoginUser}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "/skin/combine.json",
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

  return (
    <dic className="mk">
      {/* <Navbar /> */}
      <Navbar setLoginUser={setLoginUser}/>
      <Navbar2 />
      <div className="products-container">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>{" "}
          </div>
        )}

        {data.map((product) => (
          <div key={product.id} className="card">
            <div className="prod">
              <img src={product.image} alt="#" />
              {/* <img src={product.image} alt="#" /> */}
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}$`}</h6>
              <h6>{`Brand: ${product.brand}`}</h6>
              {/* <h6>{`Description: ${product.description}`}</h6> */}
            </div>
          </div>
        ))}
      </div>
    </dic>
  );
};

export default Skin;
