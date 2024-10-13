// src/components/Dashboard/QuickLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
      <ul>
        <li className="mb-2">
          <Link to="books" className="text-blue-500">Manage Books</Link>
        </li>
        <li className="mb-2">
          <Link to="members" className="text-blue-500">Manage Members</Link>
        </li>
        <li className="mb-2">
          <Link to="loans" className="text-blue-500">View Loans</Link>
        </li>
        <li className="mb-2">
          <Link to="settings" className="text-blue-500">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
