import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../imgs/logo.jpg'
import '../css/nav.css'

// const navStyle = {
//     margin: '40px',
//     border: '5px solid pink'
// };

const linkStyle = {

    color: 'white',
    // "background-color": 'green',
    "font-weight": 'bold',
    "text-decoration": 'none'
};

export default function Navbar() {

    return (
        <div >
            <Link to='/'>
                <img src={logo} alt='logo-note' id='logoimg' />
            </Link>
            <ul>

                <li>
                    <Link style={linkStyle} to='/'>Home</Link>
                </li>
                <li>
                    <Link style={linkStyle} to='/tutorial'>Tutorial</Link>
                </li>

                <li>
                    <Link style={linkStyle} to='/about'>About us</Link>
                </li>

                <li>
                    <Link style={linkStyle} to='/contact'>Contact</Link>
                </li>

            </ul>


            <button id="login-bt">
                <Link to='/login' id="loginlink">Login</Link>
            </button>

            <button id="reg-bt">
                <Link to='/register' id='reglink'>Sign up</Link>
            </button>



        </div>
    )
}


// return (
//     <div >
//         <nav  id="NavBar">
//             <ul>

//                 <li>
//                     <Link to='/tutorial'>Tutorial</Link>
//                 </li>

//                 <li>
//                     <Link to='/about'>About us</Link>
//                 </li>

//                 <li>
//                     <Link to='/contact'>Contact</Link>
//                 </li>

//                 <button id="login-bt">
//                     <Link to='/login' id="loginlink">Login</Link>
//                 </button>

//                 <button id="reg-bt">
//                     <Link to='/register' id='reglink'>Sign up</Link>
//                 </button>
//             </ul>
//         </nav>
//     </div>
// )