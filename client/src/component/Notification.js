import React, { useState } from 'react';

import {
  Note,
  SmallNote,
} from './notify_components/All';

import Calendar from 'react-calendar';

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
    <div class='container-fluid' id='notification'>
      <div class='row'>
        <div class='col-8'>
          <h3 class='text-white bg-info rounded-pill col-4'>
            <i class="bi bi-alarm-fill"></i>
            {(currentDay.toDateString() == new Date().toDateString()) ? 'Today' : currentDay.toDateString()}
          </h3>
          <div class='row'>
            {todayNoteData.map(note => (<Note data={note} />))}
          </div>
        </div>
        <div class='col'>
          <Calendar
            value={currentDay}
            onChange={changeDay}
          />
        </div>
      </div>

      <h3 class='text-white bg-info rounded-pill col-2'><i class="bi bi-calendar-minus-fill"></i> This week</h3>
      <div class='row'>
        {week.map(day => (
          <div class='col'>
            <h5>{day}</h5>
            {weeklyNoteData[day].map(note => (<SmallNote data={note} />))}
          </div>
        ))}
      </div>
    </div>
  );
}

