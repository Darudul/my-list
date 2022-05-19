import React from "react";
import { useLocation, useNavigate } from "react-router";
import auth from "./firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return "Loading..";
  }
  return (
    <div>
      <h4>This is log in</h4>
      <button
        onClick={() => signInWithGoogle()}
        className="mt-5 bg-primary border-0 p-2 rounded fw-bold text-white"
      >
        Google login
      </button>
    </div>
  );
};

export default Login;
