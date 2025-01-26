import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import PaymentValidation from "../Schemas/PaymentValidation";
import { UserNav } from "../components/UserNav";

const Payment = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      amount: "",
      packages: "",
      period: "",
    },
    validationSchema: PaymentValidation,
  });
  const handleSubmit = () => {
    try {
      const submitForm = async () => {
        const response = await axios.post(
          "http://localhost:5000/payment",
          formik.values
        );
        if (response.status === 200) {
          toast.success(response.data.message);
        } else {
          toast.error("Failed to submit");
        }
      };
      submitForm();
    } catch (error) {
      toast.error("Failed to submit");
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
            Payment Form
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
            <Form.Label htmlFor="number">Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              name="amount"
              id="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <small style={{ color: "red" }}>{formik.errors.amount}</small>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Label htmlFor="packages">Select Package:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="packages"
            value={formik.values.packages}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="packages"
          >
            <option style={{ fontWeight: "bold" }}>Choose an option</option>
            <option value="weightLifting">Weight Lifting</option>
            <option value="aerobics">Aerobics</option>
            <option value="zumba">Zumba</option>
            <option value="karate">Karate</option>
            <option value="boxing">Boxing</option>
          </Form.Select>
          {formik.touched.packages && formik.errors.packages ? (
            <small style={{ color: "red", display: "flex" }}>
              {formik.errors.packages}
            </small>
          ) : (
            ""
          )}
          <Form.Label htmlFor="period" className="mt-3">
            Subscription Period:
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="period"
            value={formik.values.period}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="period"
          >
            <option style={{ fontWeight: "bold" }}>Choose an option</option>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </Form.Select>
          {formik.touched.period && formik.errors.period ? (
            <small style={{ color: "red" }}>{formik.errors.period}</small>
          ) : (
            ""
          )}
          <Button variant="primary" type="submit" className="mt-3 feedback-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Payment;
