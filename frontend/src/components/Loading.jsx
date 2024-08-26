import React from "react";
import loading from "../assets/Loading.gif";
import "../index.css";

export const Loading = () => {
  return (
    <>
      <div className="loading">
        <img src={loading} alt="loading..." />
      </div>
      <h4
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "30px",
          color: "orange",
        }}
      >
        Loading...
      </h4>
    </>
  );
};
