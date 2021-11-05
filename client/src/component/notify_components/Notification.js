import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';

import {
  SmallNote
} from './All';

import Note from '../note_page/Note'

import {
  Sidebar,
  Search,
} from '../navigation_sidebar/All'

import NoteCore from '../note_page/NoteCore'

import './css.css'
import Calendar from 'react-calendar';
import Logo from '../login_signup_home/imgs/logo.jpg';

import { nanoid } from "nanoid";

const todayNoteData = [{
  id: nanoid(),
  title: 'Do homework',
  text: 'short description',
  content: 'Complete homeworks for sofware engineering',
  date: 'October 26th 2021',
  time: '08:00',
  tag: 'Study',
  color: '#16a085'
}, {
  id: nanoid(),
  title: 'Battlepass',
  text: 'short description',
  content: 'Complete battlepass daily mission',
  date: 'October 26th 2021',
  time: '10:00',
  tag: 'Gaming',
  color: '#000000'
}, {
  id: nanoid(),
  title: 'Prepare for lunch',
  text: 'short description',
  content: 'Buy some pork and rosemary for luch',
  date: 'October 26th 2021',
  time: '10:30',
  tag: 'Grocery',
  color: '#000000'
}, {
  id: nanoid(),
  title: 'Workout',
  text: 'short description',
  content: '100 push up go brrr',
  date: 'October 26th 2021',
  time: '04:30',
  tag: 'Workout',
  color: '#000000'
}]

const weeklyNoteData = {
  'Sunday': [
    {
      id: nanoid(),
      title: 'Note1',
      text: 'short description',
      content: 'This is note 1',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag1',
      color: '#000000'
    }
  ],
  'Monday': [
    {
      id: nanoid(),
      title: 'Note2',
      text: 'short description',
      content: 'This is note 2',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag2',
      color: '#000000'
    }
  ],
  'Tuesday': [
    {
      id: nanoid(),
      title: 'Note3',
      text: 'short description',
      content: 'This is note 3',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag3',
      color: '#000000'
    },
    {
      id: nanoid(),
      title: 'Note3.1',
      text: 'short description',
      content: 'This is note 3.1',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag3',
      color: '#000000'
    }
  ],
  'Wednesday': [
    {
      id: nanoid(),
      title: 'Note 4',
      text: 'short description',
      content: 'This is note 4',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag4',
      color: '#000000'
    }
  ],
  'Thursday': [
    {
      id: nanoid(),
      title: 'Note 5',
      text: 'short description',
      content: 'This is note 5',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag3',
      color: '#000000'
    },
  ],
  'Friday': [
    {
      id: nanoid(),
      title: 'Note 6',
      text: 'short description',
      content: 'This is note 6',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag2',
      color: '#000000'
    },
    {
      id: nanoid(),
      title: 'Note 6',
      text: 'short description',
      content: 'This is note 6',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag2',
      color: '#000000'
    },
    {
      id: nanoid(),
      title: 'Note 6',
      text: 'short description',
      content: 'This is note 6',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag2',
      color: '#000000'
    },
    {
      id: nanoid(),
      title: 'Note 6',
      text: 'short description',
      content: 'This is note 6',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag2',
      color: '#000000'
    }
  ],
  'Saturday': [
    {
      id: nanoid(),
      title: 'Note 7',
      text: 'short description',
      content: 'This is note 7',
      date: 'October 26th 2021',
      time: '10:00 AM',
      tag: 'Tag1',
      color: '#000000'
    }
  ]
};

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Notification() {
  const [currentDay, changeDay] = useState(new Date());

  const [notes, setNotes] = useState(todayNoteData);


  const [note, setNote] = useState({
    id: nanoid(),
    title: "",
    text: "",
    date: "",
    tag: "",
    content: "",
    pinned: "n",
    color: "#000000",
  });

  const [editStatus, setEditStatus] = useState({
    status: false,
    id: "",
  });

  const editNote = (id) => {
    console.log(id);
    setEditStatus({
      status: true,
      id: id,
    });
    setNote(notes.find((note) => note.id === id));
    document.getElementById("addnote").click();
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => id !== note.id));
  };

  const seeDetailNote = (id) => {
    setNote(notes.find((note) => note.id === id));
  };

  const pinHandler = (id, status) => {
    setNotes((prev) => {
      prev[prev.findIndex((note) => note.id === id)].pinned =
        status === "n" ? "y" : "n";
      return [...prev];
    });
  };


  return (
    <div id='notification'>
      <NoteCore
        note={note} setNote={setNote}
        editStatus={editStatus} setEditStatus={setEditStatus}
        setNotes={setNotes} />

      <div class='container-fluid bg-info' id='navbar'>

        <Link to='/notepage'>
          <img src={Logo} alt='logo-note' id='logoimg' class='border border-info rounded-circle col-1' />
        </Link>

        <div class='btn-group col-6 offset-md-1'>
          <Search />
        </div>

        <button class='btn btn-outline-light col-1 offset-md-2'>
          <i class="bi bi-lightbulb"></i>
        </button>

        <Link to='/'>
          <button class='btn btn-outline-light col-1'>
            <i class="bi bi-box-arrow-in-left"></i>
          </button>
        </Link>

      </div>
      <br />
      <div class='container-fluid'>
        <div class='row'>
          <Sidebar />
          <div class='col-7'>
            {
              (currentDay.toDateString() == new Date().toDateString()) ?
                <button class='btn text-light btn-info rounded-pill'>
                  <i class="bi bi-alarm-fill"> </i>
                  Today
                </button>
                :
                <button class='btn text-light btn-info rounded-pill'>
                  <i class="bi bi-alarm-fill"> </i>
                  {currentDay.toDateString()}
                </button>
            }
            <div class='col d-grid gap-2 offset-md-2' id='note-list'>
              {notes.map(note => (
                <div key={note.id}>
                  <Note
                    note={note}
                    del={deleteNote}
                    edit={editNote}
                    pinHandler={pinHandler}
                    detail={seeDetailNote}
                  />
                </div>
              ))}
            </div>

          </div>
          <div class='col justify-self-center text-info' id='calendar'>
            <Calendar
              value={currentDay}
              onChange={changeDay}
            />
            <button
              type="button"
              className="btn btn-info mb-2 text-secondary rounded-pill invisible"
              data-bs-toggle="modal"
              data-bs-target="#modal-note"
              id="addnote"
            >
              Add note <i class="bi bi-plus-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div class='container'>
        <button class='btn text-light btn-info rounded-pill offset-md-1'>
          <i class="bi bi-calendar-minus-fill"> </i>
          This week
        </button>
        <div class='row border border-info'>
          {week.map(day => (
            <div class='col border'>
              <h5 class='text-info text-center'>{day}</h5>
              {weeklyNoteData[day].map(note => (
                <SmallNote data={note}/>
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

