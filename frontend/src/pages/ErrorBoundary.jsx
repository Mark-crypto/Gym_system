import React from "react";
import "../index.css";
import houston from "../assets/houston.jpg";

export const ErrorBoundary = () => {
  return (
    <>
      <div className="error">
        <img src={houston} alt="Error404" />
        <div className="error-text">
          <p>
            <b>
              It is not you, it is us. An error has occurred on this page. Click
              the button below.{" "}
            </b>
          </p>
          <a href="/">
            <button type="button">Home page</button>
          </a>
        </div>
      </div>
    </>
  );
};
