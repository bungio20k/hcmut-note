import React from "react";
import { Link } from "react-router-dom";
//
import { useState } from "react";

import Search from "./navigation_sidebar/Search";
//
import Logo from "./login_signup_home/imgs/logo.jpg";
import Note from "./note_page/Note";
import Sidebar from "./navigation_sidebar/Sidebar";
import Footer from "./footer/Footer";
import NoteCore from "./note_page/NoteCore";

import { nanoid } from "nanoid";
import "suneditor/dist/css/suneditor.min.css";
import axios from 'axios';

export default function SearchNote(props) {
  const logOut = () => {
    localStorage.removeItem('token');
    props.setToken(null);
  }
  //
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
    setNote(props.notes.find((note) => note.id === id));
    document.getElementById("addnote").click();
  };

  const deleteNote = (id) => {
    ///////////////// code for api /////////////////////////////
    const noteToDelete = props.notes[props.notes.findIndex((item) => item.id == id)];
    axios.post('/deletenote', {
      userId: localStorage.getItem('token'),
      noteId: noteToDelete.databaseid,
    });
    ////////////////////////////////////////////////////////////
    props.setNotes((prev) => prev.filter((note) => id !== note.id));
  };

  const seeDetailNote = (id) => {
    setNote(props.notes.find((note) => note.id === id));
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

  return (
    <>
      <div className="header">
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
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <Sidebar setSearchText={props.changeText} notes={props.notes}/>
          <div className="col-lg-11">
            <div className="container-fluid">
              <div>

                <NoteCore
                  note={note}
                  setNote={setNote}
                  editStatus={editStatus}
                  setEditStatus={setEditStatus}
                  setNotes={props.setNotes}
                />
              </div>

              <span className="badge bg-info my-2">Pinned</span>
              <div className="row g-2">
                {props.notes
                  .filter(
                    (note) =>
                      (note.title.toLowerCase().includes(props.searchText) ||
                        note.text.toLowerCase().includes(props.searchText) ||
                        note.tag.toLowerCase().includes(props.searchText))
                      &&
                      note.pinned.includes("y")
                  )
                  .map((note) => (
                    <div className="col-lg-3" key={note.id}>
                      <Note
                        note={note}
                        del={deleteNote}
                        edit={editNote}
                        pinHandler={pinHandler}
                        detail={seeDetailNote}
                        displayTime={false}
                      />
                    </div>
                  ))}
              </div>

              <span className="badge bg-info my-2">Other</span>

              <div className="row g-2">
                {props.notes
                  .filter(
                    (note) =>
                      (note.title.toLowerCase().includes(props.searchText) ||
                        note.text.toLowerCase().includes(props.searchText) ||
                        note.tag.toLowerCase().includes(props.searchText))
                      &&
                      note.pinned.includes("n")
                  )
                  .map((note) => (
                    <div className="col-lg-3" key={note.id}>
                      <Note
                        note={note}
                        del={deleteNote}
                        edit={editNote}
                        pinHandler={pinHandler}
                        detail={seeDetailNote}
                        displayTime={false}
                      />
                    </div>
                  ))}
              </div>
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
      </div>

      <br />
      <Footer />
    </>
  );
}
