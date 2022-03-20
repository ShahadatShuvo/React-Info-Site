import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/Group.svg";

function Navbar(props) {
  return (
    //  navbar section
    <nav
      className={
        props.darkMode
          ? "navbar navbar-expand-lg navbar-dark bg-dark"
          : "navbar navbar-expand-lg navbar-light bg--lightMode"
      }
    >
      <div className="container">
        <img src={logo} className="me-md-3" alt="" />
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          ReactFacts
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item pt-2 ms-md-5">
              <span className={props.darkMode ? "text-light" : "text-dark"}>
                Light
              </span>
              <button
                type="button"
                // className="btn btn-sm btn-toggle"
                className={
                  props.darkMode
                    ? "btn btn-sm btn-toggle active"
                    : "btn btn-sm btn-toggle"
                }
                data-toggle="button"
                aria-pressed="false"
                // autocomplete="off"
                onClick={props.toggleDarkMode}
              >
                <div className="handle"></div>
              </button>
              <span className={props.darkMode ? "text-light" : "text-dark"}>
                dark
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
