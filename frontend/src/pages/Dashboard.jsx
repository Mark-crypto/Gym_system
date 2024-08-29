import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AdminNav } from "../components/AdminNav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Dashboard = () => {
  const [users, setUsers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, number, packages, password, confirmPassword } =
      registration;
    if (
      !fname ||
      !lname ||
      !email ||
      !number ||
      !packages ||
      !password ||
      !confirmPassword
    )
      return;
    if (password !== confirmPassword) return;
    const registrationData = registration;
    console.log("Form submitted");
    setRegistration({});
  };
  const handleInput = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const handleDelete = () => {
    let answer = window.confirm("Are you sure you want to delete?");
    if (answer) {
      console.log("deleted");
    } else {
      location.reload();
      alert("You have cancelled delete operation");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpen = () => setAdd(true);
  const handleHide = () => setAdd(false);
  return (
    <>
      <AdminNav />
      <h4>Admin Dashboard</h4>
      <button className="btn btn-primary" onClick={handleOpen}>
        Add user
      </button>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Status</th>
            <th>Packages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "black", fontWeight: "bold" }}>1</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Mark</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Otto</td>
            <td style={{ color: "blue", fontWeight: "bold" }}>
              otto@gmail.com
            </td>
            <td style={{ color: "orange", fontWeight: "bold" }}>25412345678</td>
            <td style={{ color: "green", fontWeight: "bold" }}>Active</td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              Weight Lifting
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleShow}>
                <FaRegEdit />
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={add} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
              <Form.Label htmlFor="photo">Profile photo (optional)</Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                placeholder="Profile photo"
                name="photo"
                id="photo"
                onChange={handleInput}
                value={registration.photo}
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleInput}
                value={registration.password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleInput}
                value={registration.confirmPassword}
              />
            </Form.Group>
            <p className="login-text">
              Have an account already? <a href="/login">Login</a>
            </p>
            <Button variant="primary" type="submit">
              <b> Register</b>
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
