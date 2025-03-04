import { Navigate } from "react-router-dom";
import React from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authToken = localStorage.getItem("authToken"); // Check if token exists

  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;