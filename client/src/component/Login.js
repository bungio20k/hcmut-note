import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
    return (
        <div>
            <Navbar />
            <div id='login'>
                <form id='login-form' action='/vertify-login' method='post'>
                    <h2>Login here</h2>
                    <input type='text' placeholder="Username" name='user' required />
                    <input type='password' placeholder='Password' name='password' required />
                    <input type='submit' name='login' />
                </form>
                <Link to='/register'>Register here</Link>
            </div>
        </div>
    )
}