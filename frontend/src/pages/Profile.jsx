import React from "react";
import { useState } from "react";
import { UserNav } from "../components/UserNav";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <UserNav />
      <h4>Profile</h4>
      <div>
        <img src="" alt="profile" />
        <h4>Full Name</h4>
        <p>Email Address</p>
      </div>
      <div>
        <h4>User Details</h4>
      </div>
    </>
  );
};
