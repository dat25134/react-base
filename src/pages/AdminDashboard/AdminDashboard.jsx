import React from 'react';
import Layout from '../../components/layout/Layout';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234' },
    { label: 'Active Users', value: '891' },
    { label: 'Total Orders', value: '456' },
    { label: 'Revenue', value: '$12,345' },
  ];

  return (
    <Layout>
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.label}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="content-section">
            <h2>Recent Activity</h2>
            <p>No recent activity to display.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard; 