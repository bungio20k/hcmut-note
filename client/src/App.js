import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'

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

import { nanoid } from "nanoid";
const NOTES_DATA = [
  {
    id: nanoid(),
    title: "software",
    text: "task3",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "chemistry",
    text: "midterm",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "network",
    text: "homework",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "dbs",
    text: "quiz",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },



  {
    id: nanoid(),
    title: "software",
    text: "task3",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "chemistry",
    text: "midterm",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "software",
    text: "task3",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "chemistry",
    text: "midterm",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "software",
    text: "task3",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "y",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },

  {
    id: nanoid(),
    title: "chemistry",
    text: "midterm",
    date: "October 26th 2021",
    tag: "task3",
    pinned: "n",
    content: "lorem ipsum dolor sit amet, consectetur",
    color: "#ffffff",
  },
]

export default function App() {
  const [notes, setNotes] = useState(NOTES_DATA);

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
            <NotePage notes={notes} setNotes={setNotes}/>
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
