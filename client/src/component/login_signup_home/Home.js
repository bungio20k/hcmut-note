import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import './css/home.css'
import illus from './imgs/illustrate.jpg'

export default function Home() {
    return (
        <div className='all'>
            <div className="Nav">
                <Navbar />
            </div>
            <hr class='text-info'/>
            <br />
            <div className='container'>
                <div className="row">
                    <div className='col-md-1'></div>
                    <div className="col-md-4" id='left'>
                        <h2 id='h2text'>A workspace for  </h2>
                        <h2>HCMUT-er</h2>
                        <h5 id='hometext'> More than just a notes organiser, we provide an entire workspace for those who hustle hard</h5>
                        <Link to='/register'>
                            <input type='submit' value='Get started now' id='getbtt' to='/login' />
                        </Link>
                        <br />
                        <hr />
                        <br />
                        <div>
                            Already have an account?
                            <Link to='/login' id="loginbt">Login here</Link>
                        </div>

                    </div>
                    <img src={illus} class='col-7'></img>
                </div>
            </div>
        </div>
    )
}