// src/components/Dashboard/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-xl">{value}</p>
    </div>
  );
};

export default StatsCard;
