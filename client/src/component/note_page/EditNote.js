// import React, { useState } from "react";
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";

// import { nanoid } from "nanoid";

// const EditNote = ({
//   addNote,
//   closeHandler,
//   editHandler,
//   deleteNote,
//   seeDetailNote,
//   inote,
// }) => {
//   //save notes
//   const [data, setData] = useState([]);

//   const [note, setNote] = useState(inote);
//   //edit or add
//   const [editStatus, setEditStatus] = useState({
//     status: false,
//     id: "",
//   });

//   //store the information of the note when input on change
//   //const [note, setNote] = useState(initialNote);

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setNote((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   //see documentation of suneditor. function onBlur(event, content)
//   const setContent = (e, content) => {
//     setNote((prev) => ({ ...prev, content: content }));
//   };

//   //when submit when edit or add
//   const submitHandler = () => {
//     if (!editStatus.status) {
//       setNote((prev) => ({ ...prev, id: nanoid() }));
//       console.log(nanoid());
//       addNote(note);
//     } else {
//       setData((prev) => {
//         prev[editStatus.id] = note;
//         return [...prev];
//       });
//       setEditStatus({ status: false, id: "" });
//     }
//     setNote({
//       title: "",
//       date: "",
//       tag: "",
//       content: "",
//     });
//   };

//   const closeHandler = () => {
//     setNote({
//       title: "",
//       date: "",
//       tag: "",
//       content: "",
//     });
//     setEditStatus({ status: false, id: "" });
//   };

//   const editNote = (id) => {
//     setEditStatus({
//       status: true,
//       id: id,
//     });
//     setNote(data[id]);
//     document.getElementById("addnote").click();
//   };

//   const deleteNote = (id) => {
//     setData((prev) => prev.filter((note, index) => id !== index));
//   };

//   const seeDetailNote = (id) => {
//     setNote(data[id]);
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-primary mb-2"
//         data-bs-toggle="modal"
//         data-bs-target="#modal-note"
//         id="addnote"
//       >
//         Add note
//       </button>

//       <div
//         className="modal fade"
//         id="modal-note"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" style={{ minWidth: "75%" }}>
//           <div
//             className="modal-content"
//             style={{
//               width: "100%",
//             }}
//           >
//             <div className="modal-header">
//               <h5 className="modal-title text-center" id="exampleModalLabel">
//                 Edit note
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//                 onClick={closeHandler}
//               ></button>
//             </div>
//             <div className="modal-body">
//               <label htmlFor="title">Title</label>
//               <input
//                 onChange={changeHandler}
//                 name="title"
//                 value={note.title}
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 placeholder="Title"
//               />
//               <label htmlFor="date">Date</label>
//               <input
//                 name="date"
//                 type="date"
//                 className="form-control"
//                 id="date"
//                 placeholder="Date"
//                 value={note.date}
//                 onChange={changeHandler}
//               />
//               <label htmlFor="tag">Tag</label>
//               <input
//                 name="tag"
//                 type="text"
//                 className="form-control"
//                 id="tag"
//                 placeholder="Tag"
//                 value={note.tag}
//                 onChange={changeHandler}
//               />
//               <label htmlFor="">Content</label>
//               <SunEditor
//                 setContents={note.content}
//                 showToolbar={true}
//                 onBlur={setContent}
//                 setDefaultStyle="height: auto"
//                 setOptions={{
//                   buttonList: [
//                     [
//                       "undo",
//                       "redo",
//                       "bold",
//                       "underline",
//                       "italic",
//                       "strike",
//                       "list",
//                       "align",
//                       "fontSize",
//                       "formatBlock",
//                       "table",
//                       "image",
//                       "link",
//                     ],
//                   ],
//                 }}
//               />
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//                 onClick={closeHandler}
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={submitHandler}
//                 data-bs-dismiss="modal"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="content">
//         <div className="row">
//           {data.length !== 0 &&
//             data.map((item, index) => {
//               return (
//                 <div className="col-4" key={index}>
//                   <div className="card">
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <p className="card-text">{item.date}</p>
//                       <p className="card-text">{item.tag}</p>
//                       <p className="card-text">{item.content}</p>
//                       <button
//                         className="btn btn-warning"
//                         onClick={() => editNote(index)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger ms-2"
//                         onClick={() => deleteNote(index)}
//                       >
//                         Delete
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-success ms-2"
//                         data-bs-toggle="modal"
//                         data-bs-target="#see-detail"
//                         onClick={() => seeDetailNote(index)}
//                       >
//                         See detail
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           <div
//             className="modal fade"
//             id="see-detail"
//             tabIndex="2"
//             aria-labelledby="exampleModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="exampleModalLabel">
//                     {note.title}
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                     onClick={closeHandler}
//                   ></button>
//                 </div>
//                 <div
//                   className="modal-body"
//                   id="detail-note-body"
//                   dangerouslySetInnerHTML={{
//                     __html: note.content,
//                   }}
//                 ></div>
//                 <div className="modal-footer justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div>
//                       <span className="badge bg-primary">{note.tag}</span>
//                     </div>
//                     <p className="ms-3 mb-0">{note.date}</p>
//                   </div>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                     onClick={closeHandler}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default EditNote;
