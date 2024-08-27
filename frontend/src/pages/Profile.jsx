import React from "react";
import { useState } from "react";
import { UserNav } from "../components/UserNav";
import "./profile.css";
import defaultProfile from "../assets/default.jpg";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <UserNav />
      <h4>Profile</h4>
      <div className="profile">
        <div className="profile-top">
          <img src={defaultProfile} alt="profile" style={{ width: "200px" }} />
          <div className="details">
            <p>Full Name:</p>
            <p>Email Address:</p>
          </div>
        </div>
        <div className="profile-bottom">
          <h4 style={{ color: "blue", textDecoration: "underline" }}>
            User Details
          </h4>
          <p>End of subscription: </p>
          <p>Subscription Type: </p>
          <p>Subscription Status: </p>
        </div>
      </div>
    </>
  );
};
