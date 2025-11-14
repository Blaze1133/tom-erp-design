import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateAssetIssue = ({ assetData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState(assetData || {
    id: '',
    employee: '',
    issueType: 'Allocation',
    assetName: 'Laptop',
    description: '',
    dateOfIssue: '1/9/2021',
    noOfDays: '',
    collectionDate: '',
    dateOfReturn: '',
    status: 'Issued',
    subsidiary: '',
    country: 'Singapore',
    requestDate: '28/9/2021',
    requestingDepartment: 'TOM : Admin',
    issuingDepartment: '',
    memo: '',
    supervisor: 'vikram',
    hrDept: '',
    itAdmin: ''
  });

  const [assetItems, setAssetItems] = useState([
    { id: 1, issueType: 'Allocation', assetName: 'Laptop', description: '', status: 'Issued', dateOfIssue: '1/9/2021', dateOfReturn: '' }
  ]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

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
    'TOM : TOM INTERNALS: TOM HR',
    'TOM : Nampak Reinsure',
    'TOM : Auction Handover',
    'TOM : Engineering',
    'TOM : Production',
    'MEP MARINE',
    'MEP',
    'O&G'
  ];

  const statusOptions = [
    '- New -',
    'Issued',
    'Returned',
    'Pending For Approval',
    'Approve By Dept',
    'Pending for HR',
    'Approve By HR'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.employee || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Asset Issue saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-box"></i>
          <div>
            <h1>Asset Issue to Employee</h1>
            <p className="page-subtitle">{assetData ? assetData.id : 'New Asset Issue'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">ID</label>
                <input type="text" className="form-control" value={formData.id} onChange={(e) => handleInputChange('id', e.target.value)} disabled style={{ background: '#f5f5f5' }} />
              </div>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE</label>
                <select className="form-control" value={formData.employee} onChange={(e) => handleInputChange('employee', e.target.value)}>
                  <option value="">Select Employee</option>
                  <option value="222267 Demo employee">222267 Demo employee</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">ISSUE TYPE</label>
                <select className="form-control" value={formData.issueType} onChange={(e) => handleInputChange('issueType', e.target.value)}>
                  <option value="Allocation">Allocation</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">ASSET NAME</label>
                <select className="form-control" value={formData.assetName} onChange={(e) => handleInputChange('assetName', e.target.value)}>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Tablet">Tablet</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">DESCRIPTION</label>
                <textarea className="form-control" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows="3" />
              </div>
              <div className="form-group">
                <label className="form-label required">DATE OF ISSUE</label>
                <input type="text" className="form-control" value={formData.dateOfIssue} onChange={(e) => handleInputChange('dateOfIssue', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">NO OF DAYS</label>
                <input type="text" className="form-control" value={formData.noOfDays} onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">COLLECTION DATE</label>
                <input type="text" className="form-control" value={formData.collectionDate} onChange={(e) => handleInputChange('collectionDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">DATE OF RETURN</label>
                <input type="text" className="form-control" value={formData.dateOfReturn} onChange={(e) => handleInputChange('dateOfReturn', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">STATUS</label>
                <select className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                  {statusOptions.map((status, idx) => (
                    <option key={idx} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">SUBSIDIARY</label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((sub, idx) => (
                    <option key={idx} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">COUNTRY</label>
                <select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}>
                  <option value="Singapore">Singapore</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">REQUEST DATE</label>
                <input type="text" className="form-control" value={formData.requestDate} onChange={(e) => handleInputChange('requestDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">REQUESTING DEPARTMENT</label>
                <select className="form-control" value={formData.requestingDepartment} onChange={(e) => handleInputChange('requestingDepartment', e.target.value)}>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">ISSUING DEPARTMENT</label>
                <select className="form-control" value={formData.issuingDepartment} onChange={(e) => handleInputChange('issuingDepartment', e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">MEMO</label>
                <textarea className="form-control" value={formData.memo} onChange={(e) => handleInputChange('memo', e.target.value)} rows="3" />
              </div>
              <div className="form-group">
                <label className="form-label">SUPERVISOR</label>
                <input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HR DEPT</label>
                <select className="form-control" value={formData.hrDept} onChange={(e) => handleInputChange('hrDept', e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">IT ADMIN</label>
                <select className="form-control" value={formData.itAdmin} onChange={(e) => handleInputChange('itAdmin', e.target.value)}>
                  <option value="">Select Admin</option>
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Assets Table */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Assets</h3>
          <table className="detail-items-table">
            <thead>
              <tr>
                <th>ID ▲</th>
                <th>ISSUE TYPE</th>
                <th>ASSET NAME</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>DATE OF ISSUE</th>
                <th>DATE OF RETURN</th>
              </tr>
            </thead>
            <tbody>
              {assetItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.issueType}</td>
                  <td>{item.assetName}</td>
                  <td>{item.description || '-'}</td>
                  <td>{item.status}</td>
                  <td>{item.dateOfIssue}</td>
                  <td>{item.dateOfReturn || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateAssetIssue;
