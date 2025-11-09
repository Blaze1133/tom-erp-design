import React, { useState } from 'react';
import './Enquiries.css';

const MakeDeposit = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('deposits');
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Deposit',
    deposit: '237',
    currency: 'SGD',
    exchangeRate: '1.00',
    account: '11180 ALL Bank Accounts : GD 072-904177-1',
    amount: '',
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    toBePrinted: false,
    memo: '',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: '',
    location: '',
    department: 'TOM : Finance'
  });

  const [payments, setPayments] = useState([
    {
      id: 1,
      selected: true,
      date: '31/3/2021',
      type: 'Payment',
      number: 'PVTOMXQ00004',
      memo: 'VOID',
      paymentMethod: '',
      refNo: '',
      from: '845 Mazars Doubtful Debts',
      currency: 'SGD',
      paymentAmount: 0.00,
      amountSGD: 0.00
    }
  ]);

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

  const customFormOptions = [
    'TOM Deposit',
    'Standard Deposit'
  ];

  const handleSave = () => {
    console.log('Saving deposit:', formData);
    setCurrentPage('view-deposits');
  };

  const handleCancel = () => {
    setCurrentPage('view-deposits');
  };

  const handleVoid = () => {
    console.log('Voiding deposit');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-university" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Deposit</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{formData.deposit}</span>
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
        {/* Primary Information Section */}
        <div className="form-section">
          <h2 className="section-title" style={{ 
            marginBottom: '0.5rem',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            display: 'flex',
            alignItems: 'center'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginRight: '8px', color: '#666' }}></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => setFormData({...formData, customForm: e.target.value})}
              >
                {customFormOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
              >
                <option value="SGD">SGD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => setFormData({...formData, postingPeriod: e.target.value})}
              >
                <option>Mar 2021</option>
                <option>Apr 2021</option>
                <option>May 2021</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DEPOSIT #</label>
              <input 
                type="text"
                className="form-control"
                value={formData.deposit}
                onChange={(e) => setFormData({...formData, deposit: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">EXCHANGE RATE</label>
              <input 
                type="text"
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => setFormData({...formData, exchangeRate: e.target.value})}
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
              <label className="form-label required">ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.account}
                onChange={(e) => setFormData({...formData, account: e.target.value})}
              >
                <option>{formData.account}</option>
                <option>11210 ALL Bank Accounts : MEP OCBC 501-136001</option>
                <option>11180 ALL Bank Accounts : MEP DBS SGD 930-142-3</option>
              </select>
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
              <label className="form-label">TO BE PRINTED</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <input 
                  type="checkbox"
                  checked={formData.toBePrinted}
                  onChange={(e) => setFormData({...formData, toBePrinted: e.target.checked})}
                  style={{ width: '18px', height: '18px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="text"
                className="form-control"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title" style={{ 
            marginBottom: '0.5rem',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            display: 'flex',
            alignItems: 'center'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginRight: '8px', color: '#666' }}></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
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
              <label className="form-label required">DEPARTMENT</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
              >
                {departmentOptions.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Deposits Section with Tabs */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title" style={{ 
            marginBottom: '0',
            background: '#4a6fa5',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'white',
            borderRadius: '0'
          }}>
            Deposits
          </h2>
          <div style={{ padding: '0', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            background: '#4a6fa5',
            padding: '0 16px'
          }}>
            <button
              onClick={() => setActiveTab('deposits')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'deposits' ? 'white' : 'transparent',
                color: activeTab === 'deposits' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Payments 0.00
            </button>
            <button
              onClick={() => setActiveTab('other')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'other' ? 'white' : 'transparent',
                color: activeTab === 'other' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Other Deposits 0.00
            </button>
            <button
              onClick={() => setActiveTab('cash')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'cash' ? 'white' : 'transparent',
                color: activeTab === 'cash' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Cash Back 0.00
            </button>
            <button
              onClick={() => setActiveTab('communication')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'communication' ? 'white' : 'transparent',
                color: activeTab === 'communication' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Communication
            </button>
            <button
              onClick={() => setActiveTab('system')}
              style={{
                padding: '10px 20px',
                background: activeTab === 'system' ? 'white' : 'transparent',
                color: activeTab === 'system' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              System Information
            </button>
          </div>

          {activeTab === 'deposits' && (
            <div style={{ padding: '16px' }}>
              <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <button style={{
                  padding: '6px 16px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}>
                  Mark All
                </button>
                <button style={{
                  padding: '6px 16px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}>
                  Unmark All
                </button>
                <button style={{
                  padding: '6px 16px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}>
                  Customize
                </button>
              </div>

              <div className="items-table-wrapper">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>NUMBER</th>
                      <th>MEMO</th>
                      <th>PAYMENT METHOD</th>
                      <th>REF NO.</th>
                      <th>FROM</th>
                      <th>CURRENCY</th>
                      <th>PAYMENT AMOUNT</th>
                      <th>AMOUNT (SGD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td style={{ padding: '8px', textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={payment.selected}
                            onChange={(e) => {
                              const updated = payments.map(p => 
                                p.id === payment.id ? {...p, selected: e.target.checked} : p
                              );
                              setPayments(updated);
                            }}
                            style={{ width: '16px', height: '16px' }}
                          />
                        </td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.date}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.type}</td>
                        <td style={{ padding: '8px', fontSize: '13px', color: '#4a90e2' }}>{payment.number}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.memo}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.paymentMethod || '-'}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.refNo || '-'}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.from}</td>
                        <td style={{ padding: '8px', fontSize: '13px' }}>{payment.currency}</td>
                        <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{payment.paymentAmount.toFixed(2)}</td>
                        <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{payment.amountSGD.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'deposits' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section
            </div>
          )}
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

export default MakeDeposit;
