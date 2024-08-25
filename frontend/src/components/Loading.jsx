import React from "react";
import loading from "../assets/Loading.gif";

export const Loading = () => {
  return (
    <>
      <div>
        <img src={loading} alt="loading..." />
        <h4>Loading</h4>
      </div>
    </>
  );
};
