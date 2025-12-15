import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReplenishLocationByInventoryTransfer = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    transactionNumber: 'To Be Generated',
    subsidiary: '',
    date: '15/12/2025',
    postingPeriod: '',
    generateDocNumber: true,
    refNo: 'To Be Generated',
    memo: '',
    fromLocation: '',
    toLocation: '',
    department: '',
    class: '',
    items: []
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSave = () => {
    if (!formData.subsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    if (!formData.fromLocation) {
      showToast('Please select a from location', 'error');
      return;
    }
    if (!formData.toLocation) {
      showToast('Please select a to location', 'error');
      return;
    }
    if (!formData.department) {
      showToast('Please select a department', 'error');
      return;
    }
    showToast('Inventory transfer saved successfully!', 'success');
  };

  const handleCancel = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="enquiries-container">
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false, message: '', type: 'success' })} />}
      
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="fas fa-exchange-alt" style={{ fontSize: '1.5rem', color: '#666' }}></i>
          <div>
            <h1>Replenish Location By Inventory Transfer</h1>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-toolbar" title="List">
            <i className="fas fa-list"></i>
          </button>
          <button className="btn-toolbar" title="Search">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn-toolbar" title="More">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">TRANSACTION NUMBER</label>
            <input 
              type="text" 
              className="form-control"
              value={formData.transactionNumber}
              readOnly
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </div>
          <div className="form-group">
            <label className="form-label">FROM LOCATION <span style={{ color: 'red' }}>*</span></label>
            <select 
              className="form-control"
              value={formData.fromLocation}
              onChange={(e) => handleFormChange('fromLocation', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>Bok Seng Yard</option>
              <option>Hong Hang Shipyard</option>
              <option>Mega yard</option>
              <option>MEP MARINE CC</option>
              <option>Shipyards/Construction</option>
              <option>Singapore (TDO)</option>
              <option>Singapore (TEA)</option>
              <option>Singapore (TMO)</option>
              <option>Singapore (TOMS)</option>
              <option>Singapore (TSV)</option>
              <option>Singapore(MEP)</option>
              <option>TOM - 11</option>
              <option>TOM External Workshop</option>
              <option>TOM - 13</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">TO LOCATION <span style={{ color: 'red' }}>*</span></label>
            <select 
              className="form-control"
              value={formData.toLocation}
              onChange={(e) => handleFormChange('toLocation', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>Bok Seng Yard</option>
              <option>Hong Hang Shipyard</option>
              <option>Mega yard</option>
              <option>MEP MARINE CC</option>
              <option>Shipyards/Construction</option>
              <option>Singapore (TDO)</option>
              <option>Singapore (TEA)</option>
              <option>Singapore (TMO)</option>
              <option>Singapore (TOMS)</option>
              <option>Singapore (TSV)</option>
              <option>Singapore(MEP)</option>
              <option>TOM - 11</option>
              <option>TOM External Workshop</option>
              <option>TOM - 13</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">DEPARTMENT <span style={{ color: 'red' }}>*</span></label>
            <select 
              className="form-control"
              value={formData.department}
              onChange={(e) => handleFormChange('department', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>TOM: Human Resource</option>
              <option>TOM: Finance: Internal Transfer</option>
              <option>TOM: IT</option>
              <option>TOM: Logistic</option>
              <option>TOM: Operating</option>
              <option>TOM: Purchase</option>
              <option>TOM: Sales and Marketing</option>
              <option>TOM: Security</option>
              <option>TOM: TOM INTERNALS: TOM HR</option>
              <option>TOM: Nampak Reinsure</option>
              <option>TOM: Auction Handover</option>
              <option>TOM: Engineering</option>
              <option>TOM: Production</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">SUBSIDIARY <span style={{ color: 'red' }}>*</span></label>
            <select 
              className="form-control"
              value={formData.subsidiary}
              onChange={(e) => handleFormChange('subsidiary', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
              <option>Tech Marine Offshore (S) Pte Ltd</option>
              <option>TOM Offshore Marine Engineering Pte Ltd</option>
              <option>TOM Shipyard Pte Ltd</option>
              <option>TOM Engineering & Trading Pte Ltd</option>
              <option>TOM Industrial Services Pte Ltd</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">DATE <span style={{ color: 'red' }}>*</span></label>
            <input 
              type="text" 
              className="form-control"
              value={formData.date}
              onChange={(e) => handleFormChange('date', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">POSTING PERIOD</label>
            <select 
              className="form-control"
              value={formData.postingPeriod}
              onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>Dec 2025</option>
              <option>Jan 2026</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">CLASS</label>
            <select 
              className="form-control"
              value={formData.class}
              onChange={(e) => handleFormChange('class', e.target.value)}
            >
              <option value="">- Select -</option>
              <option>Consumable Item</option>
              <option>Course</option>
              <option>Cutting Works</option>
              <option>Electrical</option>
              <option>Fabrication</option>
              <option>Hydrotesting</option>
              <option>Installation work</option>
              <option>Manpower Supply</option>
              <option>Material Supply</option>
              <option>Module /Prefab</option>
              <option>Piping</option>
              <option>Project Works</option>
              <option>Refurbishment works</option>
              <option>Rental</option>
              <option>Repair & Referable</option>
              <option>Sale of Scrap Metal</option>
              <option>Structure</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', marginTop: '1.5rem' }}>
              <input 
                type="checkbox"
                checked={formData.generateDocNumber}
                onChange={(e) => handleFormChange('generateDocNumber', e.target.checked)}
              />
              GENERATE DOCUMENT NUMBER ON SAVE
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">REF NO.</label>
            <input 
              type="text" 
              className="form-control"
              value={formData.refNo}
              readOnly
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </div>
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">MEMO</label>
            <textarea 
              className="form-control"
              rows="2"
              value={formData.memo}
              onChange={(e) => handleFormChange('memo', e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                Mark All
              </button>
              <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                Unmark All
              </button>
            </div>
          </div>
          <table className="enquiries-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>ITEM</th>
                <th>DESCRIPTION</th>
                <th>UOM</th>
                <th>FROM AVAILABLE</th>
                <th>TO AVAILABLE</th>
                <th>BACK ORDERED</th>
                <th>+ ON ORDER</th>
                <th>REORDER POINT</th>
                <th>PREFERRED STOCK LEVEL</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                  No records to show.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="detail-footer">
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>
    </div>
  );
};

export default ReplenishLocationByInventoryTransfer;
