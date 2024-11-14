// AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
