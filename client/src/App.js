import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    <Router>
      <div>
        <Link to='/'>
          <img src='' alt='logo'></img>
        </Link>
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


        <Switch>
          <Route path='/tutorial'>
            <Tutorial />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h1>A workspace for HCMUT-er.</h1>
      <p>More than just a notes organiser, we provide an entire workspace for those who hustle hard.</p>
      <Link to='/register'>Get started now</Link>
      <img srd='' alt='illustration'></img>
    </div>
  )
}

function Tutorial() {
  return (
    <div>
      <h2>Tutorial</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About us</h2>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
    </div>
  )
}



