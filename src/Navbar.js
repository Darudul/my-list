import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="mt-5">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Home
        </Link>
        <Link to="/login" class="navbar-brand">
          Google Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
