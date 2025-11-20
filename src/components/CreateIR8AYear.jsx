import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateIR8AYear = ({ onSave, onCancel, selectedIR8AYear }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [notesView, setNotesView] = useState('Default');
  
  // Form data state
  const [formData, setFormData] = useState({
    subsidiary: selectedIR8AYear?.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    payCalendar: selectedIR8AYear?.payCalendar || '2022 MEP',
    year: selectedIR8AYear?.year || '2022',
    payGroup: selectedIR8AYear?.payGroup || 'Hourly (MEP)',
    className: selectedIR8AYear?.className || '',
    employersTaxRefNo: selectedIR8AYear?.employersTaxRefNo || '199507962E',
    employerName: selectedIR8AYear?.employerName || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    organisationIdType: selectedIR8AYear?.organisationIdType || 'UEN - Local Company Registration number issued by ACRA',
    orgIdNo: selectedIR8AYear?.orgIdNo || '',
    nameOfAuthorizedPerson: selectedIR8AYear?.nameOfAuthorizedPerson || 'MEP004 Camila Spinde',
    designationOfAuthorizedPerson: selectedIR8AYear?.designationOfAuthorizedPerson || 'EXECUTIVE DIRECTOR',
    telephoneNumber: selectedIR8AYear?.telephoneNumber || '96714249',
    authorizedEmailId: selectedIR8AYear?.authorizedEmailId || 'camila@tom.sg',
    dataProcess: selectedIR8AYear?.dataProcess || false,
    irasAssessmentYearData: selectedIR8AYear?.irasAssessmentYearData || []
  });

  const payGroupOptions = [
    'Hourly (MEP)',
    'Hourly (TSV)',
    'EP & Local (MEP)',
    'EP & Local (TMO)',
    'EP & Local (TDQ)',
    'EP & Local (TSV)',
    'NVT GROUP',
    'TestPaygroup'
  ];

  const organisationIdTypeOptions = [
    '- New -',
    'ASGD – Tax Reference number assigned by IRAS',
    'ITR –Income Tax Reference number assigned by IRAS',
    'UEN – Business Registration number issued by ACRA',
    'UEN – Local Company Registration number issued by ACRA',
    'UENO – Unique Entity Number Others (e.g. Foreign Company Registration Number)'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.subsidiary || !formData.payCalendar || !formData.year) {
      showToast('Please fill in required fields', 'error');
      return;
    }

    showToast(selectedIR8AYear ? 'IR8A Year updated successfully!' : 'IR8A Year created successfully!', 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  const handleAddIRASDetail = () => {
    const newDetail = {
      id: Date.now(),
      employeeName: '',
      dateOfApproval: '',
      directorsFees: '',
      grossCommissionPaidFrom: '',
      dateOfDeclarationOfBonus: '',
      ir8aSubmitted: 'No',
      benefitInKind: '',
      esopEsow: ''
    };
    
    setFormData(prev => ({
      ...prev,
      irasAssessmentYearData: [...prev.irasAssessmentYearData, newDetail]
    }));
  };

  const handleRemoveIRASDetail = (id) => {
    setFormData(prev => ({
      ...prev,
      irasAssessmentYearData: prev.irasAssessmentYearData.filter(item => item.id !== id)
    }));
  };

  const handleIRASDetailChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      irasAssessmentYearData: prev.irasAssessmentYearData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>IR8A Year</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            IR8A Year Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="Tech Onshore MEP Prefabricators Pte Ltd.">Tech Onshore MEP Prefabricators Pte Ltd.</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYER NAME</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.employerName}
                onChange={(e) => handleInputChange('employerName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PAY CALENDAR <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.payCalendar}
                onChange={(e) => handleInputChange('payCalendar', e.target.value)}
              >
                <option value="2022 MEP">2022 MEP</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ORGANISATION ID TYPE</label>
              <select 
                className="form-control"
                value={formData.organisationIdType}
                onChange={(e) => handleInputChange('organisationIdType', e.target.value)}
              >
                {organisationIdTypeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">YEAR <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
              >
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ORG ID NO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.orgIdNo}
                onChange={(e) => handleInputChange('orgIdNo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PAY GROUP <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.payGroup}
                onChange={(e) => handleInputChange('payGroup', e.target.value)}
              >
                {payGroupOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">NAME OF AUTHORIZED PERSON</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.nameOfAuthorizedPerson}
                onChange={(e) => handleInputChange('nameOfAuthorizedPerson', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">CLASS NAME</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.className}
                onChange={(e) => handleInputChange('className', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">DESIGNATION OF AUTHORIZED PERSON</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.designationOfAuthorizedPerson}
                onChange={(e) => handleInputChange('designationOfAuthorizedPerson', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYER'S TAX REF. NO. / UEN</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.employersTaxRefNo}
                onChange={(e) => handleInputChange('employersTaxRefNo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">TELEPHONE NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.telephoneNumber}
                onChange={(e) => handleInputChange('telephoneNumber', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">AUTHORIZED EMAIL ID</label>
              <input 
                type="email" 
                className="form-control"
                value={formData.authorizedEmailId}
                onChange={(e) => handleInputChange('authorizedEmailId', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">DATA PROCESS</label>
              <input 
                type="checkbox" 
                checked={formData.dataProcess}
                onChange={(e) => handleInputChange('dataProcess', e.target.checked)}
                style={{ marginTop: '8px' }}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Notes Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '12px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            gap: '20px',
            marginBottom: '0'
          }}>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'notes' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'custom' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'workflow' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'iras-assessment' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('iras-assessment')}
            >
              IRAS Assessment Year
            </span>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #e9ecef', borderTop: 'none' }}>
            {activeTab === 'notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={notesView}
                      onChange={(e) => setNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                      <option>Summary</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default View</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#666' }}>IR8A DETAIL</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>&lt;type then tab&gt;</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={handleAddIRASDetail}
                      style={{
                        background: '#28a745',
                        color: 'white',
                        border: '1px solid #28a745',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      New IR8A Detail
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Attach
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                {formData.irasAssessmentYearData.length > 0 ? (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '11px'
                    }}>
                      <thead>
                        <tr style={{ background: '#f8f9fa' }}>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>EDIT</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>ID ▲</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '180px' }}>EMPLOYEE NAME</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF APPROVAL DIRECTOR'S FEES</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>GROSS COMMISSION PAID FROM</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF DECLARATION OF BONUS</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>IR8A SUBMITTED</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>BENEFIT IN KIND</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>ESOP / ESOW</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '60px' }}>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.irasAssessmentYearData.map((item, index) => (
                          <tr key={item.id}>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <button className="view-link" style={{ fontSize: '10px' }}>Edit</button>
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6', color: 'var(--blue-accent)' }}>{item.id}</td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.employeeName}
                                onChange={(e) => handleIRASDetailChange(item.id, 'employeeName', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="date" 
                                className="table-input"
                                value={item.dateOfApproval}
                                onChange={(e) => handleIRASDetailChange(item.id, 'dateOfApproval', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.grossCommissionPaidFrom}
                                onChange={(e) => handleIRASDetailChange(item.id, 'grossCommissionPaidFrom', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="date" 
                                className="table-input"
                                value={item.dateOfDeclarationOfBonus}
                                onChange={(e) => handleIRASDetailChange(item.id, 'dateOfDeclarationOfBonus', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <select 
                                className="table-input"
                                value={item.ir8aSubmitted}
                                onChange={(e) => handleIRASDetailChange(item.id, 'ir8aSubmitted', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </select>
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.benefitInKind}
                                onChange={(e) => handleIRASDetailChange(item.id, 'benefitInKind', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.esopEsow}
                                onChange={(e) => handleIRASDetailChange(item.id, 'esopEsow', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <button 
                                className="btn-icon-danger"
                                onClick={() => handleRemoveIRASDetail(item.id)}
                                title="Remove"
                                style={{ fontSize: '10px', padding: '2px 4px' }}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="empty-items-message">
                    <p>No IR8A details added yet. Click "New IR8A Detail" to start adding details.</p>
                  </div>
                )}
                
                <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  1 to 25 of 83
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                Workflow information will be displayed here.
              </div>
            )}

            {activeTab === 'iras-assessment' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default View</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={handleAddIRASDetail}
                      style={{
                        background: '#28a745',
                        color: 'white',
                        border: '1px solid #28a745',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      New IR8A Detail
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Attach
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                {formData.irasAssessmentYearData.length > 0 ? (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '11px'
                    }}>
                      <thead>
                        <tr style={{ background: '#f8f9fa' }}>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>EDIT</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '180px' }}>EMPLOYEE NAME</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF APPROVAL</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>GROSS COMMISSION</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF DECLARATION</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>IR8A SUBMITTED</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>BENEFIT IN KIND</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>ESOP / ESOW</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '60px' }}>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.irasAssessmentYearData.map((item, index) => (
                          <tr key={item.id}>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <button className="view-link" style={{ fontSize: '10px' }}>Edit</button>
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.employeeName}
                                onChange={(e) => handleIRASDetailChange(item.id, 'employeeName', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="date" 
                                className="table-input"
                                value={item.dateOfApproval}
                                onChange={(e) => handleIRASDetailChange(item.id, 'dateOfApproval', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.grossCommissionPaidFrom}
                                onChange={(e) => handleIRASDetailChange(item.id, 'grossCommissionPaidFrom', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="date" 
                                className="table-input"
                                value={item.dateOfDeclarationOfBonus}
                                onChange={(e) => handleIRASDetailChange(item.id, 'dateOfDeclarationOfBonus', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <select 
                                className="table-input"
                                value={item.ir8aSubmitted}
                                onChange={(e) => handleIRASDetailChange(item.id, 'ir8aSubmitted', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </select>
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.benefitInKind}
                                onChange={(e) => handleIRASDetailChange(item.id, 'benefitInKind', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <input 
                                type="text" 
                                className="table-input"
                                value={item.esopEsow}
                                onChange={(e) => handleIRASDetailChange(item.id, 'esopEsow', e.target.value)}
                                style={{ width: '100%', fontSize: '10px', padding: '2px' }}
                              />
                            </td>
                            <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                              <button 
                                className="btn-icon-danger"
                                onClick={() => handleRemoveIRASDetail(item.id)}
                                title="Remove"
                                style={{ fontSize: '10px', padding: '2px 4px' }}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="empty-items-message">
                    <p>No IRAS Assessment Year details added yet. Click "New IR8A Detail" to start adding details.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
          </div>
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

export default CreateIR8AYear;
