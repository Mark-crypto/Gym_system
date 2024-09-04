import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { UserNav } from "../components/UserNav";
import { useEffect, useState } from "react";

export const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, message } = feedback;
    if (!name || !email || !number || !message) return;
    const feedbackData = feedback;
    console.log("Submit");
    setFeedback({});
  };
  const handleInput = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };
  return (
    <>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="name">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              onChange={handleInput}
              value={feedback.name}
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
              value={feedback.email}
            />
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
              onChange={handleInput}
              value={feedback.number}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="number">Message</Form.Label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={handleInput}
              className="message"
              value={feedback.message}
            />
            <br />
          </Form.Group>
          <Button variant="primary" type="submit" className="feedback-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
