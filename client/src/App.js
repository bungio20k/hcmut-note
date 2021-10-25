import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  About,
  Contact,
  Home,
  Login,
  Register,
  Tutorial,
} from './component/All';

export default function App() {
  return (
    <Router>
      <div>
        <Link to='/'>
          <img src='' alt='logo'></img>
        </Link>

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

