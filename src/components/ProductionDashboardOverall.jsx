import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ProductionDashboardOverall = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Module statistics data
  const moduleStats = [
    {
      id: 1,
      title: 'Fabrication Completed',
      count: 407,
      total: 407,
      color: '#ff9800'
    },
    {
      id: 2,
      title: 'M&E Services Completed',
      count: 407,
      total: 407,
      color: '#ff9800'
    },
    {
      id: 3,
      title: 'Delivery Completed',
      count: 406,
      total: 407,
      color: '#ff9800'
    },
    {
      id: 4,
      title: 'Installations Complete',
      count: 91,
      total: 407,
      color: '#ff9800'
    },
    {
      id: 5,
      title: 'Final QA/QC Completed',
      count: 77,
      total: 407,
      color: '#ff9800'
    },
    {
      id: 6,
      title: 'EAP Module Received',
      count: 0,
      total: 407,
      color: '#e0e0e0'
    }
  ];

  const getProgressPercentage = (count, total) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  const CircularProgress = ({ count, total, color, size = 180 }) => {
    const percentage = getProgressPercentage(count, total);
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="12"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        {/* Center text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#374151' }}>
            {count}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-pie"></i>
          <h1>DASHBOARD - ALL MODULES</h1>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary">
            <i className="fas fa-sync-alt"></i>
            Refresh
          </button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label>SEARCH</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: '300px' }}
              placeholder="Search modules..."
            />
          </div>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={() => showToast('Export functionality coming soon!')}>
            <i className="fas fa-download"></i>
            Export Report
          </button>
        </div>
      </div>

      <div className="info-bar" style={{
        backgroundColor: '#f8f9fa',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151' }}>
          No. of Modules : <span style={{ color: '#4a90e2' }}>407</span>
        </div>
      </div>

      {/* Module Statistics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {moduleStats.map((stat) => (
          <div
            key={stat.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {/* Left side - Title */}
            <div style={{ flex: '1' }}>
              <h3 style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#374151',
                lineHeight: '1.5'
              }}>
                {stat.title}
              </h3>
            </div>

            {/* Right side - Circular Progress */}
            <div style={{ flex: '0 0 auto' }}>
              <CircularProgress
                count={stat.count}
                total={stat.total}
                color={stat.color}
                size={180}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Status All Modules Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#374151'
          }}>
            Status All Modules
          </h2>
          <button
            className="btn btn-danger"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem'
            }}
          >
            <i className="fas fa-eye"></i>
            View Details
          </button>
        </div>

        {/* Module status table */}
        <div className="enquiries-table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>Module No.</th>
                <th>Fabrication</th>
                <th>M&E Assembly (Onsite...)</th>
                <th>M&E Assembly Percentage</th>
                <th>Testing & Alignment</th>
                <th>Packaging</th>
                <th>Delivery</th>
                <th>Anchoring</th>
                <th>Hoisting</th>
                <th>Positioning...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-number">L3E-DFMA-015</td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>100.00%</td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
                <td>
                  <span className="status-badge" style={{
                    backgroundColor: '#ffcdd2',
                    color: '#d32f2f',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Not Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ProductionDashboardOverall;
