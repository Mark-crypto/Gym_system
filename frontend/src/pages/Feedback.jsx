import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { UserNav } from "../components/UserNav";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FeedbackValidation } from "../Schemas/FeedbackValidation.js";
import axios from "axios";
import { toast } from "react-toastify";

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
    onSubmit: (values) => {
      const { name, email, number, message } = values;
      if (!name || !email || !number || !message)
        return toast.error("All fields are required");
      const feedback = values;
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
    },
  });

  return (
    <>
      <UserNav />
      <div>
        <Form onSubmit={formik.handleSubmit} className="feedback-form">
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
            {formik.touched && formik.errors.name ? (
              <small style={{ color: "red" }}>{formik.errors.name}</small>
            ) : (
              ""
            )}
          </Form.Group>
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
            {formik.touched && formik.errors.email ? (
              <small style={{ color: "red" }}>{formik.errors.email}</small>
            ) : (
              ""
            )}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
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
            {formik.touched && formik.errors.number ? (
              <small style={{ color: "red" }}>{formik.errors.number}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
          {formik.touched && formik.errors.message ? (
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
