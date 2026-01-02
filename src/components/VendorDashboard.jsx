import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const VendorDashboard = ({ vendorId, vendorName, onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [dateRange, setDateRange] = useState('6months');

  // Sample dashboard data
  const dashboardData = {
    totalPayable: 38750.00,
    totalPaid: 156200.00,
    overdueAmount: 8500.00,
    creditAvailable: 75000.00,
    lastPaymentDate: '2024-12-18',
    lastPaymentAmount: 22000.00
  };

  const recentPurchaseOrders = [
    {
      id: 'PO-2024-3456',
      date: '2024-12-12',
      dueDate: '2024-12-27',
      amount: 28000.00,
      received: 28000.00,
      billed: 28000.00,
      status: 'Billed'
    },
    {
      id: 'PO-2024-3398',
      date: '2024-12-05',
      dueDate: '2024-12-20',
      amount: 15500.00,
      received: 15500.00,
      billed: 15500.00,
      status: 'Billed'
    },
    {
      id: 'PO-2024-3367',
      date: '2024-11-28',
      dueDate: '2024-12-13',
      amount: 19200.00,
      received: 19200.00,
      billed: 0.00,
      status: 'Pending Bill'
    },
    {
      id: 'PO-2024-3289',
      date: '2024-11-15',
      dueDate: '2024-11-30',
      amount: 32500.00,
      received: 32500.00,
      billed: 32500.00,
      status: 'Billed'
    },
    {
      id: 'PO-2024-3245',
      date: '2024-11-08',
      dueDate: '2024-11-23',
      amount: 24800.00,
      received: 24800.00,
      billed: 24800.00,
      status: 'Billed'
    }
  ];

  const recentBills = [
    {
      id: 'BILL-2024-789',
      date: '2024-12-15',
      dueDate: '2024-12-30',
      amount: 28000.00,
      paid: 0.00,
      balance: 28000.00,
      status: 'Open',
      poReference: 'PO-2024-3456'
    },
    {
      id: 'BILL-2024-756',
      date: '2024-12-08',
      dueDate: '2024-12-23',
      amount: 15500.00,
      paid: 15500.00,
      balance: 0.00,
      status: 'Paid',
      poReference: 'PO-2024-3398'
    },
    {
      id: 'BILL-2024-723',
      date: '2024-11-20',
      dueDate: '2024-12-05',
      amount: 8500.00,
      paid: 0.00,
      balance: 8500.00,
      status: 'Overdue',
      poReference: 'PO-2024-3201'
    },
    {
      id: 'BILL-2024-689',
      date: '2024-11-18',
      dueDate: '2024-12-03',
      amount: 32500.00,
      paid: 32500.00,
      balance: 0.00,
      status: 'Paid',
      poReference: 'PO-2024-3289'
    }
  ];

  const recentPayments = [
    {
      id: 'VPMT-2024-445',
      date: '2024-12-18',
      amount: 22000.00,
      method: 'Bank Transfer',
      reference: 'TXN-VEN-20241218-001',
      appliedTo: 'BILL-2024-756, BILL-2024-689'
    },
    {
      id: 'VPMT-2024-412',
      date: '2024-12-05',
      amount: 15500.00,
      method: 'Cheque',
      reference: 'CHQ-VEN-456789',
      appliedTo: 'BILL-2024-723'
    },
    {
      id: 'VPMT-2024-389',
      date: '2024-11-28',
      amount: 28000.00,
      method: 'Bank Transfer',
      reference: 'TXN-VEN-20241128-005',
      appliedTo: 'BILL-2024-645'
    },
    {
      id: 'VPMT-2024-356',
      date: '2024-11-15',
      amount: 35000.00,
      method: 'Bank Transfer',
      reference: 'TXN-VEN-20241115-002',
      appliedTo: 'BILL-2024-598, BILL-2024-612'
    }
  ];

  const monthlyData = [
    { month: 'Jul', purchased: 52000, paid: 48000 },
    { month: 'Aug', purchased: 61000, paid: 58000 },
    { month: 'Sep', purchased: 45000, paid: 45000 },
    { month: 'Oct', purchased: 68000, paid: 62000 },
    { month: 'Nov', purchased: 54000, paid: 51000 },
    { month: 'Dec', purchased: 48500, paid: 43500 }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return '#10b981';
      case 'Billed': return '#3b82f6';
      case 'Pending Bill': return '#f59e0b';
      case 'Overdue': return '#ef4444';
      case 'Open': return '#6366f1';
      default: return '#6b7280';
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-bar"></i>
          <div>
            <h1>Vendor Dashboard</h1>
            <div className="detail-subtitle">
              <span>{vendorName || 'Vendor Overview'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-download"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-print"></i>
          </button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6b7280' }}>Period:</label>
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="form-control"
            style={{ width: '150px' }}
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="detail-content">
        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          <div 
            style={{ 
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2rem', color: '#fee2e2', opacity: 0.3 }}>
              <i className="fas fa-file-invoice"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-file-invoice-dollar" style={{ marginRight: '0.5rem', color: '#dc2626' }}></i>
              Total Payable
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.totalPayable.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#dc2626', fontWeight: '600' }}>
              <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>
              ${dashboardData.overdueAmount.toLocaleString()} overdue
            </div>
          </div>

          <div 
            style={{ 
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#8b5cf6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2rem', color: '#ede9fe', opacity: 0.3 }}>
              <i className="fas fa-check-circle"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-hand-holding-usd" style={{ marginRight: '0.5rem', color: '#8b5cf6' }}></i>
              Total Paid (YTD)
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.totalPaid.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#8b5cf6', fontWeight: '600' }}>
              <i className="fas fa-arrow-down" style={{ marginRight: '0.25rem' }}></i>
              Last: ${dashboardData.lastPaymentAmount.toLocaleString()}
            </div>
          </div>

          <div 
            style={{ 
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2rem', color: '#dbeafe', opacity: 0.3 }}>
              <i className="fas fa-handshake"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-credit-card" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i>
              Credit Available
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.creditAvailable.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#3b82f6', fontWeight: '600' }}>
              <i className="fas fa-calendar-alt" style={{ marginRight: '0.25rem' }}></i>
              Terms: Net 30
            </div>
          </div>

          <div 
            style={{ 
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#f59e0b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2rem', color: '#fef3c7', opacity: 0.3 }}>
              <i className="fas fa-calendar-check"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-clock" style={{ marginRight: '0.5rem', color: '#f59e0b' }}></i>
              Last Payment
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>{dashboardData.lastPaymentDate}</div>
            <div style={{ fontSize: '0.8125rem', color: '#888', fontWeight: '600' }}>
              <i className="fas fa-money-bill-wave" style={{ marginRight: '0.25rem', color: '#f59e0b' }}></i>
              ${dashboardData.lastPaymentAmount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Monthly Chart */}
          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: '1.5rem'
          }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
              Purchase & Payment Trend
            </h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', height: '280px', padding: '0 1rem' }}>
              {monthlyData.map((data, idx) => {
                const maxValue = Math.max(...monthlyData.map(d => Math.max(d.purchased, d.paid)));
                const purchasedHeight = (data.purchased / maxValue) * 200;
                const paidHeight = (data.paid / maxValue) * 200;
                
                return (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: '240px' }}>
                      <div style={{ 
                        width: '28px', 
                        height: `${purchasedHeight}px`, 
                        background: '#f59e0b',
                        borderRadius: '2px 2px 0 0',
                        position: 'relative'
                      }}>
                        <div style={{ 
                          position: 'absolute', 
                          top: '-22px', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontSize: '0.6875rem',
                          color: '#666',
                          whiteSpace: 'nowrap',
                          fontWeight: '600'
                        }}>
                          ${(data.purchased / 1000).toFixed(0)}k
                        </div>
                      </div>
                      <div style={{ 
                        width: '28px', 
                        height: `${paidHeight}px`, 
                        background: '#8b5cf6',
                        borderRadius: '2px 2px 0 0'
                      }}></div>
                    </div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#666' }}>{data.month}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '14px', height: '14px', background: '#f59e0b', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Purchased</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '14px', height: '14px', background: '#8b5cf6', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Paid</span>
              </div>
            </div>
          </div>

          {/* Bill Status Breakdown */}
          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: '1.5rem'
          }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
              Bill Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}>Paid</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#8b5cf6' }}>$48,000</span>
                </div>
                <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '55%', height: '100%', background: '#8b5cf6' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}>Open</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#3b82f6' }}>$28,000</span>
                </div>
                <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '32%', height: '100%', background: '#3b82f6' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}>Overdue</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#dc2626' }}>$8,500</span>
                </div>
                <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '13%', height: '100%', background: '#dc2626' }}></div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e0e0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Total Billed</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1a1a1a' }}>$84,500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Payment Rate</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#8b5cf6' }}>57%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: '1.5rem'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
              Recent Bills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentBills.slice(0, 5).map((bill, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: '#fafafa',
                  borderRadius: '4px',
                  border: '1px solid #f0f0f0'
                }}>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1a1a1a' }}>{bill.id}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>{bill.date}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1a1a1a' }}>${bill.balance.toLocaleString()}</div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: getStatusColor(bill.status),
                      fontWeight: '600',
                      marginTop: '0.25rem'
                    }}>
                      {bill.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: '1.5rem'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
              Recent Payments
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentPayments.slice(0, 5).map((payment, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: '#fafafa',
                  borderRadius: '4px',
                  border: '1px solid #f0f0f0'
                }}>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1a1a1a' }}>{payment.id}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>{payment.date}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#8b5cf6' }}>${payment.amount.toLocaleString()}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>{payment.method}</div>
                  </div>
                </div>
              ))}
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

export default VendorDashboard;
