import React, { useState } from 'react';
import './Enquiries.css';

const ReconciliationRules = ({ setCurrentPage }) => {
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

  const [userRules] = useState([]);

  const handleNewRule = () => {
    console.log('Creating new rule');
  };

  const handleToggleRule = (ruleId) => {
    console.log('Toggling rule:', ruleId);
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
                background: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              New Rule
            </button>

            {userRules.length === 0 && (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReconciliationRules;
