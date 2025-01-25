import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import PaymentValidation from "../Schemas/PaymentValidation";

const Payment = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    validationSchema: PaymentValidation,
  });
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

export default Payment;
