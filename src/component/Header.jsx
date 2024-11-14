// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">User Activity Dashboard</h1>
      <div className="text-gray-600">Admin Profile</div>
    </header>
  );
}

export default Header;
