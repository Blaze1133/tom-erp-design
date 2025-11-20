import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayComponents = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchProject, setSearchProject] = useState('');

  const [payComponents] = useState([
    {
      id: 162,
      editView: true,
      name: 'Absent Deduction',
      payType: 'Deduction',
      cpfApplicable: 'No',
      isLeaveBuyBack: 'No',
      payrollExpenseAccount: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      eslApplied: 'No',
      professionalTaxApplied: 'No',
      paybackUpdateChange: 'No',
      country: 'Singapore',
      epsApplied: 'No'
    },
    {
      id: 187,
      editView: true,
      name: 'Accommodation and Utility',
      payType: 'Deduction',
      cpfApplicable: 'No',
      isLeaveBuyBack: 'No',
      payrollExpenseAccount: '50026 Cost Of Sales : Worker Accommodation & Utilities',
      eslApplied: 'No',
      professionalTaxApplied: 'No',
      paybackUpdateChange: 'No',
      country: 'Singapore',
      epsApplied: 'No'
    },
    {
      id: 70,
      editView: true,
      name: 'Admin Charges',
      payType: 'Deduction',
      cpfApplicable: 'Yes',
      isLeaveBuyBack: 'No',
      payrollExpenseAccount: '50026 Cost Of Sales : Workers-Bond/Insurance/MOM-HR Exp',
      eslApplied: 'No',
      professionalTaxApplied: 'No',
      paybackUpdateChange: 'No',
      country: 'Singapore',
      epsApplied: 'No',
      pfReportTitle: 'ADMIN CHARGES AC 2'
    },
    {
      id: 201,
      editView: true,
      name: 'Advance Salary',
      payType: 'Deduction',
      cpfApplicable: 'No',
      isLeaveBuyBack: 'No',
      payrollExpenseAccount: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      eslApplied: 'No',
      professionalTaxApplied: 'No',
      paybackUpdateChange: 'No',
      country: 'Singapore',
      epsApplied: 'No'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewComponent = (component) => {
    if (onViewClick) {
      onViewClick(component);
    }
  };

  const handleEditComponent = (component) => {
    if (onEditClick) {
      onEditClick(component);
    }
  };

  const handleNewComponent = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-folder"></i>
          <h1>Pay Component List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="">Default</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewComponent}>
            <i className="fas fa-plus"></i>
            New Pay Component
          </button>
        </div>
      </div>

      <div className="list-filters" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '10px'
      }}>
        <div className="filter-group" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button className="btn-icon" title="Edit View" style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 8px',
            fontSize: '11px',
            cursor: 'pointer',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px'
          }}>
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete" style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 8px',
            fontSize: '11px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}>
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export" style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 8px',
            fontSize: '11px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}>
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print" style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 8px',
            fontSize: '11px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}>
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div className="quick-sort" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>QUICK SORT:</span>
            <select className="form-control" style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid #ccc',
              borderRadius: '3px'
            }}>
              <option>7/1/2022 — 31/1/2022</option>
            </select>
          </div>
          <div className="total-count" style={{
            fontSize: '12px',
            fontWeight: '600'
          }}>
            <span>TOTAL: {payComponents.length}</span>
          </div>
        </div>
      </div>

      <div className="table-container" style={{
        maxHeight: '500px',
        overflowY: 'auto',
        overflowX: 'auto',
        border: '1px solid #e0e0e0',
        borderRadius: '4px'
      }}>
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>EDIT | VIEW</th>
              <th>NAME</th>
              <th>ID</th>
              <th>PF APPLIED</th>
              <th>IR8A CODE</th>
              <th>IS LEAVE BUY BACK</th>
              <th>PAYROLL EXPENSE ACCOUNT(DIRECT)</th>
              <th>ESI APPLIED</th>
              <th>PROFESSIONAL TAX APPLIED</th>
              <th>PAYBATCH UPDATE CHANGE</th>
              <th>COUNTRY</th>
              <th>EPF APPLIED</th>
              <th>BONUS APPLIED</th>
              <th>VOLUNTARY EMPLOYER</th>
              <th>IS NHF</th>
              <th>IS TAX APPLIED</th>
              <th>IS 13 MONTH</th>
              <th>IS HRA</th>
              <th>IS BASIC</th>
              <th>STATIC VALUE- CONGO</th>
              <th>NOT APPLICABLE FOR TAX</th>
              <th>PF REPORT TITLE</th>
              <th>SOCIAL SECURITY</th>
              <th>OT APPLICABLE</th>
              <th>IS WELFARE FUND</th>
              <th>PHILIPPIANS HEALTH</th>
              <th>PAG-IBIG FUND CONTRIBUTION</th>
            </tr>
          </thead>
          <tbody>
            {payComponents.map((component) => (
              <tr key={component.id}>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center' }}>
                    <span 
                      style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'none' }}
                      onClick={() => handleEditComponent(component)}
                    >
                      Edit
                    </span>
                    <span>|</span>
                    <span 
                      style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'none' }}
                      onClick={() => handleViewComponent(component)}
                    >
                      View
                    </span>
                  </div>
                </td>
                <td>{component.name}</td>
                <td>{component.id}</td>
                <td>{component.cpfApplicable}</td>
                <td></td>
                <td>{component.isLeaveBuyBack}</td>
                <td>{component.payrollExpenseAccount}</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>{component.country}</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td></td>
                <td>No</td>
                <td>{component.pfReportTitle || ''}</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default ViewPayComponents;
