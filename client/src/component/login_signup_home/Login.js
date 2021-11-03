import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import './css/login-signup.css'
import illus from './imgs/illustrate.jpg'
import Footer from '../footer/Footer';

export default function Login() {

    return (

        <div className='all'>
            <div className="Nav">
                <Navbar />
            </div>
            <hr class='text-info'/>
            <br />
            <div className='container'>
                <div className="row" id='login-form'>
                    <div className='col-md-1'></div>
                    <div className="col-md-4" id='left'>

                        <h2>Welcome back</h2>
                        <h5 id="logintext"> Login to access HCMUT-NOTE </h5>
                        <div>
                            <input type="text" id="a" placeholder="Username" name="user" required="" />
                        </div>

                        <div>
                            <input type="password" id="b" placeholder="Password" name="password" required="" />
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" />Remember me</div>
                        <Link to='/notepage'>
                            <input type="submit" id="subbutton" value="Login now" />
                        </Link>
                        <hr />
                        <div>Don't have account?<a id="loginbt" href="/register">Register here</a>
                        </div>
                    </div>

                    <img src={illus} class='col-7' id='illus'></img>
                </div>
            </div>
            <br />
        <Footer />
        </div>
    )
}