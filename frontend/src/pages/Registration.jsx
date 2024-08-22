import React from "react";

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
      <form onSubmit={handleSubmit}>
        <h4>Registration</h4>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" onChange={handleInput} />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" onChange={handleInput} />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" onChange={handleInput} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInput}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleInput}
        />
        <label htmlFor="goal">Goal</label>
        <select name="goal" id="goal" onChange={handleInput}>
          <option value="weightLoss">Weight Loss</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
