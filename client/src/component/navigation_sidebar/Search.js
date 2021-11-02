import React from "react";

const Search = () => {
    return (
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search for your note" aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="bi bi-search"></i>
            </span>
        </div>
    )
}

export default Search;
