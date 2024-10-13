// src/components/Dashboard/UpcomingEvents.jsx
import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: 'Book Club Meeting', date: '2024-09-15' },
    { id: 2, title: 'Author Talk: Jane Austen', date: '2024-09-20' },
    // Add more events here
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-2">
            <p className="text-sm">{event.title}</p>
            <p className="text-xs text-gray-500">{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
