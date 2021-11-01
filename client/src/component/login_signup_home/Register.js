import React from 'react';
import Navbar from './Navbar';
import './css/login-signup.css'
import landpageimg from './imgs/Mobile-login-Cristina.jpg'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='all'>
      <div className="Nav">
        <Navbar />
      </div>

      < div className="row">
        <div className='login'>
          <div>
            <h2>Create an account.</h2>
            <h5 id='logintext'> Let's set up your account. </h5>
          </div>

          <div>
            <input type='text' id='a'
              placeholder="Email"
              name='email' required />
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
            I accept the
            <a href="http://dontpad.com/hcmut-note-TaS"> Terms of Service and Privacy</a>
            {/* <a href='#'>Forgot password</a> */}
          </div>
          <input type='submit' value='Sign up now' id='subbutton' />
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