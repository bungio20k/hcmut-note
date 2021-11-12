import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Search = (props) => {
    return (
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search for your note" aria-label="Search"
                aria-describedby="search-addon"
                value={props.searchText}
                onChange={e => props.changeText(e.target.value)}
            />
            {(props.searchText === '') ?
                <button className="input-group-text border-0" id="search-addon">
                    <i className="bi bi-search"></i>
                </button>
                :
                <Link to='/search'>
                    <button className="input-group-text border-0" id="search-addon">
                        <i className="bi bi-search"></i>
                    </button>
                </Link>
            }
        </div>
    )
}

export default Search;
