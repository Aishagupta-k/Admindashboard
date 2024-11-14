// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserActivityTable from './UserActivityTable';
import UserActivityChart from './UserActivityChart';

function Dashboard() {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GitHub API for public events
    axios.get('https://api.github.com/events')
      .then(response => {
        setActivityData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 grid gap-4">
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold">User Activity Overview</h2>
        {loading ? <p>Loading...</p> : <UserActivityChart data={activityData} />}
      </div>
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold">Detailed Activity Logs</h2>
        {loading ? <p>Loading...</p> : <UserActivityTable data={activityData} />}
      </div>
    </div>
  );
}

export default Dashboard;
