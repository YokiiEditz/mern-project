import { useEffect } from "react";
import { API_URL } from "../../context/AuthContext";

const Homepage = () => {
  const fetchUser = async () => {
    // e.preventDefault();

    const response = await fetch(API_URL + "/", {
      method: "POST",
      credentials: "include",
    });

    if (response) {
      // setUserData(null);
      console.log("User is logout");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      <p className="text-blue-600">This is a main page</p>
    </div>
  );
};

export default Homepage;
