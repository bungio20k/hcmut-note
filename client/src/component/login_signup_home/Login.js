import React, { useState } from "react";
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";

import "./css/login-signup.css";
import illus from "./imgs/illustrate.jpg";
import Footer from "../footer/Footer";

export default function Login(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('/login', {
      user: user,
      password: password,
    });

    if (response.data.token != 'not found') {
      localStorage.setItem('token', response.data.token);
      props.setToken(response.data.token);
    }
    else {
      alert('User not found or wrong password!');
    }
  }
  if (!props.token)
  return (
    <div className="all">
      <div className="header-body">
        <div className="Nav">
          <Navbar />
        </div>
        <hr className="text-info" />
        <br />
        <div className="container">
          <div className="row" id="login-form">
            <div className="col-md-1"></div>
            <div className="col-md-4" id="left">
              <h2>Welcome back</h2>
              <h5 id="logintext"> Login to access HCMUT-NOTE </h5>
                  <input
                    type="text"
                    id="a"
                    placeholder="Username"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                  />

                  <input
                    type="password"
                    id="b"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />

                  <input type="checkbox" id="checkbox" checked />
                  Remember me
                <button id="subbutton" onClick={handleLogin}>Login now</button>
              <hr />
              <div>
                Don't have account?
                <a id="loginbt" href="/register">
                  Register here
                </a>
              </div>
            </div>

            <img src={illus} className="col-7" id="illus"></img>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  )
  else return (
    <Redirect to="/notepage" />
  )
}
