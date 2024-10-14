import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const API_URL = "http://localhost:3002/api/auth";

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const contextValues = { userData, setUserData };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
