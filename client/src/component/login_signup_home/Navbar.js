import React from 'react'
import { Link } from 'react-router-dom'

import logo from './imgs/logo.jpg'
import './css/nav.css'


export default function Navbar() {

    return (
        <div class='container-fluid' id='navbar'>

                <Link to='/'>
                    <img src={logo} alt='logo-note' id='logoimg' class='border border-info rounded-circle col-1' />
                </Link>

            <div class='btn-group col-6 offset-md-1' role='group'>

                <button type='button' class='btn btn-outline-info'>
                    <Link class='text-secondary' to='/'>Home</Link>
                </button>

                <button type='button' class='btn btn-outline-info'>
                    <Link class='text-secondary' to='/tutorial'>Tutorial</Link>
                </button>

                <button type='button' class='btn btn-outline-info'>
                    <Link class='text-secondary' to='/about'>About us</Link>
                </button>

                <button type='button' class='btn btn-outline-info'>
                    <Link class='text-secondary' to='/contact'>Contact</Link>
                </button>

            </div>

            <button class='btn btn-outline-info col-1 offset-md-2'>
                <Link class='text-secondary' to='/login'>Login</Link>
            </button>

            <button class='btn btn-outline-info col-1'>
                <Link class='text-secondary' to='/register'>Sign up</Link>
            </button>

        </div>
    )
}
