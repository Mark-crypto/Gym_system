import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { RegisterValidation } from "../Schemas/RegisterValidation.js";

export const EditModal = ({ show, handleClose, edit, setShow }) => {
  //more imports
  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    packages: "",
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      packages: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      const { fname, lname, email, number, packages } = values;
      if (!fname || !lname || !email || !number || !packages)
        return toast.error("All fields are required");

      try {
        const submitForm = async () => {
          const registrationData = { ...registration };
          const res = await axios.put("/update", { registrationData });
          console.log(res.data);
        };
        // submitForm();
        toast.success("Form submitted successfully");
        edit(registration);
        setShow(false);
      } catch (error) {
        toast.error(error.response.data);
      }
    },
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="fname">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="fname"
                id="fname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
              />
              {formik.touched && formik.errors.fname ? (
                <small style={{ color: "red" }}>{formik.errors.fname}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="lname">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lname"
                id="lname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
              />
              {formik.touched && formik.errors.lname ? (
                <small style={{ color: "red" }}>{formik.errors.lname}</small>
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
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched && formik.errors.email ? (
                <small style={{ color: "red" }}>{formik.errors.email}</small>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="number">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="number"
                id="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
              {formik.touched && formik.errors.number ? (
                <small style={{ color: "red" }}>{formik.errors.number}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Label htmlFor="packages">Select Package:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="packages"
              value={formik.values.packages}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="packages"
            >
              <option value="weightLifting">Weight Lifting</option>
              <option value="aerobics">Aerobics</option>
              <option value="zumba">Zumba</option>
              <option value="karate">Karate</option>
              <option value="boxing">Boxing</option>
            </Form.Select>
            {formik.touched && formik.errors.packages ? (
              <small style={{ color: "red" }}>{formik.errors.packages}</small>
            ) : (
              ""
            )}

            <Button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <b> Edit</b>
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
