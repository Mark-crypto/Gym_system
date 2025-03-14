import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserNav } from "../components/UserNav";
import "./profile.css";
import defaultProfile from "../assets/default.jpg";
import axios from "axios";
// import { useAuthStore } from "../store/store";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const setUserEmail = useAuthStore((state) => console.log(state.setAuth));
  //  const email = useAuthStore((state) => state.auth.email);
  // setUserEmail();
  // const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const response = await axios(
          `http://localhost:5000/profile/test@test.com`
        );

        console.log(response.data);
        setProfile(response.data);
        setIsLoading(false);
      };
      fetchProfile();
      //console.log("Form submitted");
    } catch (error) {
      console.log(error.response.status);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      <UserNav />
      <h4>Profile</h4>
      <div className="profile">
        <div className="profile-top">
          <img src={defaultProfile} alt="profile" style={{ width: "200px" }} />
          <div className="details">
            <p>
              Full Name: {profile.fname} {profile.lname}
            </p>
            <p>Email Address:{profile.email}</p>
          </div>
        </div>
        <div className="profile-bottom">
          <h4 style={{ color: "blue", textDecoration: "underline" }}>
            User Details
          </h4>
          <p>End of subscription: 12/12/25</p>
          <p>Subscription Type: {profile.packages} </p>
          <p>Subscription Status: {profile.status}</p>
        </div>
      </div>
    </>
  );
};
