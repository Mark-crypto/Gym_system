import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const RegistrationForm = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fname">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="fname"
            id="fname"
            onChange={handleChange}
            value={values.fname}
            onBlur={handleBlur}
          />
          {touched.fname && errors.fname ? (
            <small style={{ color: "red" }}>{errors.fname}</small>
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
            onChange={handleChange}
            value={values.lname}
            onBlur={handleBlur}
          />
          {touched.lname && errors.lname ? (
            <small style={{ color: "red" }}>{errors.lname}</small>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="photo">Profile photo (optional)</Form.Label>
          <Form.Control
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            placeholder="Profile photo"
            name="photo"
            id="photo"
            onChange={handleChange}
            value={values.photo}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <small style={{ color: "red" }}>{errors.email}</small>
          ) : (
            ""
          )}{" "}
          <br />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="number">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="number"
            id="number"
            onChange={handleChange}
            value={values.number}
            onBlur={handleBlur}
          />
          {touched.number && errors.number ? (
            <small style={{ color: "red" }}>{errors.number}</small>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Label htmlFor="packages">Select Package:</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="packages"
          value={values.packages}
          onBlur={handleBlur}
          onChange={handleChange}
          id="packages"
        >
          <option style={{ fontWeight: "bold" }}>Choose an option</option>
          <option value="weightLifting">Weight Lifting</option>
          <option value="aerobics">Aerobics</option>
          <option value="zumba">Zumba</option>
          <option value="karate">Karate</option>
          <option value="boxing">Boxing</option>
        </Form.Select>
        {touched.packages && errors.packages ? (
          <small style={{ color: "red" }}>{errors.packages}</small>
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
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <small style={{ color: "red" }}>{errors.password}</small>
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
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <small style={{ color: "red" }}>{errors.confirmPassword}</small>
          ) : (
            ""
          )}
        </Form.Group>
        <p className="login-text">
          Have an account already? <a href="/login">Login</a>
        </p>
        <Button variant="primary" type="submit" className="registration-btn">
          <b> Register</b>
        </Button>
      </Form>
    </>
  );
};
