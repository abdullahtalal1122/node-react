import React, { useState } from "react";

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8000/api/v1/users/", {
      method: "GET",
      headers: { Authorization: token },
    });

    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    } else {
      console.error("Error fetching user data");
    }
  };

  fetchUserData();

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <p>{userData}</p>
      </div>
    </div>
  );
};

export default HomePage;
