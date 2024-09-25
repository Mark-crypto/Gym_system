import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { UserNav } from "../components/UserNav";
import { useState } from "react";
import { useFormik } from "formik";
import { FeedbackValidation } from "../Schemas/FeedbackValidation.js";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    validationSchema: FeedbackValidation,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = formik.values;

    if (!name || !email || !number || !message)
      return toast.error("All fields are required");
    if (
      formik.errors.email ||
      formik.errors.message ||
      formik.errors.name ||
      formik.errors.number
    ) {
      return toast.error("Fill the form correctly");
    }
    const feedback = { ...formik.values };
    try {
      const submitFeedback = async () => {
        const response = await axios.post("/feedback", { feedback });
        console.log(response.data);
      };
      // submitFeedback()
      toast.success("Form successfully submitted");
      setFeedback("");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <UserNav />
      <div>
        <Form onSubmit={handleSubmit} className="feedback-form">
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Feedback Form
          </h4>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <small style={{ color: "red" }}>{formik.errors.name}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>{" "}
            <br />
            {formik.touched.email && formik.errors.email ? (
              <small style={{ color: "red" }}>{formik.errors.email}</small>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="number">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              name="number"
              id="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number ? (
              <small style={{ color: "red" }}>{formik.errors.number}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="number">Message</Form.Label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={formik.handleChange}
              className="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            <br />
          </Form.Group>
          {formik.touched.message && formik.errors.message ? (
            <small style={{ color: "red" }}>{formik.errors.message}</small>
          ) : (
            ""
          )}
          <Button variant="primary" type="submit" className="feedback-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
