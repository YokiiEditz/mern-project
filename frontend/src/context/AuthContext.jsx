import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const API_URL = "http://localhost:3002/api/auth";

export const API_URL2 = "http://localhost:3002/api/admin";

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  const contextValues = { userData, setUserData, adminData, setAdminData };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
