import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import './css/login-signup.css'
import landpageimg from './imgs/Mobile-login-Cristina.jpg'

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
            <div className='container'>
                <div className="row">
                    <div className='col-md-1'></div>
                    <div className="col-md-4" id='left'>

                        <h2>Welcom back.</h2>
                        <h5 id="logintext"> Login to access HCMUT-NOTE </h5>
                        <div>
                            <input type="text" id="a" placeholder="Username" name="user" required="" />
                        </div>

                        <div>
                            <input type="password" id="b" placeholder="Password" name="password" required="" />
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" />Remember me</div>
                        <input type="submit" id="subbutton" value="Login now" />
                        <br />
                        <hr />
                        <br />
                        <div>Don't have account?<a id="loginbt" href="/register">Register here</a>
                        </div>
                    </div>



<<<<<<< HEAD:client/src/component/login_signup_home/Login.js
                    <div>

                        <input type='checkbox' id='checkbox' />
                        Remember me
                        {/* <a href='#'>Forgot password</a> */}
                    </div>
                    <Link to='/notepage'>
                        <input type='submit' value='Login now' id='subbutton' />
                    </Link>
                    <br />
                    <hr />
                    <br />
                    <div>
                        Don't have account?
                        <Link to='/register' id="res">Register here</Link>
=======
                    <div className="col-md-7">
                        <img src={landpageimg} alt="Something" id='img' />
>>>>>>> 2fdfec648658d455ba8faa3b070f917be4112d15:client/src/component/Login.js
                    </div>
                </div>
            </div>
        </div >
    )
}