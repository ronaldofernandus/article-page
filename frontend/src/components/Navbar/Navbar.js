import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const [status, setStatus] = useState(loginStatus);

  const navigation = useNavigate;

  const loginHandler = () => {
    loginCbHandler(true);
    navigation("/Login");
  };
  const logoutHandler = () => {
    loginCbHandler(false);
    navigation("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="navbar-brand" to="#">
          Sport Interactive
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            {loginStatus ? (
              <button
                onClick={() => logoutHandler()}
                type="button"
                class="btn btn-primary"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginHandler()}
                type="button"
                class="btn btn-primary"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
