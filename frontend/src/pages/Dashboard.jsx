import Table from "react-bootstrap/Table";
import { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AdminNav } from "../components/AdminNav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bcrypt from "bcryptjs";

export const Dashboard = () => {
  const [users, setUsers] = useState({});
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [del, setDel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const confirmRef = useRef("");

  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    photo: "",
    email: "",
    number: "",
    packages: "",
    password: "",
  });
  //Handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, number, packages, password } = registration;
    if (!fname || !lname || !email || !number || !packages || !password) return;
    const confirmPassword = confirmRef.current.confirmPassword;
    if (password !== confirmPassword) return;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const submitForm = async () => {
      const registrationData = { ...registration, password: hashedPassword };
      const results = await fetch("http://localhost:3000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
      const responseJson = await results.json();
      console.log(responseJson);
    };
    submitForm();
    console.log("Form submitted");
    setRegistration({});
  };
  const handleInput = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const handleDelete = () => {
    if (del) {
      const deleteData = async () => {
        const results = await fetch("http://localhost:3000/delete", {
          method: "DELETE",
        });
        const responseJson = await results.json();
        console.log(responseJson);
      };
      setDel(false);
      deleteData();
      console.log("deleted");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowDel = () => setDel(true);
  const handleCloseDel = () => setDel(false);

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
              <button className="btn btn-danger" onClick={handleShowDel}>
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={del} onHide={handleCloseDel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDel}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
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
      <Modal show={add} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="number">
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
                ref={confirmRef}
              />
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
