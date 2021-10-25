import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/tutorial'>Tutorial</Link>
                    </li>

                    <li>
                        <Link to='/about'>About us</Link>
                    </li>

                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    <li>
                        <Link to='/login'>Login</Link>
                    </li>

                    <li>
                        <Link to='/register'>Sign up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}