// src/components/EventCreate.js

import React, { useState } from 'react';
import axios from 'axios';

const EventCreate = () => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    imageUrl: ''
  });

  const [createdEvent, setCreatedEvent] = useState(null); // State to store the created event

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', event);
      setCreatedEvent(response.data); // Set the created event in state
      alert('Event Created!');
      // Reset form after submission
      setEvent({
        title: '',
        date: '',
        location: '',
        description: '',
        imageUrl: ''
      });
    } catch (error) {
      console.error('Error creating event', error);
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={event.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={event.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={event.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Create Event</button>
      </form>

      {/* Render created event details if available */}
      {createdEvent && (
        <div className="created-event">
          <h3>Created Event:</h3>
          <p><strong>Title:</strong> {createdEvent.title}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Description:</strong> {event.description}</p>
          {event.imageUrl && (
            <img src={event.imageUrl} alt="Event" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default EventCreate;
