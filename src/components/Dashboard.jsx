import React, { useState } from 'react';

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(true);

  const stats = [
    {
      title: 'Total Sales',
      value: '$4,500',
      change: '12% from last month',
      positive: true,
      icon: 'fas fa-shopping-cart',
    },
    {
      title: 'Sales Overview',
      value: '+24 Orders',
      change: 'This month',
      positive: true,
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Total Expenses',
      value: '$2,300',
      change: '8% from last month',
      positive: false,
      icon: 'fas fa-receipt',
    },
  ];

  const activities = [
    {
      icon: 'fas fa-shopping-cart',
      text: 'New sale recorded for $450',
      time: '2h ago',
      color: '#4a90e2',
    },
    {
      icon: 'fas fa-receipt',
      text: 'Expense report submitted',
      time: '5h ago',
      color: '#9b59b6',
    },
    {
      icon: 'fas fa-file-alt',
      text: 'Invoice #1234 sent to client',
      time: '1d ago',
      color: '#3498db',
    },
    {
      icon: 'fas fa-dollar-sign',
      text: 'Payment received for Invoice #1230',
      time: '2d ago',
      color: '#27ae60',
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        
        {showAlert && (
          <div className="alert">
            <div className="alert-icon">
              <i className="fas fa-exclamation-circle" style={{ fontSize: '24px' }}></i>
            </div>
            <div className="alert-content">
              <div className="alert-title">Attention Required</div>
              <div className="alert-message">3 pending approvals need your review</div>
            </div>
            <button className="alert-close" onClick={() => setShowAlert(false)}>
              <i className="fas fa-times" style={{ fontSize: '20px' }}></i>
            </button>
          </div>
        )}
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-title">{stat.title}</span>
              <div className="stat-icon">
                <i className={stat.icon} style={{ fontSize: '24px' }}></i>
              </div>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.positive ? '' : 'negative'}`}>
              <i className={`fas fa-arrow-${stat.positive ? 'up' : 'down'}`} style={{ fontSize: '16px' }}></i>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="activity-section">
        <div className="activity-header">
          <i className="fas fa-bolt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h2>Recent Activity</h2>
        </div>
        <ul className="activity-list">
          {activities.map((activity, index) => (
            <li key={index} className="activity-item">
              <div className="activity-icon" style={{ backgroundColor: `${activity.color}15`, color: activity.color }}>
                <i className={activity.icon} style={{ fontSize: '20px' }}></i>
              </div>
              <div className="activity-details">
                <div className="activity-text">{activity.text}</div>
              </div>
              <div className="activity-time">{activity.time}</div>
            </li>
          ))}
        </ul>
      </div>

      <button className="fab">
        <i className="fas fa-plus" style={{ fontSize: '24px' }}></i>
      </button>
    </div>
  );
};

export default Dashboard;
