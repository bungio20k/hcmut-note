import React from "react";
import { Link } from "react-router-dom";

const tagData = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

export default function Sidebar() {
  return (
    <div className="col-1">
      <button type="button" className="btn btn-outline-info">
        <i className="bi bi-sticky-fill"></i>
      </button>
      <button type="button" className="btn btn-outline-info">
        <i className="bi bi-bell-fill"></i>
      </button>
      <button type="button" className="btn btn-outline-info">
        <i className="bi bi-briefcase-fill"></i>
      </button>
      <button type="button" className="btn btn-outline-info">
        <i className="bi bi-bookmark-plus-fill"></i>
      </button>
      {tagData.map((tag) => (
        <>
          <div className="w-100"></div>
          <i className="bi bi-tag">{tag}</i>
        </>
      ))}
    </div>
  );
}
