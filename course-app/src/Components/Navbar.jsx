import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white">
        <div className="container navbar justify-content-between">
          <div className="navbar-brand ">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
          </div>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Subscribe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link "
                to="/learning-paths"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learning Paths
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Forum</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item member">
              <Link className="nav-link">Member Area</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
