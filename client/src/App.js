import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  About,
  Contact,
  Home,
  Login,
  Register,
  Tutorial,
  NotePage,
  Notification,
} from "./component/All";
import WorkSpace from "./component/WorkSpace";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tutorial">
            <Tutorial />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/notepage">
            <NotePage />
          </Route>

          <Route path="/notification">
            <Notification />
          </Route>

          <Route path="/workspace">
            <WorkSpace />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
