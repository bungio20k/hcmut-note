import React from "react";
// import { NavLink } from 'react-router-dom'

export default function User() {
  return (
    <div className="dropdown col-1">
      <div id="muda"></div>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#muda">
          Action
        </a>
        <a className="dropdown-item" href="#muda">
          Another action
        </a>
        <a className="dropdown-item" href="#muda">
          Something else here
        </a>
      </div>
    </div>
  );
}
