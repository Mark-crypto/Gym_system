import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, number, packages } = formik.values;
    if (!fname || !lname || !email || !number || !packages) {
      return toast.error("All fields are required");
    }
    if (
      formik.errors.email ||
      formik.errors.fname ||
      formik.errors.lname ||
      formik.errors.number ||
      formik.errors.packages
    )
      return toast.error("Fill in the form correctly");
    const data = { ...formik.values };
    try {
      const editData = async () => {
        const response = await axios.put("/edit", data);
        if (response.status === 200) {
          console.log("edited");
        }
      };
      //editData();
      setShow(false);
    } catch (error) {
      toast.error(error.response.data);
    }
    toast.success("You have successfully edited a record");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
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
              {formik.touched.fname && formik.errors.fname ? (
                <small style={{ color: "red" }}>{formik.errors.fname}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
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
              {formik.touched.lname && formik.errors.lname ? (
                <small style={{ color: "red" }}>{formik.errors.lname}</small>
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
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
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
                placeholder="Enter phone number"
                name="number"
                id="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
              {formik.touched.number && formik.errors.number ? (
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
              <option style={{ fontWeight: "bold" }}>Choose option</option>
              <option value="weightLifting">Weight Lifting</option>
              <option value="aerobics">Aerobics</option>
              <option value="zumba">Zumba</option>
              <option value="karate">Karate</option>
              <option value="boxing">Boxing</option>
            </Form.Select>
            {formik.touched.packages && formik.errors.packages ? (
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
