import React from "react";
import { Link } from "react-router-dom";

import logo from "./imgs/logo.jpg";
import "./css/nav.css";

export default function Navbar() {
  return (
    <div className="container-fluid" id="navbar">
      <Link to="/">
        <img
          src={logo}
          alt="logo-note"
          id="logoimg"
          className="border border-info rounded-circle col-1"
        />
      </Link>

      <div className="btn-group col-6 offset-md-1" role="group">
        <button type="button" className="btn btn-outline-info">
          <Link className="text-secondary" to="/">
            Home
          </Link>
        </button>

        <button type="button" className="btn btn-outline-info">
          <Link className="text-secondary" to="/tutorial">
            Tutorial
          </Link>
        </button>

        <button type="button" className="btn btn-outline-info">
          <Link className="text-secondary" to="/about">
            About us
          </Link>
        </button>

        <button type="button" className="btn btn-outline-info">
          <Link className="text-secondary" to="/contact">
            Contact
          </Link>
        </button>
      </div>

      <button className="btn btn-outline-info col-1 offset-md-2">
        <Link className="text-secondary" to="/login">
          Login
        </Link>
      </button>

      <button className="btn btn-outline-info col-1">
        <Link className="text-secondary" to="/register">
          Sign up
        </Link>
      </button>
    </div>
  );
}
