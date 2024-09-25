import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { RegisterValidation } from "../Schemas/RegisterValidation.js";

export const AddModal = ({ add, setAdd }) => {
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
  });
  //Close our modal
  const handleHide = () => setAdd(false);

  //Submit our form
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fname,
      lname,
      email,
      number,
      packages,
      confirmPassword,
      image,
      password,
    } = formik.values;

    //Error handling
    if (!fname || !lname || !email || !number || !packages || !password)
      return toast.error("All fields are required");
    if (password !== confirmPassword)
      return toast.error("Passwords must match");

    //Hashing passwords
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const registrationData = {
      ...formik.values,
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
        toast.error(error.response.data);
      }
    };
    console.log(registrationData);
    //submitForm();
    setAdd(false);
    toast.success("User added successfully");
    setRegistration("");
  };

  return (
    <>
      <Modal show={add} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
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
              />{" "}
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
              <Form.Label htmlFor="photo">
                Profile photo <span style={{ color: "red" }}>(optional)</span>
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                placeholder="Profile photo"
                name="photo"
                id="photo"
                onChange={formik.handleChange}
                value={formik.values.photo}
              />
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
                packages
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
              onBlur={formik.handleBlur}
              value={formik.values.packages}
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
              <small style={{ color: "red" }}>{formik.errors.packages}</small>
            ) : (
              ""
            )}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <small style={{ color: "red" }}>{formik.errors.password}</small>
              ) : (
                ""
              )}{" "}
              <br />
              <Form.Text className="text-muted">
                The password must contain:
                <ul>
                  <li>a lowercase letter</li>
                  <li>an uppercase letter</li>
                  <li>a number</li>
                  <li>a special character</li>
                  <li>at least 8 characters long</li>
                </ul>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <small style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </small>
              ) : (
                ""
              )}
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <b> Add User</b>
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
