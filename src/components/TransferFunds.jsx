import React, { useState } from 'react';
import './Enquiries.css';

const TransferFunds = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    transactionNumber: 'To Be Generated',
    transfer: '9',
    fromAccount: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    toAccount: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    date: '3/12/2021',
    postingPeriod: 'Dec 2021',
    currency: 'SGD',
    amount: '200,000.00',
    currency2: 'SGD',
    amount2: '200,000.00',
    exchangeRate: '1.00',
    memo: 'MEP OCBC TO DBS',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    class: '',
    location: '',
    generateDocNumber: true
  });

  const accountOptions = [
    '- New -',
    '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
    '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
    '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
    '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
    '11160 ALL Bank Accounts : TMO MAYBANK 0-421-10-2400-6'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. (TECH ONSHORE MEP Pte Ltd.)'
  ];

  const classOptions = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
    'Structure'
  ];

  const locationOptions = [
    '- New -',
    'Singapore (TSV)'
  ];

  const departmentOptions = [
    'Shipyard : Sembawang',
    'TOM',
    'TOM : Admin',
    'TOM : Electrical and E&I',
    'TOM : Facility',
    'TOM : Finance',
    'TOM : Finance : Internal Transfer',
    'TOM : Human Resource'
  ];

  const handleSave = () => {
    console.log('Saving transfer:', formData);
    setCurrentPage('view-transfers');
  };

  const handleCancel = () => {
    setCurrentPage('view-transfers');
  };

  const handleVoid = () => {
    console.log('Voiding transfer');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Transfer</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{formData.transfer}</span>
            </div>
          </div>
        </div>
        <div className="page-actions" style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleSave}
            style={{
              padding: '8px 24px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px'
            }}
          >
            Save
          </button>
          <button 
            onClick={handleCancel}
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={handleVoid}
            style={{
              padding: '8px 24px',
              background: 'white',
              color: '#4a90e2',
              border: '2px solid #4a90e2',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px'
            }}
          >
            Void
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Main Form */}
        <div className="form-section">
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">TRANSACTION NUMBER</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.transactionNumber}
                  onChange={(e) => setFormData({...formData, transactionNumber: e.target.value})}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">TRANSFER #</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.transfer}
                  onChange={(e) => setFormData({...formData, transfer: e.target.value})}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label required">FROM ACCOUNT</label>
                <select 
                  className="form-control"
                  value={formData.fromAccount}
                  onChange={(e) => setFormData({...formData, fromAccount: e.target.value})}
                >
                  {accountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#666' }}>
                  <span style={{ fontWeight: '500' }}>BALANCE:</span> 675,985.25
                </div>
              </div>

              <div className="form-group">
                <label className="form-label required">TO ACCOUNT</label>
                <select 
                  className="form-control"
                  value={formData.toAccount}
                  onChange={(e) => setFormData({...formData, toAccount: e.target.value})}
                >
                  {accountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#666' }}>
                  <span style={{ fontWeight: '500' }}>BALANCE:</span> 931,641.43
                </div>
              </div>

              <div className="form-group">
                <label className="form-label required">DATE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => setFormData({...formData, postingPeriod: e.target.value})}
                >
                  <option>Dec 2021</option>
                  <option>Nov 2021</option>
                  <option>Oct 2021</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">DO RECORD CREATED</label>
                <div style={{ padding: '8px 0', fontSize: '13px', color: '#666' }}>
                  -
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => setFormData({...formData, currency: e.target.value})}
                >
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">EXCHANGE RATE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => setFormData({...formData, exchangeRate: e.target.value})}
                />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label required">AMOUNT</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">MEMO</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => setFormData({...formData, memo: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => setFormData({...formData, subsidiary: e.target.value})}
                >
                  {subsidiaries.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                >
                  <option value="">Select Department</option>
                  {departmentOptions.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                >
                  <option value="">Select Class</option>
                  {classOptions.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option value="">Select Location</option>
                  {locationOptions.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <input 
                    type="checkbox"
                    checked={formData.generateDocNumber}
                    onChange={(e) => setFormData({...formData, generateDocNumber: e.target.checked})}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label style={{ fontSize: '13px', color: '#333', margin: 0 }}>
                    GENERATE DOCUMENT NUMBER ON SAVE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '12px',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e0e0e0'
        }}>
          <button 
            onClick={handleCancel}
            style={{
              padding: '10px 28px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={handleSave}
              style={{
                padding: '10px 28px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '100px'
              }}
            >
              Save
            </button>
            <button 
              onClick={handleVoid}
              style={{
                padding: '10px 28px',
                background: 'white',
                color: '#4a90e2',
                border: '2px solid #4a90e2',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '100px'
              }}
            >
              Void
            </button>
            <button 
              style={{
                padding: '10px 28px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '120px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fas fa-cog"></i>
              Actions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferFunds;
