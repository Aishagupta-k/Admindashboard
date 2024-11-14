// UserActivityChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function UserActivityChart({ data }) {
  // Process the data to get activity count by day
  const activityByDate = data.reduce((acc, item) => {
    const date = new Date(item.created_at).toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(activityByDate).map(date => ({
    date,
    count: activityByDate[date],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#4A90E2" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UserActivityChart;
