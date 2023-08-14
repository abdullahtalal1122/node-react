import React, { useState } from "react";
import Form from "./Loginform";
import Loginform from "./Loginform";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Top />
      <div className="items item-2">
        <Loginform
          loginHandle={loginHandle}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>

      <Bottom />
      <div className="items item-4">
        <p>
          Wanna register? <a href="#">Sign up here!</a>
        </p>
      </div>
    </div>
  );
};

const Top = () => {
  return (
    <div className="items item-1">
      <h1>LOGIN</h1>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="items item-3">
      <p>Or sign in with!</p>

      <button className="item-3-buttons">
        <img src="facebook.png" width="10px" alt=""></img> Facbook{" "}
      </button>
      <button className="item-3-buttons">
        <img src="images.png" width="10px" alt=""></img> Google
      </button>
    </div>
  );
};
export default Login;
