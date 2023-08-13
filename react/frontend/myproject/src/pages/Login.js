import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const loginHandle = async (event) => {
    event.preventDefault();

    if (email && password) {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (response.ok) {
        localStorage.setItem("token", "");

        const data = await response.json(); // Parse the JSON data

        if (data.massege === "User not found") {
          alert(data.massege);
          return;
        }

        localStorage.setItem("token", data.Token);
        alert("LoggedIn");
      } else {
        alert("There was some Error");
      }
    } else {
      console.log("ENTER EMAIL AND PASSWORD");
    }
  };

  return (
    <div className="containers">
      <div className="items item-1">
        <h1>LOGIN</h1>
      </div>
      <div className="items item-2">
        <form onSubmit={loginHandle}>
          <div>
            <input
              className="forms-item form-item-1"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
            <input
              className="forms-item form-item-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FontAwesomeIcon icon={faLock} className="icons" />
          </div>
          <div className="bottom">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="items item-3">
        <p>Or sign in with!</p>

        <button className="item-3-buttons">
          <img src="facebook.png" width="10px" alt=""></img> Facbook{" "}
        </button>
        <button className="item-3-buttons">
          <img src="images.png" width="10px" alt=""></img> Google
        </button>
      </div>
      <div className="items item-4">
        <p>
          Wanna register? <a href="#">Sign up here!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
