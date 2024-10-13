// src/components/Dashboard/RecentActivities.jsx
import React from 'react';

const RecentActivities = () => {
  const activities = [
    { id: 1, action: 'Book "The Great Gatsby" checked out by John Doe', date: '2024-09-10' },
    { id: 2, action: 'Book "1984" returned by Jane Smith', date: '2024-09-09' },
    // Add more activities here
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id} className="mb-2">
            <p className="text-sm">{activity.action}</p>
            <p className="text-xs text-gray-500">{activity.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
