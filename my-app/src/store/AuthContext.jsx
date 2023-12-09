import { createContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

function getAuthFromLocalStorage() {
  try {
    const newAuth = JSON.parse(localStorage.getItem("auth"));
    return newAuth;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export function AuthProvider({ children }) {

  const navigate = useNavigate();
  const [user, setUser] = React.useState(getAuthFromLocalStorage());

  const loginUser = (newUser) => {
    setUser(newUser);
    navigate("/");
    localStorage.setItem("auth", JSON.stringify(newUser));
    const value = localStorage.getItem("auth");
    console.log(JSON.parse(value));
  };
  const logOut = (newUser) => {
    setUser(null);
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ loginUser, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
