import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import './css/home.css'
import landpageimg from './imgs/Mobile-login-Cristina.jpg'

export default function Home() {
    return (
        <div className='all'>
            <div className="Nav">
                <Navbar />
            </div>

            < div className="row">
                <div className='login'>
                    <div>
                        <h2>A workspace for HCMUT-er </h2>
                        <h5 id='hometext'> More than just a notes organiser, we provide an entire workspace for those who hustle hard</h5>
                    </div>

                    <Link to='/register' >
                        <input type='submit' value='Get started now' id='getbtt' to='/login' />
                    </Link>
                    <br />
                    <hr />
                    <br />
                    <div>
                        Already have an account?
                        <Link to='/login' id="res">Login here</Link>
                    </div>

                </div>

                <div className='rightImg'>
                    <img src={landpageimg} alt="Something" id='ima' />
                </div>
            </div>

        </div >
    )
}