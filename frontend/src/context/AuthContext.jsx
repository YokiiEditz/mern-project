import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const API_URL = "http://localhost:3002/api/auth";

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // console.log("User context", userData);

  useEffect(() => {
    const myCookieToken = Cookies.get("access_token");
    // console.log("user-token", myCookieToken);

    if (myCookieToken) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    const response = await fetch(API_URL + "/profile", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      // console.log("user-data", data);
      setUserData(data);
    } else {
      console.log("User-data not fetched!");
    }
  };

  const contextValues = { userData, setUserData, fetchUserData };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
