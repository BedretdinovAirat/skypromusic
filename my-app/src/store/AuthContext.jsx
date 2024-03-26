import { createContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsShuffled, pauseTrack, playTracks } from "./TracksSlice";
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
  const dispatch = useDispatch();
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
    dispatch(playTracks(false));
    dispatch(pauseTrack(false));
    dispatch(changeIsShuffled(false));
  };
  return (
    <AuthContext.Provider value={{ loginUser, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
