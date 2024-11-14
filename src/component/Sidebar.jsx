// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5 space-y-4">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-gray-700">User Activity</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
