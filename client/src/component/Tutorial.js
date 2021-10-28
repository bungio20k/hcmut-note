import React from "react";
import Navbar from "./Navbar";
import EditNote from "./EditNote";

//
import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';

import Button from 'react-bootstrap/Button';

import AddNote from './AddNote';
import NotesList from './NotesList';
import Search from './Search';
//

export default function Tutorial(handleAddNote) {
  
  //
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    title: "network",
    text:"homework",
    date: "October 26th 2021",
    pinned: 'y',
  },

  {
    id: nanoid(),
    title: "dbs",
    text:"quiz",
    date: "October 26th 2021",
    pinned: 'n',
  },

  {
    id: nanoid(),
    title: "software",
    text:"task3",
    date: "October 26th 2021",
    pinned: 'y',
  },

  {
    id: nanoid(),
    title: "chemistry",
    text:"midterm",
    date: "October 26th 2021",
    pinned: 'n',
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

const [searchText, setSearchText] = useState('');
  //
  return (
    <div className = "container">
    <Navbar />
      <h1>Tutorial</h1>
      <EditNote />
      <Search handleSearchNote= { setSearchText}/>
      <AddNote handleAddNote={handleAddNote}/>
      <Button variant="primary" size="lg" active>
    PIN
  </Button>
      <NotesList 
        
        notes = {notes.filter((note)=>(
          (note.title.toLowerCase().includes(searchText) || note.text.toLowerCase().includes(searchText))
          && note.pinned.includes('y')
        ))}

        handleAddNote={addNote}

      />
       <Button variant="primary" size="lg" active>
    OTHER
  </Button>

      <NotesList 
        notes = {notes.filter((note)=>(
          (note.title.toLowerCase().includes(searchText) || note.text.toLowerCase().includes(searchText))
          && note.pinned.includes('n')
        ))}
      />
    </div>
      
    
  );
}
