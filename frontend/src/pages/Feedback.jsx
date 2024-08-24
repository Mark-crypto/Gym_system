import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      <div>
        <h4>Feedback Form</h4>
        <Form onSubmit={handleSubmit}>
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
            />
            <br />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
