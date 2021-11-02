import React from "react";

//
import { useState } from "react";
import { nanoid } from "nanoid";

import Search from "./Search";
//
import User from "../navigation_sidebar/User";
import Logo from "../login_signup_home/imgs/logo.jpg";
import Note from "./Note";
import Sidebar from "../navigation_sidebar/Sidebar";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function NotePage() {
  //
  const [notes, setNotes] = useState([
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
  ]);

  const [note, setNote] = useState({
    id: nanoid(),
    title: "",
    text: "",
    date: "",
    tag: "",
    content: "",
    pinned: "n",
    color: "#ffffff",
  });

  const [editStatus, setEditStatus] = useState({
    status: false,
    id: "",
  });

  //store the information of the note when input on change
  //const [note, setNote] = useState(initialNote);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //see documentation of suneditor. function onBlur(event, content)
  const setContent = (e, content) => {
    setNote((prev) => ({ ...prev, content: content }));
  };

  //when submit when edit or add
  const submitHandler = () => {
    if (!editStatus.status) {
      setNotes((prev) => [...prev, note]);
    } else {
      setNotes((prev) => {
        prev[prev.findIndex((item) => item.id === editStatus.id)] = note;
        return [...prev];
      });
      setEditStatus({ status: false, id: "" });
    }
    setNote({
      id: nanoid(),
      title: "",
      text: "",
      date: "",
      tag: "",
      content: "",
      pinned: "n",
      color: "#ffffff",
    });
  };

  const closeHandler = () => {
    setNote({
      id: nanoid(),
      title: "",
      text: "",
      date: "",
      tag: "",
      content: "",
      pinned: "n",
      color: "#ffffff",
    });
    setEditStatus({ status: false, id: "" });
  };

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

  const [searchText, setSearchText] = useState("");
  //
  return (
    <>
      <div className="header">
        <div
          className="row navbar navbar-expand-lg navbar-light bg-light m-0"
          id="navigation-bar"
        >
          <img src={Logo} className="col-1" style={{ height: "30px" }}></img>
          <Search handleSearchNote={setSearchText} />

          
          
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="side-bar col-lg-1 bg-light"
            style={{ height: "100vh" }}
          >
            <Sidebar />
          </div>
          <div className="col-lg-11">
            <div className="container-fluid mt-5">
              <div>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-note"
                  id="addnote"
                >
                  Add note
                </button>

                <div
                  className="modal fade"
                  id="modal-note"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" style={{ minWidth: "75%" }}>
                    <div
                      className="modal-content"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="modal-header">
                        <h5
                          className="modal-title text-center"
                          id="exampleModalLabel"
                        >
                          Edit note
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={closeHandler}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <label htmlFor="title">Title</label>
                        <input
                          onChange={changeHandler}
                          name="title"
                          value={note.title}
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Title"
                        />
                        <label htmlFor="text">Note</label>
                        <input
                          onChange={changeHandler}
                          name="text"
                          value={note.text}
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder="Text"
                        />
                        <label htmlFor="date">Date</label>
                        <input
                          name="date"
                          type="date"
                          className="form-control"
                          id="date"
                          placeholder="Date"
                          value={note.date}
                          onChange={changeHandler}
                        />
                        <div className="row">
                          <div className="col-lg-11">
                            <label htmlFor="tag">Tag</label>
                            <input
                              name="tag"
                              type="text"
                              className="form-control"
                              id="tag"
                              placeholder="Tag"
                              value={note.tag}
                              onChange={changeHandler}
                            />
                          </div>
                          <div className="col-lg-1">
                            <label
                              htmlFor="exampleColorInput"
                              className="form-label mb-0"
                            >
                              Color
                            </label>
                            <input
                              name="color"
                              type="color"
                              className="form-control form-control-color"
                              id="exampleColorInput"
                              value={note.color}
                              title="Choose your color"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <label htmlFor="">Content</label>

                        <SunEditor
                          setContents={note.content}
                          showToolbar={true}
                          onBlur={setContent}
                          setDefaultStyle="height: auto"
                          setOptions={{
                            buttonList: [
                              [
                                "undo",
                                "redo",
                                "bold",
                                "underline",
                                "italic",
                                "strike",
                                "list",
                                "align",
                                "fontSize",
                                "formatBlock",
                                "table",
                                "image",
                                "link",
                              ],
                            ],
                          }}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          onClick={closeHandler}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={submitHandler}
                          data-bs-dismiss="modal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="badge bg-primary my-2">Pin</span>
              <div className="row g-2">
                {notes
                  .filter(
                    (note) =>
                      (note.title.toLowerCase().includes(searchText) ||
                        note.text.toLowerCase().includes(searchText)) &&
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
                      />
                    </div>
                  ))}
              </div>

              <span className="badge bg-primary my-2">Other</span>

              <div className="row g-2">
                {notes
                  .filter(
                    (note) =>
                      (note.title.toLowerCase().includes(searchText) ||
                        note.text.toLowerCase().includes(searchText)) &&
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
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="see-detail"
        tabIndex="2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {note.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeHandler}
              ></button>
            </div>
            <div
              className="modal-body"
              id="detail-note-body"
              dangerouslySetInnerHTML={{
                __html: note.content,
              }}
            ></div>
            <div className="modal-footer justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <span className="badge bg-primary">{note.tag}</span>
                </div>
                <p className="ms-3 mb-0">{note.date}</p>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
