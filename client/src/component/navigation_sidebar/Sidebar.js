import { React, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Sidebar(props) {

  const tagData = [...new Set(props.notes.filter((note) => (note.tag != '#') && (note.tag != '')).map((note) => note.tag))];
  let searchButton;
  useEffect(() => { searchButton = document.getElementById("search-button") });

  const handleTagClick = (tag) => {
    props.setSearchText(tag);
    searchButton?.click();
  }

  return (
    <div className="col-1">
      <Link to="/notepage">
        <button type="button" className="btn btn-outline-info w-100 mb-2">
          <i className="bi bi-sticky-fill"></i>
        </button>
      </Link>
      <Link to="/notification">
        <button type="button" className="btn btn-outline-info w-100">
          <i className="bi bi-bell-fill"></i>
        </button>
      </Link>
      {/* <Link to="/workspace">
        <button type="button" className="btn btn-outline-info w-100">
          <i className="bi bi-briefcase-fill"></i>
        </button>
      </Link> */}
      <hr />
      <h3 class='text-center'>
        <i className="bi bi-tag"></i>
      </h3>

      {tagData.map((tag) => (
        <button className="btn btn-outline-dark text-secondary w-100 text-truncate mb-1 rounded-pill" onClick={() => handleTagClick(tag)}>
          {/* <i className="bi bi-tag">{tag}</i> */}
          {tag}
        </button>
      ))}
    </div>
  );
}
