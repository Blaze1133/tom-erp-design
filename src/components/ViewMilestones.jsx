import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMilestones = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [milestones] = useState([
    {
      id: 1,
      milestoneId: 'MS001',
      milestoneName: 'MEP Phase 1 Completion',
      project: 'PRJ001 - MEP Installation Project',
      targetDate: '2024-12-15',
      actualDate: '',
      status: 'In Progress',
      completionPercentage: 65,
      description: 'Complete all MEP installations for Phase 1'
    },
    {
      id: 2,
      milestoneId: 'MS002',
      milestoneName: 'Offshore Platform Module Delivery',
      project: 'PRJ002 - Offshore Platform Module',
      targetDate: '2024-12-10',
      actualDate: '',
      status: 'At Risk',
      completionPercentage: 80,
      description: 'Final delivery of offshore platform module'
    },
    {
      id: 3,
      milestoneId: 'MS003',
      milestoneName: 'Hull Section Fabrication Complete',
      project: 'PRJ003 - Shipyard Fabrication',
      targetDate: '2024-11-30',
      actualDate: '2024-11-28',
      status: 'Completed',
      completionPercentage: 100,
      description: 'Complete fabrication of hull section'
    },
    {
      id: 4,
      milestoneId: 'MS004',
      milestoneName: 'Piping System Installation - Phase 1',
      project: 'PRJ004 - Industrial Piping System',
      targetDate: '2024-12-20',
      actualDate: '',
      status: 'In Progress',
      completionPercentage: 45,
      description: 'Install main piping system for Phase 1'
    },
    {
      id: 5,
      milestoneId: 'MS005',
      milestoneName: 'Refinery Inspection Approval',
      project: 'PRJ005 - Refinery Maintenance',
      targetDate: '2024-12-25',
      actualDate: '',
      status: 'Not Started',
      completionPercentage: 0,
      description: 'Complete inspection and obtain approval'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewMilestone = (milestone) => {
    if (onViewClick) {
      onViewClick(milestone);
    }
  };

  const handleEditMilestone = (milestone) => {
    if (onEditClick) {
      onEditClick(milestone);
    }
  };

  const handleNewMilestone = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredMilestones = milestones.filter(milestone =>
    milestone.milestoneName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    milestone.milestoneId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    milestone.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-flag-checkered"></i>
          <h1>Milestones</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>SEARCH</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
            placeholder="Search milestones..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewMilestone}>
            <i className="fas fa-plus"></i>
            New Milestone
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Milestones</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Not Started</option>
              <option>At Risk</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredMilestones.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>MILESTONE ID</th>
              <th style={{ width: '20%' }}>MILESTONE NAME</th>
              <th style={{ width: '18%' }}>PROJECT</th>
              <th style={{ width: '10%' }}>TARGET DATE</th>
              <th style={{ width: '10%' }}>ACTUAL DATE</th>
              <th style={{ width: '10%' }}>STATUS</th>
              <th style={{ width: '12%' }}>COMPLETION %</th>
            </tr>
          </thead>
          <tbody>
            {filteredMilestones.map((milestone) => (
              <tr key={milestone.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditMilestone(milestone)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewMilestone(milestone)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{milestone.milestoneId}</td>
                <td>{milestone.milestoneName}</td>
                <td>{milestone.project}</td>
                <td>{milestone.targetDate}</td>
                <td>{milestone.actualDate || '-'}</td>
                <td>
                  <span className={`status-badge ${milestone.status.toLowerCase().replace(' ', '-')}`}>
                    {milestone.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '8px', 
                      backgroundColor: '#e0e0e0', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${milestone.completionPercentage}%`, 
                        backgroundColor: milestone.completionPercentage === 100 ? '#28a745' : '#4a90e2',
                        transition: 'width 0.3s'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', minWidth: '35px' }}>{milestone.completionPercentage}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ViewMilestones;
