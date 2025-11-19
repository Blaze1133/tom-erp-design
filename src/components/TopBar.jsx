import React, { useState } from 'react';
import './TopBar.css';

const TopBar = ({ collapsed, setCollapsed }) => {
  const [aiSearch, setAiSearch] = useState('');
  const [menuSearch, setMenuSearch] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRecentActivity, setShowRecentActivity] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, type: 'info', message: 'New purchase order #PO-2024-001 created', time: '5 min ago' },
    { id: 2, type: 'success', message: 'Invoice #INV-2024-045 approved', time: '15 min ago' },
    { id: 3, type: 'warning', message: 'Low stock alert for Item #ITM-123', time: '1 hour ago' },
    { id: 4, type: 'info', message: 'New quotation request received', time: '2 hours ago' },
  ];

  const recentActivities = [
    { id: 1, icon: 'fas fa-file-invoice', action: 'Created Invoice', ref: '#INV-2024-046', time: '10 min ago' },
    { id: 2, icon: 'fas fa-shopping-cart', action: 'Updated Sales Order', ref: '#SO-2024-089', time: '25 min ago' },
    { id: 3, icon: 'fas fa-box', action: 'Received Purchase Order', ref: '#PO-2024-002', time: '1 hour ago' },
    { id: 4, icon: 'fas fa-check-circle', action: 'Approved Quotation', ref: '#QT-2024-112', time: '2 hours ago' },
  ];

  return (
    <div className={`topbar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="topbar-left">
        <div className="search-container">
          <div className="search-box unified-search">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Type to Search"
              value={aiSearch}
              onChange={(e) => setAiSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="topbar-right">

        {/* Notifications */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn notification-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowRecentActivity(false);
              setShowUserMenu(false);
            }}
          >
            <i className="fas fa-bell"></i>
            <span className="notification-badge">4</span>
          </button>
          
          {showNotifications && (
            <div className="dropdown-menu notifications-menu">
              <div className="dropdown-header">
                <h3>Notifications</h3>
                <button className="mark-read-btn">Mark all as read</button>
              </div>
              <div className="dropdown-content">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`notification-item ${notif.type}`}>
                    <div className="notification-icon">
                      <i className={`fas ${
                        notif.type === 'success' ? 'fa-check-circle' :
                        notif.type === 'warning' ? 'fa-exclamation-triangle' :
                        'fa-info-circle'
                      }`}></i>
                    </div>
                    <div className="notification-content">
                      <p className="notification-message">{notif.message}</p>
                      <span className="notification-time">{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <button type="button" className="view-all-link">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn activity-btn"
            onClick={() => {
              setShowRecentActivity(!showRecentActivity);
              setShowNotifications(false);
              setShowUserMenu(false);
            }}
          >
            <i className="fas fa-clock"></i>
          </button>
          
          {showRecentActivity && (
            <div className="dropdown-menu activity-menu">
              <div className="dropdown-header">
                <h3>Recent Activity</h3>
              </div>
              <div className="dropdown-content">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      <i className={activity.icon}></i>
                    </div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <p className="activity-ref">{activity.ref}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <button type="button" className="view-all-link">View all activity</button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn user-btn"
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
              setShowRecentActivity(false);
            }}
          >
            <i className="fas fa-user-circle"></i>
            <span className="user-name">SU</span>
            <i className="fas fa-chevron-down user-dropdown-arrow"></i>
          </button>
          
          {showUserMenu && (
            <div className="dropdown-menu user-menu">
              <div className="dropdown-header user-info">
                <div className="user-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="user-details">
                  <h4>Super User</h4>
                  <p>admin@tom.sg</p>
                </div>
              </div>
              <div className="dropdown-content">
                <button type="button" className="dropdown-item">
                  <i className="fas fa-user"></i>
                  <span>My Profile</span>
                </button>
                <button type="button" className="dropdown-item">
                  <i className="fas fa-cog"></i>
                  <span>Settings</span>
                </button>
                <button type="button" className="dropdown-item">
                  <i className="fas fa-question-circle"></i>
                  <span>Help & Support</span>
                </button>
                <div className="dropdown-divider"></div>
                <button type="button" className="dropdown-item logout">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showNotifications || showRecentActivity || showUserMenu) && (
        <div 
          className="topbar-overlay" 
          onClick={() => {
            setShowNotifications(false);
            setShowRecentActivity(false);
            setShowUserMenu(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default TopBar;
