import React from "react";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css";
import { nanoid } from "nanoid";

export default function NoteCore(props) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    props.setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //see documentation of suneditor. function onBlur(event, content)
  const setContent = (e, content) => {
    props.setNote((prev) => ({ ...prev, content: content }));
  };

  //when submit when edit or add
  const submitHandler = () => {
    if (!props.editStatus.status) {
      props.setNotes((prev) => [...prev, props.note]);
    } else {
      props.setNotes((prev) => {
        prev[prev.findIndex((item) => item.id === props.editStatus.id)] =
          props.note;
        return [...prev];
      });
      props.setEditStatus({ status: false, id: "" });
    }
    props.setNote({
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
  };

  const closeHandler = () => {
    props.setNote({
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
    props.setEditStatus({ status: false, id: "" });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modal-note"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog" style={{ minWidth: "75%" }}>
          <div
            className="modal-content"
            style={{
              width: "100%",
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
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
                value={props.note.title}
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
              />
              <label htmlFor="text">Note</label>
              <input
                onChange={changeHandler}
                name="text"
                value={props.note.text}
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
                value={props.note.date}
                onChange={changeHandler}
              />
              <label htmlFor="time">Time</label>
              <input
                name="time"
                type="time"
                className="form-control"
                id="time"
                value={props.note.time}
                onChange={changeHandler}
              />{" "}
              <div className="row">
                <div className="col-lg-11">
                  <label htmlFor="tag">Tag</label>
                  <input
                    name="tag"
                    type="text"
                    className="form-control"
                    id="tag"
                    placeholder="Tag"
                    value={props.note.tag}
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
                    value={props.note.color}
                    title="Choose your color"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <label htmlFor="">Content</label>
              <SunEditor
                setContents={props.note.content}
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
      <div
        className="modal fade"
        id="see-detail"
        tabIndex="2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.note.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeHandler}
              ></button>
            </div>
            <h6 class='font-weight-light text-center text-secondary'>{props.note.text}</h6>
            <div
              className="modal-body"
              id="detail-note-body"
              dangerouslySetInnerHTML={{
                __html: props.note.content,
              }}
            ></div>
            <div className="modal-footer justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <span className="badge bg-primary">{props.note.tag}</span>
                </div>
                <p className="ms-3 mb-0">{props.note.date}</p>
                <p className="ms-3 mb-0">{props.note.time}</p>
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
    </div>
  );
}
