import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => {
        setEvents(
          data.map(task => ({
            title: task.title,
            start: new Date(task.startDate),
            end: new Date(task.dueDate)
          }))
        );
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>実績管理カレンダー</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
      />
    </div>
  );
}

export default App;
