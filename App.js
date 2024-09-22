// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventCreate from './components/EventCreate';
import EventDetails from './components/EventDetails';
import './App.css'; // Import your CSS styles here
import './EventCreate.css'
import './EventDetails.css';
import './EventList.css';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/create-event" element={<EventCreate />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
