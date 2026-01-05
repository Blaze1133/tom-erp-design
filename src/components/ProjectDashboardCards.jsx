import React from 'react';
import './ProjectDashboardCards.css';

const ProjectDashboardCards = () => {
  return (
    <div className="project-masters-section">
      <div className="section-header">
        <div className="section-title">
          <i className="fas fa-project-diagram section-icon"></i>
          <h2>Project Masters</h2>
        </div>
        <div className="section-actions">
          <button className="action-btn">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="action-btn">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="action-btn">
            <i className="fas fa-history"></i>
            Audit Trail
          </button>
        </div>
      </div>
      
      <div className="stats-cards-container">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">ACTIVE PROJECTS</div>
              <div className="stat-value">4</div>
              <div className="stat-subtitle positive">↑ 5 Total Projects</div>
            </div>
            <div className="stat-icon blue">
              <i className="fas fa-project-diagram"></i>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">OVERALL COMPLETION</div>
              <div className="stat-value">57%</div>
              <div className="stat-subtitle">76 of 133 tasks completed</div>
            </div>
            <div className="stat-icon green">
              <i className="fas fa-chart-pie"></i>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">COMPLETED TASKS</div>
              <div className="stat-value">76</div>
              <div className="stat-subtitle positive">✔ On Track</div>
            </div>
            <div className="stat-icon green">
              <i className="fas fa-check"></i>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-info">
              <div className="stat-title">DELAYED TASKS</div>
              <div className="stat-value">16</div>
              <div className="stat-subtitle negative">Needs Attention</div>
            </div>
            <div className="stat-icon red">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboardCards;
