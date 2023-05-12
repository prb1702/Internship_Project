import React from "react";
import main from "./main.png";
import "./Main.css";
import styled from "styled-components";

export default function Main() {
  // const Main = styled.div`
  //   .img {
  //     position: relative;
  //     top: 20%;

  //     img {
  //       height: 50.7vh;
  //       width: 100%;
  //     }

  //   }

    
  // `;

  return (
    <div className="img">
      <img src={main} alt="main" />
    </div>
  );
}
