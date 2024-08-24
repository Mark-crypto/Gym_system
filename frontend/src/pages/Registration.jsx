import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="login-form">
        <h4>Registration</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="fname">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="fname"
              id="fname"
              onChange={handleInput}
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
              placeholder="Enter phone number"
              name="number"
              id="number"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleInput}
            />
          </Form.Group>
          <p className="login-text">
            Have an account already? <a href="">Login</a>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};
