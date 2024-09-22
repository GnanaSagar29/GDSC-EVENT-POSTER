// src/components/EventList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <Link to="/create-event">Create Event</Link>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              <h3>{event.title}</h3>
              <p>{event.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
