import "./registration.css";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { RegistrationForm } from "../registration/RegistrationForm";
import axios from "axios";
import { useFormik } from "formik";
import { RegisterValidation } from "../Schemas/RegisterValidation.js";
import { toast } from "react-toastify";

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

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      photo: "",
      email: "",
      number: "",
      packages: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      const {
        fname,
        lname,
        email,
        number,
        packages,
        password,
        confirmPassword,
      } = values;

      if (
        !fname ||
        !lname ||
        !email ||
        !number ||
        !packages ||
        !password ||
        !confirmPassword
      )
        return toast.error("All fields are required");

      if (password !== confirmPassword)
        return toast.error("Passwords do not match");

      //Hashing our password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const registration = {
        ...values,
        password: hashedPassword,
        confirmPassword: "",
      };

      //change to use axios for better error handling
      const submitForm = async () => {
        try {
          const formData = await axios.post("/registration", {
            registration,
          });
          console.log(formData);
        } catch (error) {
          toast.error(error.response.data);
        }
      };
      //submitForm();
      toast.success("You have successfully registered");
      setRegistration("");
    },
  });

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
          handleSubmit={formik.handleSubmit}
          values={formik.values}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
        />
      </div>
    </>
  );
};
