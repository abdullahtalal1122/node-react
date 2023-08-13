import { React, useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandle = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:8000/api/v1/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      }
    );

    if (response.ok) {
      alert("Registered!!");
    } else {
      alert("There was some error");
    }
  };
  return (
    <div className="container">
      <div>
        <i
          className="fa-solid fa-user-doctor icon fa-10x"
          style={{ color: "#8d448b", paddingLeft: "120px" }}
        ></i>
      </div>
      <div>
        <h1>Wanna Register?</h1>
      </div>
      <form onSubmit={signinHandle} className="form">
        <input
          className="form-item"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-item"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default Signup;
