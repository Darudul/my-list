import { signOut } from "@firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav class="mt-5">
      <div class="container-fluid">
        <Nav>
          <Nav.Link as={Link} to="/" className=" h6 ms-5">
            Home
          </Nav.Link>
          <Nav>
            {user ? (
              <button
                className="fw-bold border-0 border rounded-pill px-3 py-2"
                onClick={logout}
              >
                Log out
              </button>
            ) : (
              <Nav.Link
                className="fw-bold px-3 py-2 border rounded-pill"
                eventKey={2}
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Nav>
      </div>
    </nav>
  );
};

export default Navbar;
