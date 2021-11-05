import React from "react";
import { Link } from "react-router-dom";

const tagData = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

export default function Sidebar() {
  return (
    <div className="col-1">
      <Link to="/notepage">
        <button type="button" className="btn btn-outline-info w-100">
          <i className="bi bi-sticky-fill"></i>
        </button>
      </Link>
      <Link to="/notification">
        <button type="button" className="btn btn-outline-info w-100">
          <i className="bi bi-bell-fill"></i>
        </button>
      </Link>
      <Link to="/workspace">
        <button type="button" className="btn btn-outline-info w-100">
          <i className="bi bi-briefcase-fill"></i>
        </button>
      </Link>
      <button type="button" className="btn btn-outline-info w-100">
        <i className="bi bi-bookmark-plus-fill"></i>
      </button>
      {tagData.map((tag) => (
        <button className="btn btn-outline-light col-2 text-secondary w-100">
          <i className="bi bi-tag"></i>
          {tag}
        </button>
      ))}
    </div>
  );
}
