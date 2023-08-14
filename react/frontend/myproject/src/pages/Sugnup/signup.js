import { React, useState } from "react";
import Signupform from "./Signupform";
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
      <Signupform
        email={email}
        setEmail={setEmail}
        password={setPassword}
        signinHandle={signinHandle}
      />
    </div>
  );
};

export default Signup;
