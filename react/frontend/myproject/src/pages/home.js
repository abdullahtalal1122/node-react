import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
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
        const errorData = await response.json();
        console.error("Error fetching user data:", errorData.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {userData ? <p>Secrets : {userData.massege}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default HomePage;
