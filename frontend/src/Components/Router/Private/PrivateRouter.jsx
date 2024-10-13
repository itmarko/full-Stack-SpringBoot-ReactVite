// src/Private/PrivateRoute.jsx
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log("Is authenticated:", isAuthenticated); // Add this line

  return isAuthenticated ? <Outlet /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;
