import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" style={{ fontSize: "1.5rem" }} to="/">
          FD-TECHNOLOGIES
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-3" id="navbarColor01">
          <ul className="navbar-nav ml-auto ">
            {/* float-right */}

            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/works">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
        <Link className="nav-link" to="/heroes">Heroes</Link>
      </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
