import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeeExit = ({ exitData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState(exitData || {
    inactive: false,
    employee: '',
    hireDate: '',
    resignedDate: '',
    noticePeriodDays: 30,
    finalReleaseDate: '',
    exitType: '',
    reasonForResignation: '',
    commentsByEmployee: '',
    commentsByReviewer: '',
    remarksByHr: '',
    upDocumentsProvided: ''
  });

  const [departmentApprovals, setDepartmentApprovals] = useState([]);
  const [showAddApproval, setShowAddApproval] = useState(false);
  const [newApproval, setNewApproval] = useState({
    department: '',
    approvalReview: '',
    currentAssetReceivedList: '',
    departmentRemarks: ''
  });

  const departments = [
    'TOM : Admin',
    'TOM : Electrical and E&I',
    'TOM : Facility',
    'TOM : Finance',
    'TOM : Finance : Internal Transfer',
    'TOM : Human Resource',
    'TOM : IT',
    'TOM : Logistic',
    'TOM : Operating',
    'TOM : Purchase',
    'TOM : Sales and Marketing',
    'TOM : Security',
    'TOM : Engineering',
    'TOM : Production',
    'MEP MARINE',
    'MEP',
    'O&G',
    'Construction'
  ];

  const exitTypes = [
    'Voluntary',
    'Involuntary',
    'Retirement',
    'End of Contract',
    'Termination'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddApproval = () => {
    if (newApproval.department) {
      setDepartmentApprovals([...departmentApprovals, { ...newApproval, id: Date.now() }]);
      setNewApproval({ department: '', approvalReview: '', currentAssetReceivedList: '', departmentRemarks: '' });
      setShowAddApproval(false);
      showToast('Department approval added successfully!', 'success');
    }
  };

  const handleCancelAdd = () => {
    setNewApproval({ department: '', approvalReview: '', currentAssetReceivedList: '', departmentRemarks: '' });
    setShowAddApproval(false);
  };

  const handleSave = () => {
    if (!formData.employee) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee Exit Process saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-sign-out-alt"></i>
          <div>
            <h1>Employee Exit Process</h1>
            <p className="page-subtitle">{exitData ? exitData.employee : 'New Exit Process'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.inactive} onChange={(e) => handleInputChange('inactive', e.target.checked)} />
                  INACTIVE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE</label>
                <select className="form-control" value={formData.employee} onChange={(e) => handleInputChange('employee', e.target.value)}>
                  <option value="">Select Employee</option>
                  <option value="222267 Demo employee">222267 Demo employee</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">HIRE DATE</label>
                <input type="date" className="form-control" value={formData.hireDate} onChange={(e) => handleInputChange('hireDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">RESIGNED DATE</label>
                <input type="date" className="form-control" value={formData.resignedDate} onChange={(e) => handleInputChange('resignedDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">NOTICE PERIOD DAYS</label>
                <input type="number" className="form-control" value={formData.noticePeriodDays} onChange={(e) => handleInputChange('noticePeriodDays', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">FINAL RELEASE DATE</label>
                <input type="date" className="form-control" value={formData.finalReleaseDate} onChange={(e) => handleInputChange('finalReleaseDate', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">EXIT TYPE</label>
                <select className="form-control" value={formData.exitType} onChange={(e) => handleInputChange('exitType', e.target.value)}>
                  <option value="">Select Type</option>
                  {exitTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">REASON FOR RESIGNATION</label>
                <textarea className="form-control" value={formData.reasonForResignation} onChange={(e) => handleInputChange('reasonForResignation', e.target.value)} rows="4" />
              </div>
              <div className="form-group">
                <label className="form-label">COMMENTS BY EMPLOYEE</label>
                <textarea className="form-control" value={formData.commentsByEmployee} onChange={(e) => handleInputChange('commentsByEmployee', e.target.value)} rows="4" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">COMMENTS BY REVIEWER</label>
                <textarea className="form-control" value={formData.commentsByReviewer} onChange={(e) => handleInputChange('commentsByReviewer', e.target.value)} rows="4" />
              </div>
              <div className="form-group">
                <label className="form-label">REMARKS BY HR</label>
                <textarea className="form-control" value={formData.remarksByHr} onChange={(e) => handleInputChange('remarksByHr', e.target.value)} rows="4" />
              </div>
              <div className="form-group">
                <label className="form-label">U/P DOCUMENTS PROVIDED</label>
                <input type="text" className="form-control" value={formData.upDocumentsProvided} onChange={(e) => handleInputChange('upDocumentsProvided', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Department Approvals Table */}
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', border: '1px solid #e8e8e8', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 600 }}>Department Approvals</h3>
          
          {showAddApproval && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">DEPARTMENT</label>
                  <select className="form-control" value={newApproval.department} onChange={(e) => setNewApproval({...newApproval, department: e.target.value})}>
                    <option value="">Select Department</option>
                    {departments.map((dept, idx) => (
                      <option key={idx} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">APPROVAL REVIEW</label>
                  <input type="text" className="form-control" value={newApproval.approvalReview} onChange={(e) => setNewApproval({...newApproval, approvalReview: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">CURRENT ASSET RECEIVED LIST</label>
                  <input type="text" className="form-control" value={newApproval.currentAssetReceivedList} onChange={(e) => setNewApproval({...newApproval, currentAssetReceivedList: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">DEPARTMENT REMARKS</label>
                  <input type="text" className="form-control" value={newApproval.departmentRemarks} onChange={(e) => setNewApproval({...newApproval, departmentRemarks: e.target.value})} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-primary" onClick={handleAddApproval}><i className="fas fa-check"></i> Add</button>
                <button className="btn btn-secondary" onClick={handleCancelAdd}><i className="fas fa-times"></i> Cancel</button>
                <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
                <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
              </div>
            </div>
          )}

          {!showAddApproval && (
            <div style={{ marginBottom: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setShowAddApproval(true)}>Add Department Approval</button>
            </div>
          )}

          <table className="detail-items-table">
            <thead>
              <tr>
                <th>DEPARTMENT</th>
                <th>APPROVAL REVIEW</th>
                <th>CURRENT ASSET RECEIVED LIST</th>
                <th>DEPARTMENT REMARKS</th>
              </tr>
            </thead>
            <tbody>
              {departmentApprovals.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No department approvals added yet
                  </td>
                </tr>
              ) : (
                departmentApprovals.map((approval) => (
                  <tr key={approval.id}>
                    <td>{approval.department}</td>
                    <td>{approval.approvalReview}</td>
                    <td>{approval.currentAssetReceivedList}</td>
                    <td>{approval.departmentRemarks}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployeeExit;
