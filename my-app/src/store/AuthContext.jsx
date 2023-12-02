import { createContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();
  const loginUser = (newUser) => {
    setUser(newUser);
    navigate("/");
  };
  const logOut = (newUser) => {
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ loginUser, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
