import React from "react";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="input-group rounded w-50">
      <input
        type="search"
        className="form-control rounded col"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
      <span className="input-group-text border-0 col-1" id="search-addon">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
};

export default Search;
