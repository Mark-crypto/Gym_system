import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import gym from "../assets/fitness-equipment.jpg";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { LoginValidation } from "../Schemas/LoginValidation";
import { ErrorBoundary } from "./ErrorBoundary";
import { useFormik } from "formik";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  //Set state for error
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email || !password) return console.log("All fields are required");
    //Hashing our password
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const submitForm = async () => {
        const loginData = { ...login, password: hashedPassword };
        const res = await axios.post("/login", { loginData });
        console.log(res.data);
      };
      //submitForm();
      console.log("You are logged in");
      //clear form
      setLogin({});
    } catch (error) {
      console.log(error.response.status);
    }
  };

  //Check for errors
  if (error) {
    return (
      <>
        <ErrorBoundary />
      </>
    );
  }
  return (
    <>
      <div className="login-form">
        <Form onSubmit={handleSubmit} className="login">
          <p className="login-text">
            Ready to transform your health? Join our state-of-the-art gym and
            discover a supportive community focused on your success! Start your
            journey to a healthier, stronger you today—sign up now and see the
            difference!
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
              onChange={handleChange}
              value={login.email}
            />
            {/* {errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}{" "}
            <br /> */}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
              value={login.password}
            />
            {/* {errors.password && (
              <small style={{ color: "red" }}>{errors.password}</small>
            )} */}
          </Form.Group>
          <p className="login-text">
            Don't have an account?{" "}
            <a
              href="/registration"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Sign up
            </a>
          </p>
          <Button variant="primary" type="submit" className="login-btn">
            <b>Login</b>
          </Button>
        </Form>
        <img
          src={gym}
          alt="fitness equipment"
          style={{ width: "300px" }}
          className="login-img"
        />
      </div>
    </>
  );
};
