const Signupform = (props) => {
  return (
    <form onSubmit={props.signinHandle} className="form">
      <input
        className="form-item"
        type="email"
        placeholder="Email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <input
        className="form-item"
        type="password"
        placeholder="Password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <div className="text">
        <p>
          <a href="#">Already have an account?</a>
        </p>
      </div>
      <button className="button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Signupform;
