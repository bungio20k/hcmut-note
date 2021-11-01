import React from "react";
import EditNote from "./EditNote";

//
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import AddNote from "./AddNote";
import NotesList from "./NotesList";
import Search from "./Search";
//
import User from '../navigation_sidebar/User'
import Logo from '../login_signup_home/imgs/logo.jpg';


export default function NotePage(handleAddNote) {
  //
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "network",
      text: "homework",
      date: "October 26th 2021",
      pinned: "y",
    },

    {
      id: nanoid(),
      title: "dbs",
      text: "quiz",
      date: "October 26th 2021",
      pinned: "n",
    },

    {
      id: nanoid(),
      title: "software",
      text: "task3",
      date: "October 26th 2021",
      pinned: "y",
    },

    {
      id: nanoid(),
      title: "chemistry",
      text: "midterm",
      date: "October 26th 2021",
      pinned: "n",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");
  //
  return (
    <>
      <div className="container">
        <div class='row w-75' id='navigation-bar'>
          <img src={Logo} class='col-1'></img>
          <Search handleSearchNote={setSearchText} />
          <User />
        </div>
        <EditNote />
        <h3>PIN</h3>
        <NotesList
          notes={notes.filter(
            (note) =>
              (note.title.toLowerCase().includes(searchText) ||
                note.text.toLowerCase().includes(searchText)) &&
              note.pinned.includes("y")
          )}
          handleAddNote={addNote}
        />
        <h3>
          OTHER
        </h3>

        <NotesList
          notes={notes.filter(
            (note) =>
              (note.title.toLowerCase().includes(searchText) ||
                note.text.toLowerCase().includes(searchText)) &&
              note.pinned.includes("n")
          )}
        />
      </div>
    </>
  );
}
