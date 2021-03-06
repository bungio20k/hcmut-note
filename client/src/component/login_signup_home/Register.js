import React from "react";
import Navbar from "./Navbar";
import "./css/login-signup.css";
import { Link } from "react-router-dom";
import illus from "./imgs/illustrate.jpg";
import Footer from "../footer/Footer";

export default function Register() {
  return (
    <div className="all">
      <div className="header-body">
        <div className="Nav">
          <Navbar />
        </div>
        <hr className="text-info" />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4" id="left">
              <h2>Create an account</h2>
              <h5 id="logintext"> Let's set up your account</h5>
              <form action='/register' method='post'>
                <div>
                  <input
                    type="text"
                    id="a"
                    placeholder="Username"
                    name="user"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    id="b"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>

                <div>
                  <input type="checkbox" id="checkbox" required/>I accept the
                  <a href="http://dontpad.com/hcmut-note-TaS">
                    {" "}
                    Terms of Service and Privacy
                  </a>
                </div>
                <input type="submit" value="Sign up now" id="subbutton"/>
                <hr />
              </form>
              <div>
                Already have an account?
                <Link to="/login" id="loginbt">
                  Login here
                </Link>
              </div>
            </div>

            <img src={illus} className="col-7"></img>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
