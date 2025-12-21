import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCalendarMasters = ({ onViewClick, onNewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchText, setSearchText] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  const calendars = [
    {
      id: 1,
      name: '2021 (MEP)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 2,
      name: '2021 (TDQ)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (DQ) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 3,
      name: '2021 (TEA)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Electric & Automation Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 4,
      name: '2021 (TMO)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Marine Offshore (S) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 5,
      name: '2021 (TSV)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (SV) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 6,
      name: '2022 MEP',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 7,
      name: '2022 TDQ',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (DQ) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 8,
      name: '2022 TEA',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Electric & Automation Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 9,
      name: '2022 TMO',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Marine Offshore (S) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 10,
      name: '2022 TSV',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (SV) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 11,
      name: 'MEP 2023',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2023,
      startDate: '1/1/2023',
      endDate: '31/12/2023',
      inactive: false
    },
    {
      id: 12,
      name: 'MEP 2024',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2024,
      startDate: '1/1/2024',
      endDate: '31/12/2024',
      inactive: false
    },
    {
      id: 13,
      name: 'MEP 2025',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2025,
      startDate: '1/1/2025',
      endDate: '31/12/2025',
      inactive: false
    }
  ];

  const filteredCalendars = calendars.filter(calendar => {
    const matchesSearch = calendar.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         calendar.subsidiary.toLowerCase().includes(searchText.toLowerCase());
    const matchesYear = filterYear === 'all' || calendar.year.toString() === filterYear;
    return matchesSearch && matchesYear;
  });

  const handleView = (calendar) => {
    if (onViewClick) onViewClick(calendar);
  };

  const handleEdit = (calendar) => {
    if (onEditClick) onEditClick(calendar);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-calendar-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Leave/Pay Calendar List</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="all">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={() => onNewClick && onNewClick()}>
          <i className="fas fa-plus"></i> New Calendar
        </button>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Edit">
            <i className="fas fa-edit"></i> EDIT
          </button>
          <button className="toolbar-btn" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="toolbar-btn" title="Attach">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>All Calendars</option>
            <option>By Year</option>
            <option>By Subsidiary</option>
            <option>By Name</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {filteredCalendars.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>EDIT | VIEW</th>
              <th>SUBSIDIARY</th>
              <th>NAME</th>
              <th>YEAR</th>
              <th>START DATE</th>
              <th>END DATE</th>
            </tr>
          </thead>
          <tbody>
            {filteredCalendars.map((calendar) => (
              <tr key={calendar.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(calendar)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(calendar)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>{calendar.subsidiary}</td>
                <td>{calendar.name}</td>
                <td>{calendar.year}</td>
                <td>{calendar.startDate}</td>
                <td>{calendar.endDate}</td>
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

export default ViewCalendarMasters;
