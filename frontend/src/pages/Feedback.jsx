import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.css";
import { UserNav } from "../components/UserNav";

export const Feedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
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
              name="email"
              id="email"
              onChange={handleInput}
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
