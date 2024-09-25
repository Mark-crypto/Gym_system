import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import gym from "../assets/fitness-equipment.jpg";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { LoginValidation } from "../Schemas/LoginValidation";
import { ErrorBoundary } from "./ErrorBoundary";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (!email || !password) return toast.error("All fields are required");
    if (formik.errors.email || formik.errors.password)
      return toast.error("Fill in the form correctly");
    //Hashing our password
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const submitForm = async () => {
        const login = { ...formik.values, password: hashedPassword };
        const response = await axios.post("/login", { login });
        console.log(response.data);
      };
      //submitForm();
      toast.success("You are logged in");
      //clear form
      setLogin("");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  //Set state for error
  const [error, setError] = useState(false);

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
      <ToastContainer />
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
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <small style={{ color: "red" }}>{formik.errors.email}</small>
            ) : (
              ""
            )}
            <br />
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
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            ) : (
              ""
            )}
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
