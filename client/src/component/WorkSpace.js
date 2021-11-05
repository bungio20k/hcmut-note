import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import Calendar from "react-calendar";
import { events } from "./workspace/index";

import { Sidebar, Search } from "./navigation_sidebar/All";
//
import Logo from "./login_signup_home/imgs/logo.jpg";

const WorkSpace = () => {
  const [currentDay, changeDay] = useState(new Date());
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
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Midterm FOC</h5>
                            <p className="card-text">exam.hcmut.edu.vn</p>
                            <p className="card-text">October 9, 2021 1:00 PM</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Midterm FOC</h5>
                            <p className="card-text">exam.hcmut.edu.vn</p>
                            <p className="card-text">October 9, 2021 1:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="badge bg-info my-3"
                      style={{ maxWidth: "fit-content", textAlign: "left" }}
                    >
                      Term 211
                    </span>
                    <div className="row g-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div className="col-lg-6" key={i}>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Midterm FOC</h5>
                              <p className="card-text">exam.hcmut.edu.vn</p>
                              <p className="card-text">
                                October 9, 2021 1:00 PM
                              </p>
                            </div>
                          </div>
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
                      Term 211
                    </span>
                    <div className="row g-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div className="col-lg-6" key={i}>
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Midterm FOC</h5>
                              <p className="card-text">exam.hcmut.edu.vn</p>
                              <p className="card-text">
                                October 9, 2021 1:00 PM
                              </p>
                            </div>
                          </div>
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
