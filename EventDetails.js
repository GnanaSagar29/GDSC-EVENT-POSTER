// src/components/EventDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event details', error);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.body}</p>
      <p><strong>Date:</strong> September 25, 2021</p>
      <p><strong>Location:</strong> Orlando, FL</p>
      <img src="https://previews.customer.envatousercontent.com/files/308521832/Final%20Presentation%20single.jpg" alt="Event" />
    </div>
  );
};

export default EventDetails;
