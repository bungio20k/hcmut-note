import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios"
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
import SearchNote from "./component/SearchNote";
import { nanoid } from "nanoid";

const SAMPLE_NOTE =
{
  id: nanoid(),
  title: "This is a sample note",
  text: "short description",
  date: "October 26th 2021",
  time: "02:00 AM",
  tag: "ex",
  pinned: "y",
  content: "long long description",
  color: "#2980b9",
};


//////////////////////// code for api ///////////////////////////
const fetchNote = async (setNotes) => {
  const data = await axios.post('/allnotes', {
    userId: localStorage.getItem('token')
  }).then((response) => response.data);
  console.log([...data]);
  if (data) setNotes([...data]);
}

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, changeText] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => fetchNote(setNotes), [token]);

  console.log(notes);
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
            <Login token={token} setToken={setToken} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/notepage">
            {token ?
              <NotePage notes={notes} setNotes={setNotes} searchText={searchText} changeText={changeText} setToken={setToken} />
              :
              <Redirect to='/login' />}
          </Route>

          <Route path="/notification">
            {token ?
              <Notification notes={notes} setNotes={setNotes} searchText={searchText} changeText={changeText} setToken={setToken} />
              :
              <Redirect to='/login' />}
          </Route>

          <Route path="/workspace">
            {token ?
              <WorkSpace searchText={searchText} changeText={changeText} setToken={setToken} />
              :
              <Redirect to='/login' />}
          </Route>

          <Route path='/search'>
            {token ?
              <SearchNote notes={notes} setNotes={setNotes} searchText={searchText} changeText={changeText} setToken={setToken} />
              :
              <Redirect to='/login' />}
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
