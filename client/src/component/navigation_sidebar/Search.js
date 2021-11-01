import React from 'react'

const Search = () => {
    return (
        <div class="input-group rounded w-75">
            <input type="search" class="form-control rounded col" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0 col-1" id="search-addon">
                <i class="bi bi-search"></i>
            </span>
        </div>
    )
}

export default Search