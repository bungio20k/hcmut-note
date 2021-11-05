import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div class='col-5'>
      <div class='row'>
        <button class='btn btn-outline-light col text-secondary offset-md-8'><i class="bi bi-lightbulb"></i>
        </button>

        <Link to='/notification'>
          <button class='btn btn-outline-light col text-secondary'><i class="bi bi-box-arrow-in-left"></i>
          </button>
        </Link>
       
      </div>
    </div>
  )
}
