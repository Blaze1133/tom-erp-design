import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReconciliationRules = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showNewRuleForm, setShowNewRuleForm] = useState(false);
  const [systemRules] = useState([
    {
      id: 1,
      active: true,
      ruleName: 'Match on Transaction Number and Amount'
    },
    {
      id: 2,
      active: true,
      ruleName: 'Match on Amount and Transaction Number without Prefixes and Leading Zeros'
    },
    {
      id: 3,
      active: true,
      ruleName: 'Match on Amount when Date is within 90 Previous Days'
    }
  ]);

  const [userRules, setUserRules] = useState([]);
  const [newRule, setNewRule] = useState({
    ruleName: '',
    matchOn: 'amount',
    dateTolerance: '',
    bankAccounts: [],
    active: true
  });

  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [bankSearchTerm, setBankSearchTerm] = useState('');

  const bankAccounts = [
    { id: 1, name: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8' },
    { id: 2, name: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7' },
    { id: 3, name: '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0' },
    { id: 4, name: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3' },
    { id: 5, name: '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1' },
    { id: 6, name: '11160 ALL Bank Accounts : TMO MAYBANK 0-421-10-2400-6' },
    { id: 7, name: '11170 ALL Bank Accounts : TEA MAYBANK 0-421-10-2401-3' },
    { id: 8, name: '11180 ALL Bank Accounts : TDQ MAYBANK 0-421-10-2404-3' },
    { id: 9, name: '11190 ALL Bank Accounts : MEP MAYBANK SGD 0421101473' },
    { id: 10, name: '11200 ALL Bank Accounts : MEP MAYBANK USD 0-421-10-2403-7' },
    { id: 11, name: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001' },
    { id: 12, name: '11220 ALL Bank Accounts : MEP RHB SGD 1-80-101516-03' },
    { id: 13, name: '11230 ALL Bank Accounts : MEP UOB 9314-301-006-1' },
    { id: 14, name: '11240 ALL Bank Accounts : Petty Cash' },
    { id: 15, name: '11250 ALL Bank Accounts : Credit Card Payment' }
  ];

  const filteredBankAccounts = bankAccounts.filter(bank =>
    bank.name.toLowerCase().includes(bankSearchTerm.toLowerCase())
  );

  const handleNewRule = () => {
    setShowNewRuleForm(true);
  };

  const handleSaveRule = () => {
    if (!newRule.ruleName.trim()) {
      setToast({ show: true, message: 'Please enter a rule name', type: 'error' });
      return;
    }

    const rule = {
      id: Date.now(),
      active: newRule.active,
      ruleName: newRule.ruleName,
      matchOn: newRule.matchOn,
      dateTolerance: newRule.dateTolerance
    };

    setUserRules([...userRules, rule]);
    setNewRule({ ruleName: '', matchOn: 'amount', dateTolerance: '', active: true });
    setShowNewRuleForm(false);
    setToast({ show: true, message: 'Rule created successfully!', type: 'success' });
  };

  const handleCancelRule = () => {
    setNewRule({ ruleName: '', matchOn: 'amount', dateTolerance: '', bankAccounts: [], active: true });
    setShowNewRuleForm(false);
    setShowBankDropdown(false);
    setBankSearchTerm('');
  };

  const handleToggleBankAccount = (bankId) => {
    const isSelected = newRule.bankAccounts.includes(bankId);
    if (isSelected) {
      setNewRule({
        ...newRule,
        bankAccounts: newRule.bankAccounts.filter(id => id !== bankId)
      });
    } else {
      setNewRule({
        ...newRule,
        bankAccounts: [...newRule.bankAccounts, bankId]
      });
    }
  };

  const handleRemoveBankAccount = (bankId) => {
    setNewRule({
      ...newRule,
      bankAccounts: newRule.bankAccounts.filter(id => id !== bankId)
    });
  };

  const getSelectedBankNames = () => {
    return bankAccounts
      .filter(bank => newRule.bankAccounts.includes(bank.id))
      .map(bank => bank.name);
  };

  const handleDeleteRule = (ruleId) => {
    if (window.confirm('Are you sure you want to delete this rule?')) {
      setUserRules(userRules.filter(rule => rule.id !== ruleId));
      setToast({ show: true, message: 'Rule deleted successfully!', type: 'success' });
    }
  };

  const handleToggleRule = (ruleId) => {
    setUserRules(userRules.map(rule => 
      rule.id === ruleId ? { ...rule, active: !rule.active } : rule
    ));
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'white', 
        padding: '16px 24px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-list-check" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#5a6c7d' }}>Reconciliation Rules</h1>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '24px' }}>
          
          {/* All Rules Section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h2 style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#5a6c7d',
                  marginBottom: '4px'
                }}>
                  Reconciliation Rules
                </h2>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#666',
                  margin: 0
                }}>
                  Manage system and user-defined reconciliation rules
                </p>
              </div>
              <button 
                onClick={handleNewRule}
                style={{
                  padding: '8px 20px',
                  background: '#4a90e2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
                New Rule
              </button>
            </div>

            {/* Combined Rules Table */}
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px',
              marginTop: '16px'
            }}>
              <thead>
                <tr style={{ background: '#e8e8e8', borderBottom: '1px solid #d0d0d0' }}>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: '600', 
                    color: '#5a6c7d', 
                    fontSize: '13px',
                    width: '80px'
                  }}>
                    TYPE
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: '600', 
                    color: '#5a6c7d', 
                    fontSize: '13px',
                    width: '100px'
                  }}>
                    ACTIVE
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: '600', 
                    color: '#5a6c7d', 
                    fontSize: '13px'
                  }}>
                    RULE NAME
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: '600', 
                    color: '#5a6c7d', 
                    fontSize: '13px',
                    width: '200px'
                  }}>
                    MATCH ON
                  </th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'center', 
                    fontWeight: '600', 
                    color: '#5a6c7d', 
                    fontSize: '13px',
                    width: '100px'
                  }}>
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* System Rules */}
                {systemRules.map((rule) => (
                  <tr 
                    key={`system-${rule.id}`}
                    style={{ 
                      borderBottom: '1px solid #e8e8e8',
                      background: 'white'
                    }}
                  >
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ 
                        background: '#e3f2fd', 
                        color: '#1976d2', 
                        padding: '4px 8px', 
                        borderRadius: '3px', 
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        SYSTEM
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <input 
                        type="checkbox"
                        checked={rule.active}
                        disabled
                        style={{ 
                          width: '18px', 
                          height: '18px',
                          cursor: 'not-allowed',
                          accentColor: '#4a90e2'
                        }}
                      />
                    </td>
                    <td style={{ 
                      padding: '14px 16px', 
                      color: '#333', 
                      fontSize: '13px'
                    }}>
                      {rule.ruleName}
                    </td>
                    <td style={{ 
                      padding: '14px 16px', 
                      color: '#666', 
                      fontSize: '13px'
                    }}>
                      -
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', color: '#999' }}>
                      -
                    </td>
                  </tr>
                ))}
                
                {/* User Rules */}
                {userRules.map((rule) => (
                  <tr 
                    key={`user-${rule.id}`}
                    style={{ 
                      borderBottom: '1px solid #e8e8e8',
                      background: 'white'
                    }}
                  >
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ 
                        background: '#fff3cd', 
                        color: '#856404', 
                        padding: '4px 8px', 
                        borderRadius: '3px', 
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        USER
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <input 
                        type="checkbox"
                        checked={rule.active}
                        onChange={() => handleToggleRule(rule.id)}
                        style={{ 
                          width: '18px', 
                          height: '18px',
                          cursor: 'pointer',
                          accentColor: '#4a90e2'
                        }}
                      />
                    </td>
                    <td style={{ 
                      padding: '14px 16px', 
                      color: '#333', 
                      fontSize: '13px'
                    }}>
                      {rule.ruleName}
                    </td>
                    <td style={{ 
                      padding: '14px 16px', 
                      color: '#666', 
                      fontSize: '13px'
                    }}>
                      {rule.matchOn === 'amount' && 'Amount'}
                      {rule.matchOn === 'transactionNumber' && 'Transaction Number'}
                      {rule.matchOn === 'both' && 'Amount and Transaction Number'}
                      {rule.matchOn === 'date' && 'Date'}
                      {rule.matchOn === 'bankAccount' && 'Bank Account'}
                      {rule.dateTolerance && ` (${rule.dateTolerance} days)`}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleDeleteRule(rule.id)}
                        style={{
                          padding: '4px 12px',
                          background: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                
                {/* Empty State */}
                {userRules.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ 
                      padding: '40px',
                      textAlign: 'center',
                      color: '#999',
                      fontSize: '14px'
                    }}>
                      No user rules defined. Click "New Rule" to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {showNewRuleForm && (
              <div style={{
                marginBottom: '20px',
                padding: '20px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                background: '#f9f9f9'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                  Create New Rule
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                      RULE NAME <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={newRule.ruleName}
                      onChange={(e) => setNewRule({ ...newRule, ruleName: e.target.value })}
                      placeholder="Enter rule name"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                      MATCH ON <span style={{ color: 'red' }}>*</span>
                    </label>
                    <select
                      className="form-control"
                      value={newRule.matchOn}
                      onChange={(e) => setNewRule({ ...newRule, matchOn: e.target.value })}
                      style={{ width: '100%' }}
                    >
                      <option value="amount">Amount</option>
                      <option value="transactionNumber">Transaction Number</option>
                      <option value="both">Amount and Transaction Number</option>
                      <option value="date">Date</option>
                      <option value="bankAccount">Bank Account</option>
                    </select>
                  </div>

                  {/* Show Date Tolerance field when Match On is 'date' or 'both' */}
                  {(newRule.matchOn === 'date' || newRule.matchOn === 'both') && (
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                        DATE TOLERANCE (DAYS) <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={newRule.dateTolerance}
                        onChange={(e) => setNewRule({ ...newRule, dateTolerance: e.target.value })}
                        placeholder="e.g., 90"
                        style={{ width: '100%' }}
                      />
                    </div>
                  )}

                  {/* Show Transaction Number field when Match On is 'transactionNumber' or 'both' */}
                  {(newRule.matchOn === 'transactionNumber' || newRule.matchOn === 'both') && (
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                        TRANSACTION NUMBER PREFIX
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={newRule.transactionPrefix || ''}
                        onChange={(e) => setNewRule({ ...newRule, transactionPrefix: e.target.value })}
                        placeholder="e.g., INV, PO"
                        style={{ width: '100%' }}
                      />
                    </div>
                  )}

                  {/* Show Bank Accounts field ONLY when Match On is 'bankAccount' */}
                  {newRule.matchOn === 'bankAccount' && (
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                      BANK ACCOUNTS <span style={{ color: 'red' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <div
                        onClick={() => setShowBankDropdown(!showBankDropdown)}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #d0d0d0',
                          borderRadius: '4px',
                          background: 'white',
                          cursor: 'pointer',
                          minHeight: '38px',
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '4px'
                        }}
                      >
                        {newRule.bankAccounts.length === 0 ? (
                          <span style={{ color: '#999', fontSize: '13px' }}>Select bank accounts...</span>
                        ) : (
                          getSelectedBankNames().map((bankName, index) => (
                            <span
                              key={index}
                              style={{
                                background: '#e3f2fd',
                                color: '#1976d2',
                                padding: '4px 8px',
                                borderRadius: '3px',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              {bankName.split(':')[1]?.trim() || bankName}
                              <i
                                className="fas fa-times"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const bankId = bankAccounts.find(b => b.name === bankName)?.id;
                                  if (bankId) handleRemoveBankAccount(bankId);
                                }}
                                style={{ cursor: 'pointer', fontSize: '10px' }}
                              ></i>
                            </span>
                          ))
                        )}
                      </div>
                      {showBankDropdown && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'white',
                            border: '1px solid #d0d0d0',
                            borderRadius: '4px',
                            marginTop: '4px',
                            maxHeight: '250px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                          }}
                        >
                          <div style={{ padding: '8px', borderBottom: '1px solid #e0e0e0' }}>
                            <input
                              type="text"
                              placeholder="Search bank accounts..."
                              value={bankSearchTerm}
                              onChange={(e) => setBankSearchTerm(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                width: '100%',
                                padding: '6px 10px',
                                border: '1px solid #d0d0d0',
                                borderRadius: '3px',
                                fontSize: '13px'
                              }}
                            />
                          </div>
                          <div>
                            {filteredBankAccounts.map((bank) => (
                              <div
                                key={bank.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggleBankAccount(bank.id);
                                }}
                                style={{
                                  padding: '10px 12px',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  background: newRule.bankAccounts.includes(bank.id) ? '#f0f7ff' : 'white',
                                  borderBottom: '1px solid #f0f0f0',
                                  fontSize: '13px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                                onMouseLeave={(e) => e.currentTarget.style.background = newRule.bankAccounts.includes(bank.id) ? '#f0f7ff' : 'white'}
                              >
                                <input
                                  type="checkbox"
                                  checked={newRule.bankAccounts.includes(bank.id)}
                                  onChange={() => {}}
                                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                                />
                                <span>{bank.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  )}
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={newRule.active}
                      onChange={(e) => setNewRule({ ...newRule, active: e.target.checked })}
                      style={{ width: '18px', height: '18px', marginRight: '8px', cursor: 'pointer' }}
                    />
                    <label style={{ fontSize: '13px', color: '#333', margin: 0 }}>Active</label>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleSaveRule}
                    style={{
                      padding: '8px 20px',
                      background: '#4a90e2',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fas fa-save" style={{ marginRight: '6px' }}></i>
                    Save
                  </button>
                  <button
                    onClick={handleCancelRule}
                    style={{
                      padding: '8px 20px',
                      background: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fas fa-times" style={{ marginRight: '6px' }}></i>
                    Cancel
                  </button>
                </div>
              </div>
            )}
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

export default ReconciliationRules;
