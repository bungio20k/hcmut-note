import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import '../css/login-signup.css'
import landpageimg from '../imgs/Mobile-login-Cristina.jpg'

export default function Login() {

    // const divStyle = {
    //     float: 'left',
    //     fontSize: '20px'
    // };

    return (
        <div className='all'>
            <div className="Nav">
                <Navbar />
            </div>

            < div className="row">
                <div className='login'>
                    <div>
                        <h2>Welcom back.</h2>
                        <h5 id='logintext'> Login to access HCMUT-NOTE </h5>
                    </div>

                    <div>
                        <input type='text' id='a'
                            placeholder="Username"
                            name='user' required />
                    </div>

                    <div>
                        <input type='password' id='b'
                            placeholder='Password'
                            name='password' required />
                    </div>

                    <div>

                        <input type='checkbox' id='checkbox' />
                        Remember me
                        {/* <a href='#'>Forgot password</a> */}
                    </div>
                    <input type='submit' value='Login now' id='subbutton' />
                    <br />
                    <hr />
                    <br />
                    <div>
                        Don't have account?
                        <Link to='/register' id="res">Register here</Link>
                    </div>

                </div>

                <div className='rightImg'>
                    <img src={landpageimg} alt="Something" id='ima' />
                </div>
            </div>

        </div >

    )
}