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
    active: true
  });

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
    setNewRule({ ruleName: '', matchOn: 'amount', dateTolerance: '', active: true });
    setShowNewRuleForm(false);
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
          
          {/* System Rules Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#5a6c7d',
              marginBottom: '16px'
            }}>
              System Rules
            </h2>

            {/* Table */}
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{ background: '#e8e8e8', borderBottom: '1px solid #d0d0d0' }}>
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
                </tr>
              </thead>
              <tbody>
                {systemRules.map((rule) => (
                  <tr 
                    key={rule.id}
                    style={{ 
                      borderBottom: '1px solid #e8e8e8',
                      background: 'white'
                    }}
                  >
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* User Rules Section */}
          <div>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#5a6c7d',
              marginBottom: '8px'
            }}>
              User Rules
            </h2>
            <p style={{ 
              fontSize: '13px', 
              color: '#666',
              marginBottom: '16px'
            }}>
              To change the order in which NetSuite runs these rules, drag and drop the rules in the list.
            </p>

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
                fontWeight: '500',
                marginBottom: '16px'
              }}
            >
              <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
              New Rule
            </button>

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
                      MATCH ON
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
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#5a6c7d' }}>
                      DATE TOLERANCE (DAYS)
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
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
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

            {userRules.length === 0 && !showNewRuleForm && (
              <div style={{ 
                marginTop: '20px',
                padding: '40px',
                textAlign: 'center',
                color: '#999',
                fontSize: '14px',
                border: '1px dashed #ddd',
                borderRadius: '4px'
              }}>
                No user rules defined. Click "New Rule" to create one.
              </div>
            )}

            {userRules.length > 0 && (
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
                  {userRules.map((rule) => (
                    <tr 
                      key={rule.id}
                      style={{ 
                        borderBottom: '1px solid #e8e8e8',
                        background: 'white'
                      }}
                    >
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
                </tbody>
              </table>
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
