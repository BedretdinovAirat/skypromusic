import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import React from "react";
export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user } = React.useContext(AuthContext);
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
