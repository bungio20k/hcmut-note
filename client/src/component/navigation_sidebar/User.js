import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function User() {
    return (
        <div class="dropdown col-1">
            <div id='muda'></div>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#muda">Action</a>
                <a class="dropdown-item" href="#muda">Another action</a>
                <a class="dropdown-item" href="#muda">Something else here</a>
            </div>
        </div>
    )
}