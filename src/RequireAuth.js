import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useAuth, Navigate } from "react-router";
import auth from "./firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return "Loading..";
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
