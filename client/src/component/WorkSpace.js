import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Calendar from "react-calendar";
import { events } from "./workspace/index";
import { Sidebar, Search } from "./navigation_sidebar/All";
import Logo from "./login_signup_home/imgs/logo.jpg";
import Note from "./note_page/Note";
import NoteCore from "./note_page/NoteCore";
import notelist from "./workspace/notes";
import { nanoid } from "nanoid";

const WorkSpace = () => {
  const [currentDay, changeDay] = useState(new Date());
  const [notes, setNotes] = useState(notelist);
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
    <>
      <button
        type="button"
        className="btn btn-info mb-2 text-secondary rounded-pill d-none"
        data-bs-toggle="modal"
        data-bs-target="#modal-note"
        id="addnote"
      >
        Add note <i className="bi bi-plus-circle-fill"></i>
      </button>
      <NoteCore
        note={note}
        setNote={setNote}
        editStatus={editStatus}
        setEditStatus={setEditStatus}
        setNotes={setNotes}
      />
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
            <Search />
          </div>

          <button className="btn btn-outline-light col-1 offset-md-2">
            <i className="bi bi-lightbulb"></i>
          </button>

          <Link to="/">
            <button className="btn btn-outline-light col-1">
              <i className="bi bi-box-arrow-in-left"></i>
            </button>
          </Link>
        </div>
      </div>
      <br />
      <div className="content container-fluid pe-0">
        <div className="row">
          <Sidebar />
          <div className="main-content col-lg-11 mt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5">
                  <div className="container p-0">
                    <span
                      className="badge bg-info  my-3"
                      style={{ maxWidth: "fit-content", textAlign: "left" }}
                    >
                      Up coming
                    </span>
                    <div className="row g-2">
                      {notes
                        .filter((item) => item.type === "1")
                        .map((item) => (
                          <div className="col-lg-6" key={item.id}>
                            <Note
                              note={item}
                              del={deleteNote}
                              edit={editNote}
                              pinHandler={pinHandler}
                              detail={seeDetailNote}
                              displayTime={true}
                            />
                          </div>
                        ))}
                    </div>
                    <span
                      className="badge bg-info my-3"
                      style={{ maxWidth: "fit-content", textAlign: "left" }}
                    >
                      Term 211
                    </span>
                    <div className="row g-2">
                      {notes
                        .filter((item) => item.type === "2")
                        .map((item) => (
                          <div className="col-lg-6" key={item.id}>
                            <Note
                              note={item}
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
                  <span
                    className="badge bg-info my-3"
                    style={{ maxWidth: "fit-content", textAlign: "left" }}
                  >
                    My Task
                  </span>
                  <table className="table table-hover table-responsive">
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Pri</th>
                        <th>Status</th>
                        <th>When</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <tr key={i}>
                          <td>Important task</td>
                          <td>1</td>
                          <td>To do</td>
                          <td>
                            August 20, 2021{" "}
                            <i className="bi bi-arrow-right"></i> December 9,
                            2021
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <span
                    className="badge bg-info my-3"
                    style={{ maxWidth: "fit-content", textAlign: "left" }}
                  >
                    Lectures note
                  </span>
                  <table className="table table-hover table-responsive">
                    <thead>
                      <tr>
                        <th>Class</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>+</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((i) => (
                        <tr key={i}>
                          <td>Software engineering</td>
                          <td>learn more about MVC model</td>
                          <td>October 17, 2021</td>
                          <td>Lorem ipsum dolor sit amet</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">+</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="col-lg-7 p-0 mt-3">
                  <FullCalendar
                    initialView="dayGridMonth"
                    headerToolbar={{
                      left: "prev,next",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    events={events}
                    editable={true}
                    selectable={true}
                  />
                  <div>
                    <span
                      className="badge bg-info my-3"
                      style={{ maxWidth: "fit-content", textAlign: "left" }}
                    >
                      Assignment
                    </span>
                    <div className="row g-2">
                      {notes
                        .filter((item) => item.type === "3")
                        .map((item) => (
                          <div className="col-lg-6" key={item.id}>
                            <Note
                              note={item}
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

                  <div>
                    <span
                      className="badge bg-info my-3"
                      style={{ maxWidth: "fit-content", textAlign: "left" }}
                    >
                      Score
                    </span>
                    <table className="table table-hover table-responsive">
                      <thead>
                        <tr>
                          <th>Material</th>
                          <th>Lab/Quizz </th>
                          <th>Assignment</th>
                          <th>Midterm</th>
                          <th>Final</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <tr key={i}>
                            <td>Network</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2">Count 5</td>
                          <td colSpan="3">Average 10</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSpace;
