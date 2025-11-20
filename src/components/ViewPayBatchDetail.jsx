import React, { useState } from 'react';
import './Enquiries.css';

const ViewPayBatchDetail = ({ payBatchData, onBackClick, onEditClick }) => {
  const [activeSection, setActiveSection] = useState({
    primaryInfo: true,
    systemInfo: true,
    payBatchStatus: true,
    employeeList: true
  });

  const toggleSection = (section) => {
    setActiveSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEdit = () => {
    if (onEditClick) {
      onEditClick(payBatchData);
    }
  };

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  // Sample employee data from your image
  const employees = [
    { id: 16, name: 'TEA192 Ramulu Chettiar Muham', joinDate: '1/3/1995', status: 'Above 55 to 60', empId: '624851303', payDate: '1/3/2019', days: 31, payDays: 31, basic: 448.00, allowance: 2.00, overtime: 4.00, gross: 1374.00, method: 'PaySlip' },
    { id: 14, name: 'TEA399 Karuppasamy Muthuramam', joinDate: '4/5/1958', status: 'Above 50 to 55', empId: '568679152', payDate: '1/6/2021', days: 31, payDays: 31, basic: 851.00, allowance: 5.00, overtime: 5.50, gross: 1755.00, method: 'PaySlip' },
    { id: 18, name: 'TEA153 Ganapathi an S/O Kurukkaiah', joinDate: '2/10/1968', status: 'Above 50 to 55', empId: '568396218', payDate: '1/5/2017', days: 31, payDays: 31, basic: 592.00, allowance: 2.00, overtime: 4.00, gross: 1276.00, method: 'PaySlip' }
  ];

  return (
    <div className="enquiry-detail">
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <i className="fas fa-folder" style={{ fontSize: '20px', color: '#666' }}></i>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>Pay Batch</h1>
          <span style={{ fontSize: '18px', color: '#666' }}>PBATCH00255</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>←</button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>→</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>List</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Search</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Customize</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>More</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button 
          onClick={handleEdit}
          style={{
            background: '#007bff',
            color: 'white',
            border: '1px solid #007bff',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Edit
        </button>
        <button 
          onClick={handleBack}
          style={{
            background: '#6c757d',
            color: 'white',
            border: '1px solid #6c757d',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Back
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Email Payslip
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Pay Detail
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Print
        </button>
      </div>

      {/* Primary Information Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => toggleSection('primaryInfo')}
          style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>Primary Information</h3>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {activeSection.primaryInfo ? '▼' : '▶'}
          </span>
        </div>
        {activeSection.primaryInfo && (
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>ID</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>PBATCH00255</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>PAYMENT METHOD</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>Regular Payment</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>SUBSIDIARY</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>Tech Onshore MEP Prefabricators Pte Ltd... Tech Electric & Automation Pte Ltd</span>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>YEAR</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>2022</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>PERIOD START DATE</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>1/1/2022</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>PERIOD END DATE</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>31/1/2022</span>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>WORK CALENDAR</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>2022 TEA</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MONTH</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>January</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>PAY GROUP</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>EP & Local (TEA)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* System Information Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => toggleSection('systemInfo')}
          style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>System</h3>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {activeSection.systemInfo ? '▼' : '▶'}
          </span>
        </div>
        {activeSection.systemInfo && (
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>STATUS</label>
                  <span style={{ 
                    fontSize: '14px', 
                    color: 'white',
                    background: '#28a745',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontWeight: '500'
                  }}>Pay Batch Posted</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    ATTENDANCE SAVE
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    ADDED VARIABLE
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    RUN
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    ACCOUNT POSTING
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    LOADER CHECK
                  </label>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    VERIFIED
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    AD-HOC
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" checked readOnly />
                    COMMIT
                  </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>PAY SLIP EMAIL</label>
                  <span style={{ fontSize: '14px', color: '#333' }}></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PayBatch Status Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => toggleSection('payBatchStatus')}
          style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>PayBatch Status-Paybatch Creation Completed</h3>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {activeSection.payBatchStatus ? '▼' : '▶'}
          </span>
        </div>
        {activeSection.payBatchStatus && (
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>PAYEE EMPLOYEE COUNT</span>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>26.0</span>
              <label style={{ 
                fontSize: '12px', 
                fontWeight: '600', 
                color: '#666', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px',
                marginLeft: '20px'
              }}>
                <input type="checkbox" checked readOnly />
                SHOW SALARY ON ESS
              </label>
              <span style={{ fontSize: '12px', color: '#666', marginLeft: '20px' }}>DT PAYMENT</span>
            </div>
          </div>
        )}
      </div>

      {/* Employee List Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => toggleSection('employeeList')}
          style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>Employee List</h3>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {activeSection.employeeList ? '▼' : '▶'}
          </span>
        </div>
        {activeSection.employeeList && (
          <div style={{ padding: '20px' }}>
            <div style={{ 
              maxHeight: '300px', 
              overflowY: 'auto',
              border: '1px solid #e0e0e0',
              borderRadius: '4px'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ 
                  position: 'sticky', 
                  top: 0, 
                  background: '#f8f9fa',
                  zIndex: 1
                }}>
                  <tr>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>ID</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>NAME</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>JOIN DATE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>STATUS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>EMP ID</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>PAY DATE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>DAYS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>PAY DAYS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>BASIC</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>ALLOWANCE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>OVERTIME</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>GROSS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid #dee2e6', fontSize: '11px', fontWeight: '600' }}>METHOD</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.id} style={{ 
                      borderBottom: '1px solid #e9ecef',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa'
                    }}>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.id}</td>
                      <td style={{ padding: '8px', fontSize: '11px', color: '#007bff', cursor: 'pointer' }}>{employee.name}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.joinDate}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.status}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.empId}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.payDate}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.days}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.payDays}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.basic}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.allowance}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.overtime}</td>
                      <td style={{ padding: '8px', fontSize: '11px' }}>{employee.gross}</td>
                      <td style={{ padding: '8px', fontSize: '11px', color: '#007bff', cursor: 'pointer' }}>{employee.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginTop: '10px',
              fontSize: '12px',
              color: '#666'
            }}>
              <span>Showing 1 to 10 of 21 entries</span>
              <div style={{ display: 'flex', gap: '5px' }}>
                <button style={{ padding: '4px 8px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>Previous</button>
                <button style={{ padding: '4px 8px', border: '1px solid #ccc', background: '#007bff', color: 'white' }}>1</button>
                <button style={{ padding: '4px 8px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>2</button>
                <button style={{ padding: '4px 8px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>3</button>
                <button style={{ padding: '4px 8px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPayBatchDetail;
