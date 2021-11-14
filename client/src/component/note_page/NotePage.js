import React from "react";
import { Link } from "react-router-dom";
//
import { useState, useEffect } from "react";
//
import axios from "axios";

import Search from "../navigation_sidebar/Search";
//
import Logo from "../login_signup_home/imgs/logo.jpg";
import Note from "./Note";
import Sidebar from "../navigation_sidebar/Sidebar";
import Footer from "../footer/Footer";
import NoteCore from "./NoteCore";

import { nanoid } from "nanoid";
import "suneditor/dist/css/suneditor.min.css";
//dnd
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";

const defaultNote = {
  id: nanoid(),
  title: "",
  text: "",
  date: "",
  time: "",
  tag: "",
  content: "",
  pinned: "n",
  color: "#000000",
};

export default function NotePage(props) {
  const [note, setNote] = React.useState(defaultNote);
   //grid drag and drop

   function onChange( sourceIndex, targetIndex) {
    const nextState = swap(props.notes, sourceIndex, targetIndex);
    setNote(nextState);
  }
 
    

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
    const noteToDelete =
      props.notes[props.notes.findIndex((item) => item.id == id)];
    axios.post("/deletenote", {
      userId: localStorage.getItem("token"),
      noteId: noteToDelete.databaseid,
    });
    ////////////////////////////////////////////////////////////
    props.setNotes((prev) => {
      return prev.filter((note) => id !== note.id);
    });
  };

  const seeDetailNote = (id) => {
    setNote(props.notes.find((note) => note.id === id));
  };

  //////////////// code for api //////////////////////////
  const handleNoteUpdate = async (note) => {
    const res = await axios
      .post("/notechange", {
        userId: localStorage.getItem("token"),
        note: note,
      })
      .then((response) => {
        return response;
      });

    return res;
  };
  ////////////////////////////////////////////////////////
  const pinHandler = (id, status) => {
    props.setNotes((prev) => {
      const noteToUpdate = prev.findIndex((note) => note.id === id);
      prev[noteToUpdate].pinned = status === "n" ? "y" : "n";
      handleNoteUpdate(prev[noteToUpdate]);
      return [...prev];
    });
  };

  const logOut = () => {
    localStorage.removeItem("token");
    props.setToken(null);
  };

  const [searchText, setSearchText] = useState("");
  //
 
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
            <Search
              searchText={props.searchText}
              changeText={props.changeText}
            />
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
          <Sidebar />
          <div className="col-lg-11">
            <div className="container-fluid">
              <div>
                <button
                  type="button"
                  className="btn btn-info mb-2 text-secondary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-note"
                  id="addnote"
                >
                  Add note <i className="bi bi-plus-circle-fill"></i>
                </button>
                <hr />
                <NoteCore
                  note={note}
                  setNote={setNote}
                  editStatus={editStatus}
                  setEditStatus={setEditStatus}
                  setNotes={props.setNotes}
                />
              </div>

              <span className="badge bg-info my-2">Pinned</span>
            
              <GridContextProvider onChange={onChange}>
                <GridDropZone
                  id="note.id"
                  boxesPerRow={3}
                  rowHeight={200}
                  style={{ height: "800px" }}
                >
                  {props.notes
                  .filter(
                    (note) =>
                    (note.title.toLowerCase().includes(searchText) ||
                    note.text.toLowerCase().includes(searchText)) &&
                      note.pinned.includes("y")
                      ).map((note) => (
                    <GridItem key={note}>
                      <div
                        style={{
                          width: "80%",
                          height: "100%",
                        }}
                        >
                        {<Note
                        note={note}
                        del={deleteNote}
                        edit={editNote}
                        pinHandler={pinHandler}
                        detail={seeDetailNote}
                        displayTime={false}
                        />}
                      </div>
                    </GridItem>
                  ))}
                </GridDropZone>
              </GridContextProvider>
             
              <hr />
              <span className="badge bg-info my-2">Other</span>

              <GridContextProvider onChange={onChange}>
                <GridDropZone
                  id="note.id"
                  boxesPerRow={3}
                  rowHeight={200}
                  style={{ height: "800px" }}
                >
                  {props.notes
                  .filter(
                    (note) =>
                    (note.title.toLowerCase().includes(searchText) ||
                    note.text.toLowerCase().includes(searchText)) &&
                      note.pinned.includes("n")
                      ).map((note) => (
                    <GridItem key={note}>
                      <div
                        style={{
                          width: "80%",
                          height: "100%",
                        }}
                        >
                        <Note
                        note={note}
                        del={deleteNote}
                        edit={editNote}
                        pinHandler={pinHandler}
                        detail={seeDetailNote}
                        displayTime={false}
                        />
                      </div>
                    </GridItem>
                  ))}
                </GridDropZone>
              </GridContextProvider>
            </div>
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
}
