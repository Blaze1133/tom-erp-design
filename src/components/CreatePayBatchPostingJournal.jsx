import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePayBatchPostingJournal = ({ journalId, onBack, onSave }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [isEditing] = useState(!!journalId);

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'Pay-batch Posting Journal Form',
    entryNo: journalId ? '34' : 'To Be Generated',
    outOfBalanceBy: 'DEBIT',
    credit: '',
    postingPeriod: 'Dec 2025',
    memo: '',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '2/12/2025',
    status: 'Pending For Approval',
    subsidiary: 'Tech Offshore Marine (SV) Pte Ltd',
    refPostingPaybatch: '',
    refEmployeeBonusProcess: ''
  });

  const [lines, setLines] = useState([
    {
      id: 1,
      account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      debit: 0.00,
      credit: 0.00,
      memo: '',
      name: '',
      department: ''
    },
    {
      id: 2,
      account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      debit: 0.00,
      credit: 0.00,
      memo: '',
      name: '',
      department: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLineChange = (lineId, field, value) => {
    setLines(prev => prev.map(line => 
      line.id === lineId ? { ...line, [field]: value } : line
    ));
  };

  const addLine = () => {
    const newLine = {
      id: Date.now(),
      account: '',
      debit: 0.00,
      credit: 0.00,
      memo: '',
      name: '',
      department: ''
    };
    setLines(prev => [...prev, newLine]);
    showToast('New line added', 'success');
  };

  const removeLine = (lineId) => {
    if (lines.length > 1) {
      setLines(prev => prev.filter(line => line.id !== lineId));
      showToast('Line removed', 'success');
    } else {
      showToast('At least one line is required', 'error');
    }
  };

  const handleSave = () => {
    // Validation
    if (!formData.date) {
      showToast('Date is required', 'error');
      return;
    }

    if (!formData.subsidiary) {
      showToast('Subsidiary is required', 'error');
      return;
    }

    // Calculate totals
    const totalDebit = lines.reduce((sum, line) => sum + parseFloat(line.debit || 0), 0);
    const totalCredit = lines.reduce((sum, line) => sum + parseFloat(line.credit || 0), 0);

    if (totalDebit !== totalCredit) {
      showToast('Debits and Credits must be equal', 'error');
      return;
    }

    const journalData = {
      ...formData,
      lines,
      totalDebit,
      totalCredit
    };

    if (onSave) {
      onSave(journalData);
    }
    
    showToast(isEditing ? 'Journal updated successfully' : 'Journal created successfully', 'success');
  };

  const handleCancel = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleActions = () => {
    showToast('Actions menu will be implemented soon', 'info');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount || 0);
  };

  const totalDebit = lines.reduce((sum, line) => sum + parseFloat(line.debit || 0), 0);
  const totalCredit = lines.reduce((sum, line) => sum + parseFloat(line.credit || 0), 0);

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>{isEditing ? 'Edit Pay-batch Posting Journal' : 'New Pay-batch Posting Journal'}</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleActions}>
            <i className="fas fa-sync"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">

        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option value="Pay-batch Posting Journal Form">Pay-batch Posting Journal Form</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">CREDIT</label>
              <input
                type="number"
                className="form-control"
                value={formData.credit}
                onChange={(e) => handleInputChange('credit', e.target.value)}
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option value="Dec 2025">Dec 2025</option>
                <option value="Jan 2026">Jan 2026</option>
                <option value="Nov 2025">Nov 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ENTRY NO.</label>
              <div className="form-value">{formData.entryNo}</div>
            </div>
            <div className="form-group">
              <label className="form-label">CURRENCY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option value="SGD">SGD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input
                type="text"
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">OUT OF BALANCE BY</label>
              <div className="form-value">{formData.outOfBalanceBy}</div>
            </div>
            <div className="form-group">
              <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
              <input
                type="number"
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATUS</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option value="Pending For Approval">Pending For Approval</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DATE <span className="required">*</span></label>
              <input
                type="date"
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
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
                <option value="">Select Subsidiary</option>
                <option value="Tech Offshore Marine (SV) Pte Ltd">Tech Offshore Marine (SV) Pte Ltd</option>
                <option value="Tech Onshore MEP Prefabricators Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd</option>
                <option value="Tech Marine Offshore (S) Pte Ltd">Tech Marine Offshore (S) Pte Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">REF. EMPLOYEE BONUS PROCESS</label>
              <select 
                className="form-control"
                value={formData.refEmployeeBonusProcess}
                onChange={(e) => handleInputChange('refEmployeeBonusProcess', e.target.value)}
              >
                <option value="">Select Process</option>
                <option value="BONUS2025Q4">BONUS2025Q4</option>
                <option value="BONUS2025Q3">BONUS2025Q3</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">REF.POSTING PAYBATCH</label>
              <select 
                className="form-control"
                value={formData.refPostingPaybatch}
                onChange={(e) => handleInputChange('refPostingPaybatch', e.target.value)}
              >
                <option value="">Select Paybatch</option>
                <option value="PBATCH00268">PBATCH00268</option>
                <option value="PBATCH00269">PBATCH00269</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Lines
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />

          <div className="items-actions">
            <button className="btn btn-primary" onClick={addLine}>
              <i className="fas fa-plus"></i>
              Add Line
            </button>
          </div>

          <div className="items-table-wrapper">
            <table className="items-table">
              <thead>
                <tr>
                  <th>ACCOUNT <span className="required">*</span></th>
                  <th>DEBIT</th>
                  <th>CREDIT</th>
                  <th>MEMO</th>
                  <th>NAME</th>
                  <th>DEPARTMENT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {lines.map((line, index) => (
                  <tr key={line.id}>
                    <td>
                      <select 
                        className="table-input"
                        value={line.account}
                        onChange={(e) => handleLineChange(line.id, 'account', e.target.value)}
                      >
                        <option value="">Select Account</option>
                        <option value="50600 Cost Of Sales : Direct Cost-Hourly Salary">50600 Cost Of Sales : Direct Cost-Hourly Salary</option>
                        <option value="50700 Cost Of Sales : In-Direct Cost Fixed Salary">50700 Cost Of Sales : In-Direct Cost Fixed Salary</option>
                        <option value="57055 Staff Related Costs : Accommodations/Utilities">57055 Staff Related Costs : Accommodations/Utilities</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="table-input"
                        value={line.debit}
                        onChange={(e) => handleLineChange(line.id, 'debit', e.target.value)}
                        step="0.01"
                        style={{ textAlign: 'right' }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="table-input"
                        value={line.credit}
                        onChange={(e) => handleLineChange(line.id, 'credit', e.target.value)}
                        step="0.01"
                        style={{ textAlign: 'right' }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-input"
                        value={line.memo}
                        onChange={(e) => handleLineChange(line.id, 'memo', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-input"
                        value={line.name}
                        onChange={(e) => handleLineChange(line.id, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <select 
                        className="table-input"
                        value={line.department}
                        onChange={(e) => handleLineChange(line.id, 'department', e.target.value)}
                      >
                        <option value="">Select Department</option>
                        <option value="TOM: Human Resource">TOM: Human Resource</option>
                        <option value="TOM: Finance">TOM: Finance</option>
                        <option value="TOM: Operations">TOM: Operations</option>
                      </select>
                    </td>
                    <td>
                      <button 
                        className="btn-remove"
                        onClick={() => removeLine(line.id)}
                        title="Remove Line"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="totals-section">
            <div className="totals-row">
              <span>Total Debit: <strong>{formatCurrency(totalDebit)}</strong></span>
              <span>Total Credit: <strong>{formatCurrency(totalCredit)}</strong></span>
              <span>Balance: <strong>{formatCurrency(Math.abs(totalDebit - totalCredit))}</strong></span>
            </div>
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

export default CreatePayBatchPostingJournal;
