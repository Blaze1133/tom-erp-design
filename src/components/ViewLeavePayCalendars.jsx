import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLeavePayCalendars = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInactive, setShowInactive] = useState(false);

  const [calendars] = useState([
    { id: 1, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', name: '2021 (MEP)', year: 2021, startDate: '1/1/2021', endDate: '31/12/2021' },
    { id: 2, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', name: '2021 (TDO)', year: 2021, startDate: '1/1/2021', endDate: '31/12/2021' },
    { id: 3, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', name: '2021 (TEA)', year: 2021, startDate: '1/1/2021', endDate: '31/12/2021' },
    { id: 4, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd', name: '2021 (TMO)', year: 2021, startDate: '1/1/2021', endDate: '31/12/2021' },
    { id: 5, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd', name: '2021 (TSV)', year: 2021, startDate: '1/1/2021', endDate: '31/12/2021' },
    { id: 6, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', name: '2022 MEP', year: 2022, startDate: '1/1/2022', endDate: '31/12/2022' },
    { id: 7, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', name: '2022 TDO', year: 2022, startDate: '1/1/2022', endDate: '31/12/2022' },
    { id: 8, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', name: '2022 TEA', year: 2022, startDate: '1/1/2022', endDate: '31/12/2022' },
    { id: 9, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd', name: '2022 TMO', year: 2022, startDate: '1/1/2022', endDate: '31/12/2022' },
    { id: 10, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd', name: '2022 TSV', year: 2022, startDate: '1/1/2022', endDate: '31/12/2022' },
    { id: 11, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', name: 'MEP 2023', year: 2023, startDate: '1/1/2023', endDate: '31/12/2023' },
    { id: 12, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', name: 'MEP 2024', year: 2024, startDate: '1/1/2024', endDate: '31/12/2024' },
    { id: 13, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', name: 'MEP 2025', year: 2025, startDate: '1/1/2025', endDate: '31/12/2025' },
    { id: 14, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', name: 'TDQ 2023', year: 2023, startDate: '1/1/2023', endDate: '31/12/2023' },
    { id: 15, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', name: 'TDQ 2024', year: 2024, startDate: '1/1/2024', endDate: '31/12/2024' },
    { id: 16, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', name: 'TDQ 2025', year: 2025, startDate: '1/1/2025', endDate: '31/12/2025' },
    { id: 17, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', name: 'TEA 2023', year: 2023, startDate: '1/1/2023', endDate: '31/12/2023' },
    { id: 18, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', name: 'TEA 2024', year: 2024, startDate: '1/1/2024', endDate: '31/12/2024' },
    { id: 19, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', name: 'TEA 2025', year: 2025, startDate: '1/1/2025', endDate: '31/12/2025' },
    { id: 20, subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd', name: 'TMO 2023', year: 2023, startDate: '1/1/2023', endDate: '31/12/2023' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (calendar) => {
    if (onViewClick) {
      onViewClick(calendar);
    }
  };

  const handleEdit = (calendar) => {
    if (onEditClick) {
      onEditClick(calendar);
    }
  };

  const handleNewCalendar = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredCalendars = calendars.filter(cal => {
    const matchesSearch = cal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cal.subsidiary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-calendar-alt"></i>
          <h1>Leave/Pay Calendar List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <button className="btn btn-secondary">Edit View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewCalendar}>
            New Leave/Pay Calendar
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
          <div className="list-total">
            TOTAL: {filteredCalendars.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '40%' }}>SUBSIDIARY</th>
              <th style={{ width: '20%' }}>NAME ▲</th>
              <th style={{ width: '10%' }}>YEAR</th>
              <th style={{ width: '11%' }}>START DATE</th>
              <th style={{ width: '11%' }}>END DATE</th>
            </tr>
          </thead>
          <tbody>
            {filteredCalendars.map((calendar) => (
              <tr key={calendar.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(calendar)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(calendar)}
                  >
                    View
                  </button>
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
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewLeavePayCalendars;
