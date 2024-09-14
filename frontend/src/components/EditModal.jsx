import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

export const EditModal = ({ show, handleClose, edit, setShow }) => {
  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    packages: "",
  });

  const handleInput = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  //Handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, number, packages } = registration;
    if (!fname || !lname || !email || !number || !packages)
      return console.log("All fields are required");

    try {
      const submitForm = async () => {
        const registrationData = { ...registration };
        const res = await axios.put("/update", { registrationData });
        console.log(res.data);
      };
      // submitForm();
      console.log("Form submitted");
      setShow(false);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="fname">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="fname"
                id="fname"
                onChange={handleInput}
                value={registration.fname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="lname">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lname"
                id="lname"
                onChange={handleInput}
                value={registration.lname}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                onChange={handleInput}
                value={registration.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="number">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="number"
                id="number"
                onChange={handleInput}
                value={registration.number}
              />
            </Form.Group>
            <Form.Label htmlFor="packages">Select Package:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="packages"
              value={registration.packages}
              onChange={handleInput}
              id="packages"
            >
              <option value="weightLifting">Weight Lifting</option>
              <option value="aerobics">Aerobics</option>
              <option value="zumba">Zumba</option>
              <option value="karate">Karate</option>
              <option value="boxing">Boxing</option>
            </Form.Select>

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
