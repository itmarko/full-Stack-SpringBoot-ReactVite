// src/Private/PrivateRouter.jsx
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;
