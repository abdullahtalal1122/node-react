import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON data
      localStorage.setItem("token", data.Token);
      alert("LoggedIn");
    } else {
      alert("There was some Error");
    }
  };

  return (
    <div className="container">
      <div>
        <i
          className="fa-solid fa-user-doctor icon fa-10x"
          style={{ color: "#8d448b" }}
        ></i>
      </div>
      <div>
        <h1>Have an account?</h1>
      </div>
      <form className="form" onSubmit={loginHandle}>
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
            <a href="#">Forgot Password</a>
          </p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
