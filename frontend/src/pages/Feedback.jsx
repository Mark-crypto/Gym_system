import React from "react";

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
      <form onSubmit={handleSubmit}>
        <h4>Feedback Form</h4>
        <label htmlFor="fullname">Full Name</label>
        <br />
        <input
          type="text"
          name="fullname"
          id="fullname"
          onChange={handleInput}
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input type="email" name="email" id="email" onChange={handleInput} />
        <br />
        <label htmlFor="number">Phone Number</label>
        <br />
        <input type="text" name="number" id="number" onChange={handleInput} />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={handleInput}
        />
        <br />
        <button type="submit">Submit</button>
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
