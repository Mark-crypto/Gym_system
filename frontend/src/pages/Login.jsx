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
    </>
  );
};
