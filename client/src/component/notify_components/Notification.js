import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Note,
  SmallNote,
} from './All';

import {
  Sidebar,
  Search,
  User
} from '../navigation_sidebar/All'
import './css.css'
import Calendar from 'react-calendar';
import Logo from '../login_signup_home/imgs/logo.jpg';

const todayNoteData = [{
  name: 'Do homework',
  description: 'Complete homeworks for sofware engineering',
  time: '08:00 AM',
  tag: 'Study'
}, {
  name: 'Battlepass',
  description: 'Complete battlepass daily mission',
  time: '10:00 AM',
  tag: 'Gaming'
}, {
  name: 'Prepare for lunch',
  description: 'Buy some pork and rosemary for luch',
  time: '10:30 AM',
  tag: 'Grocery'
}, {
  name: 'Workout',
  description: '100 push up go brrr',
  time: '04:30 AM',
  tag: 'Workout'
}]

const weeklyNoteData = {
  'Sunday': [
    {
      name: 'Note1',
      description: 'This is note 1',
      day: '10-10-2021',
      time: '10:00 AM',
      tag: 'Tag1'
    }
  ],
  'Monday': [
    {
      name: 'Note2',
      description: 'This is note 2',
      day: '11-10-2021',
      time: '10:00 AM',
      tag: 'Tag2'
    }
  ],
  'Tuesday': [
    {
      name: 'Note3',
      description: 'This is note 3',
      day: '12-10-2021',
      time: '10:00 AM',
      tag: 'Tag3'
    },
    {
      name: 'Note3.1',
      description: 'This is note 3.1',
      day: '12-10-2021',
      time: '10:00 AM',
      tag: 'Tag3'
    }
  ],
  'Wednesday': [
    {
      name: 'Note 4',
      description: 'This is note 4',
      day: '13-10-2021',
      time: '10:00 AM',
      tag: 'Tag4'
    }
  ],
  'Thursday': [
    {
      name: 'Note 5',
      description: 'This is note 5',
      day: '14-10-2021',
      time: '10:00 AM',
      tag: 'Tag3'
    },
  ],
  'Friday': [
    {
      name: 'Note 6',
      description: 'This is note 6',
      day: '15-10-2021',
      time: '10:00 AM',
      tag: 'Tag2'
    },
    {
      name: 'Note 6',
      description: 'This is note 6',
      day: '15-10-2021',
      time: '10:00 AM',
      tag: 'Tag2'
    },
    {
      name: 'Note 6',
      description: 'This is note 6',
      day: '15-10-2021',
      time: '10:00 AM',
      tag: 'Tag2'
    },
    {
      name: 'Note 6',
      description: 'This is note 6',
      day: '15-10-2021',
      time: '10:00 AM',
      tag: 'Tag2'
    }
  ],
  'Saturday': [
    {
      name: 'Note 7',
      description: 'This is note 7',
      day: '16-10-2021',
      time: '10:00 AM',
      tag: 'Tag1'
    }
  ]
};

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Notification() {
  const [currentDay, changeDay] = useState(new Date());

  return (
    <div id='notification'>
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

        <button class='btn btn-outline-light col-1'>
          <i class="bi bi-box-arrow-in-left"></i>
        </button>

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
              {todayNoteData.map(note => (<Note data={note} />))}
            </div>

          </div>
          <div class='col justify-self-center text-info' id='calendar'>
            <Calendar
              value={currentDay}
              onChange={changeDay}
            />
          </div>
        </div>
      </div>
      <br />
      <div class='container-fluid'>
        <button class='btn text-light btn-info rounded-pill offset-md-1'>
          <i class="bi bi-calendar-minus-fill"> </i>
          This week
        </button>
        <div class='row'>
          {week.map(day => (
            <div class='col border border-info'>
              <h5 class='text-info text-center'>{day}</h5>
              {weeklyNoteData[day].map(note => (<SmallNote data={note} />))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

