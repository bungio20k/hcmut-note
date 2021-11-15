import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import { SmallNote } from "./All";

import Note from "../note_page/Note";

import { Sidebar, Search } from "../navigation_sidebar/All";

import NoteCore from "../note_page/NoteCore";

import "./css.css";
import Calendar from "react-calendar";
import Logo from "../login_signup_home/imgs/logo.jpg";

import { nanoid } from "nanoid";

const rat = {
  "Sunday": [],
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [],
  "Saturday": [],
}

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekNote = (data, setNotes) => {
  const notedata = {};
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date();
    currentDay.setDate(currentDay.getDate() + (i - currentDay.getDay()))
    notedata[week[i]] = data.filter((note) => (
      (new Date(note.date).toDateString() == currentDay.toDateString())
    ))
  }
  console.log(notedata);
  setNotes({...notedata});
}

// const fetchWeek = async (setNotes) => {
//   const data = await axios.post('/weeknote', {
//     userId: localStorage.getItem('token')
//   }).then(res => res.data);
//   console.log({ ...data });
//   if (data) setNotes({ ...data });
// }

export default function Notification(props) {
  const [weeklyNoteData, setWeek] = useState(rat);
  const [notes, setNotes] = useState([]);
  const [currentDay, changeDay] = useState(new Date());

  useEffect(() => {
    const todayNote = props.notes.filter(note => (new Date(note.date)).toDateString() == currentDay.toDateString());
    console.log(todayNote);
    setNotes([...todayNote]);
  }, [currentDay]);

  useEffect(() => weekNote(props.notes, setWeek), [props.notes]);

  const [note, setNote] = useState({
    id: nanoid(),
    title: "",
    text: "",
    date: "",
    time: "",
    tag: "",
    content: "",
    pinned: "n",
    color: "#000000",
  });

  // useEffect(() => fetchWeek(setWeek), [note]);

  const [editStatus, setEditStatus] = useState({
    status: false,
    id: "",
  });

  const editNote = (id) => {
    setEditStatus({
      status: true,
      id: id,
    });
    setNote(notes.find((note) => note.id === id));
    document.getElementById("addnote").click();
  };

  const deleteNote = (id) => {
    ///////////////// code for api /////////////////////////////
    const noteToDelete = notes[notes.findIndex((item) => item.id == id)];
    axios.post('/deletenote', {
      userId: localStorage.getItem('token'),
      noteId: noteToDelete.databaseid,
    });
    ////////////////////////////////////////////////////////////
    setNotes((prev) => prev.filter((note) => id !== note.id));
    props.setNotes((prev) => prev.filter((note) => id !== note.id));
  };

  const seeDetailNote = (id) => {
    setNote(notes.find((note) => note.id === id));
  };

  //////////////// code for api //////////////////////////
  const handleNoteUpdate = async (note) => {
    const res = await axios.post('/notechange', {
      userId: localStorage.getItem('token'),
      note: note
    }).then((response) => { return response })

    return res;
  }
  ////////////////////////////////////////////////////////

  const pinHandler = (id, status) => {
    props.setNotes((prev) => {
      const noteToUpdate = prev.findIndex((note) => note.id === id);
      prev[noteToUpdate].pinned =
        status === "n" ? "y" : "n";
      handleNoteUpdate(prev[noteToUpdate]);
      return [...prev];
    });
  };

  const logOut = () => {
    localStorage.removeItem('token');
    props.setToken(null);
  }

  return (
    <div id="notification">
      <NoteCore
        note={note}
        setNote={setNote}
        editStatus={editStatus}
        setEditStatus={setEditStatus}
        setNotes={props.setNotes}
      />

      <div className="container-fluid bg-info" id="navbar">
        <Link to="/notepage">
          <img
            src={Logo}
            alt="logo-note"
            id="logoimg"
            className="border border-info rounded-circle col-1"
          />
        </Link>

        <div className="btn-group col-6 offset-md-1">
          <Search searchText={props.searchText} changeText={props.changeText} />
        </div>

        <button className="btn btn-outline-light col-1 offset-md-2">
          <i className="bi bi-lightbulb"></i>
        </button>

        <Link to="/">
          <button className="btn btn-outline-light col-1" onClick={logOut}>
            <i className="bi bi-box-arrow-in-left"></i>
          </button>
        </Link>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <Sidebar setSearchText={props.changeText} notes={props.notes}/>
          <div className="col-7">
            {currentDay.toDateString() == new Date().toDateString() ? (
              <button className="btn text-light btn-info rounded-pill">
                <i className="bi bi-alarm-fill"> </i>
                Today
              </button>
            ) : (
              <button className="btn text-light btn-info rounded-pill">
                <i className="bi bi-alarm-fill"> </i>
                {currentDay.toDateString()}
              </button>
            )}
            <div className="col d-grid gap-2 offset-md-2" id="note-list">
              {props.notes.filter(note => (new Date(note.date)).toDateString() == (currentDay.toDateString())).map((note) => (
                <div key={note.id}>
                  <Note
                    note={note}
                    del={deleteNote}
                    edit={editNote}
                    pinHandler={pinHandler}
                    detail={seeDetailNote}
                    displayTime={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col justify-self-center text-info" id="calendar">
            <Calendar value={currentDay} onChange={changeDay} calendarType="US"/>
            <button
              type="button"
              className="btn btn-info mb-2 text-secondary rounded-pill invisible"
              data-bs-toggle="modal"
              data-bs-target="#modal-note"
              id="addnote"
            >
              Add note <i className="bi bi-plus-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <button className="btn text-light btn-info rounded-pill offset-md-1">
          <i className="bi bi-calendar-minus-fill"> </i>
          This week
        </button>
        <div className="row border border-info">
          {week.map((day) => (
            <div className="col border">
              <h5 className="text-info text-center">{day}</h5>
              {weeklyNoteData[day].map((note) => (
                <SmallNote data={note} />
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
