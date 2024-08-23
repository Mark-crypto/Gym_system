import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h4>GYM BROS</h4>
        <label htmlFor="email">Email Address</label>
        <br />
        <input type="email" name="email" id="email" onChange={handleInput} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInput}
        />{" "}
        <br />
        <button type="submit" className="login-btn">
          Login
        </button>{" "}
        <br />
        <p className="login-text">
          Don't have an account? <a href="">Sign up</a>
        </p>
      </form>

      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
