import "./registration.css";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { RegistrationForm } from "../registration/RegistrationForm";
import axios from "axios";

export const Registration = () => {
  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    photo: "",
    email: "",
    number: "",
    packages: "",
    password: "",
    confirmPassword: "",
  });

  //Send to data to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, number, packages, password, confirmPassword } =
      registration;

    if (
      !fname ||
      !lname ||
      !email ||
      !number ||
      !packages ||
      !password ||
      !confirmPassword
    )
      return console.log("All fields are required");

    if (password !== confirmPassword)
      return console.log("Passwords do not match");

    //Hashing our password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const registrationData = {
      ...registration,
      password: hashedPassword,
      confirmPassword: "",
    };

    //change to use axios for better error handling
    const submitForm = async () => {
      try {
        const formData = await axios.post("/registration", {
          registrationData,
        });
        console.log(formData);
      } catch (error) {
        console.log(error.response.status);
      }
    };
    //submitForm();
    setRegistration({});
  };

  //Taking in form input
  const handleInput = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="registration-form">
        <h4
          style={{
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Registration
        </h4>
        <RegistrationForm
          handleSubmit={handleSubmit}
          registration={registration}
          handleInput={handleInput}
        />
      </div>
    </>
  );
};
