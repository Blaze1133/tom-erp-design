import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CustomerDashboard = ({ customerId, customerName, onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [dateRange, setDateRange] = useState('6months');

  // Sample dashboard data
  const dashboardData = {
    totalOutstanding: 45250.00,
    totalPaid: 128500.00,
    overdueAmount: 12300.00,
    creditLimit: 100000.00,
    availableCredit: 54750.00,
    lastPaymentDate: '2024-12-20',
    lastPaymentAmount: 15000.00
  };

  const recentInvoices = [
    {
      id: 'INV-2024-1234',
      date: '2024-12-15',
      dueDate: '2024-12-30',
      amount: 25000.00,
      paid: 10000.00,
      balance: 15000.00,
      status: 'Partial'
    },
    {
      id: 'INV-2024-1189',
      date: '2024-12-01',
      dueDate: '2024-12-15',
      amount: 18500.00,
      paid: 18500.00,
      balance: 0.00,
      status: 'Paid'
    },
    {
      id: 'INV-2024-1145',
      date: '2024-11-20',
      dueDate: '2024-12-05',
      amount: 12300.00,
      paid: 0.00,
      balance: 12300.00,
      status: 'Overdue'
    },
    {
      id: 'INV-2024-1098',
      date: '2024-11-10',
      dueDate: '2024-11-25',
      amount: 32000.00,
      paid: 32000.00,
      balance: 0.00,
      status: 'Paid'
    },
    {
      id: 'INV-2024-1056',
      date: '2024-10-28',
      dueDate: '2024-11-12',
      amount: 17950.00,
      paid: 0.00,
      balance: 17950.00,
      status: 'Partial'
    }
  ];

  const recentPayments = [
    {
      id: 'PMT-2024-567',
      date: '2024-12-20',
      amount: 15000.00,
      method: 'Bank Transfer',
      reference: 'TXN-20241220-001',
      appliedTo: 'INV-2024-1234'
    },
    {
      id: 'PMT-2024-534',
      date: '2024-12-05',
      amount: 18500.00,
      method: 'Cheque',
      reference: 'CHQ-789456',
      appliedTo: 'INV-2024-1189'
    },
    {
      id: 'PMT-2024-498',
      date: '2024-11-28',
      amount: 32000.00,
      method: 'Bank Transfer',
      reference: 'TXN-20241128-003',
      appliedTo: 'INV-2024-1098'
    },
    {
      id: 'PMT-2024-467',
      date: '2024-11-15',
      amount: 28000.00,
      method: 'Cash',
      reference: 'CASH-001',
      appliedTo: 'INV-2024-1034'
    }
  ];

  const monthlyData = [
    { month: 'Jul', invoiced: 45000, paid: 42000 },
    { month: 'Aug', invoiced: 52000, paid: 48000 },
    { month: 'Sep', invoiced: 38000, paid: 38000 },
    { month: 'Oct', invoiced: 61000, paid: 55000 },
    { month: 'Nov', invoiced: 48000, paid: 44000 },
    { month: 'Dec', invoiced: 43500, paid: 28500 }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return '#10b981';
      case 'Partial': return '#f59e0b';
      case 'Overdue': return '#ef4444';
      case 'Open': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Customer Dashboard</h1>
            <div className="detail-subtitle">
              <span>{customerName || 'Customer Overview'}</span>
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
            className="dashboard-card"
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
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-file-invoice-dollar" style={{ marginRight: '0.5rem', color: '#dc2626' }}></i>
              Total Outstanding
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.totalOutstanding.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#dc2626', fontWeight: '600' }}>
              <i className="fas fa-arrow-up" style={{ marginRight: '0.25rem' }}></i>
              ${dashboardData.overdueAmount.toLocaleString()} overdue
            </div>
          </div>

          <div 
            className="dashboard-card"
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
              e.currentTarget.style.borderColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '2rem', color: '#d1fae5', opacity: 0.3 }}>
              <i className="fas fa-check-circle"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-hand-holding-usd" style={{ marginRight: '0.5rem', color: '#10b981' }}></i>
              Total Paid (YTD)
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.totalPaid.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#10b981', fontWeight: '600' }}>
              <i className="fas fa-arrow-down" style={{ marginRight: '0.25rem' }}></i>
              Last: ${dashboardData.lastPaymentAmount.toLocaleString()}
            </div>
          </div>

          <div 
            className="dashboard-card"
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
              <i className="fas fa-credit-card"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              <i className="fas fa-wallet" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i>
              Credit Limit
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>${dashboardData.creditLimit.toLocaleString()}</div>
            <div style={{ fontSize: '0.8125rem', color: '#3b82f6', fontWeight: '600' }}>
              <i className="fas fa-chart-line" style={{ marginRight: '0.25rem' }}></i>
              Available: ${dashboardData.availableCredit.toLocaleString()}
            </div>
          </div>

          <div 
            className="dashboard-card"
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
            borderRadius: '6px',
            padding: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '8px', 
                background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <i className="fas fa-chart-bar" style={{ color: 'white', fontSize: '1.125rem' }}></i>
              </div>
              <h3 style={{ margin: 0, fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
                Revenue & Collection Trend
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', height: '280px', padding: '0 1rem' }}>
                {monthlyData.map((data, idx) => {
                  const maxValue = Math.max(...monthlyData.map(d => Math.max(d.invoiced, d.paid)));
                  const invoicedHeight = (data.invoiced / maxValue) * 200;
                  const paidHeight = (data.paid / maxValue) * 200;
                  
                  return (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <div 
                        style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: '240px' }}
                        onMouseEnter={(e) => {
                          const bars = e.currentTarget.querySelectorAll('.chart-bar');
                          bars.forEach(bar => bar.style.opacity = '1');
                        }}
                        onMouseLeave={(e) => {
                          const bars = e.currentTarget.querySelectorAll('.chart-bar');
                          bars.forEach(bar => bar.style.opacity = '0.95');
                        }}
                      >
                        <div 
                          className="chart-bar"
                          style={{ 
                            width: '28px', 
                            height: `${invoicedHeight}px`, 
                            background: 'linear-gradient(180deg, #4a90e2 0%, #357abd 100%)',
                            borderRadius: '4px 4px 0 0',
                            position: 'relative',
                            opacity: '0.95',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(74, 144, 226, 0.2)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scaleY(1.05)';
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(74, 144, 226, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scaleY(1)';
                            e.currentTarget.style.opacity = '0.95';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(74, 144, 226, 0.2)';
                          }}
                        >
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
                            ${(data.invoiced / 1000).toFixed(0)}k
                          </div>
                        </div>
                        <div 
                          className="chart-bar"
                          style={{ 
                            width: '28px', 
                            height: `${paidHeight}px`, 
                            background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                            borderRadius: '4px 4px 0 0',
                            opacity: '0.95',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scaleY(1.05)';
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(16, 185, 129, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scaleY(1)';
                            e.currentTarget.style.opacity = '0.95';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(16, 185, 129, 0.2)';
                          }}
                        ></div>
                      </div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#666' }}>{data.month}</div>
                    </div>
                  );
                })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '14px', height: '14px', background: '#4a90e2', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Invoiced</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '14px', height: '14px', background: '#10b981', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Collected</span>
              </div>
            </div>
          </div>

          {/* Payment Status Breakdown */}
          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '8px', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <i className="fas fa-chart-pie" style={{ color: 'white', fontSize: '1.125rem' }}></i>
              </div>
              <h3 style={{ margin: 0, fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
                Payment Status
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}>Paid</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#10b981' }}>$18,500</span>
                </div>
                <div 
                  style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1)';
                  }}
                >
                  <div style={{ 
                    width: '41%', 
                    height: '100%', 
                    background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
                  }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}><i className="fas fa-clock" style={{ marginRight: '0.5rem', color: '#f59e0b' }}></i>Partial</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#f59e0b' }}>$15,000</span>
                </div>
                <div 
                  style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1)';
                  }}
                >
                  <div style={{ 
                    width: '33%', 
                    height: '100%', 
                    background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(245, 158, 11, 0.3)'
                  }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#666' }}><i className="fas fa-exclamation-triangle" style={{ marginRight: '0.5rem', color: '#dc2626' }}></i>Overdue</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#dc2626' }}>$12,300</span>
                </div>
                <div 
                  style={{ height: '10px', background: '#f0f0f0', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scaleY(1)';
                  }}
                >
                  <div style={{ 
                    width: '26%', 
                    height: '100%', 
                    background: 'linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(220, 38, 38, 0.3)'
                  }}></div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e0e0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Total Invoiced</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1a1a1a' }}>$45,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: '#666' }}>Collection Rate</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#10b981' }}>74%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '6px', 
                background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem'
              }}>
                <i className="fas fa-file-invoice" style={{ color: 'white', fontSize: '0.875rem' }}></i>
              </div>
              <h3 style={{ margin: 0, fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
                Recent Invoices
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentInvoices.slice(0, 5).map((invoice, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.875rem',
                  background: '#fafafa',
                  borderRadius: '6px',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#4a90e2';
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(74, 144, 226, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fafafa';
                  e.currentTarget.style.borderColor = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1a1a1a' }}>
                      <i className="fas fa-file-alt" style={{ marginRight: '0.5rem', color: '#4a90e2', fontSize: '0.75rem' }}></i>
                      {invoice.id}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
                      <i className="far fa-calendar" style={{ marginRight: '0.25rem' }}></i>
                      {invoice.date}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#1a1a1a' }}>${invoice.balance.toLocaleString()}</div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: getStatusColor(invoice.status),
                      fontWeight: '600',
                      marginTop: '0.25rem'
                    }}>
                      <i className={`fas fa-circle`} style={{ fontSize: '0.5rem', marginRight: '0.375rem' }}></i>
                      {invoice.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'white', 
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '6px', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem'
              }}>
                <i className="fas fa-money-check-alt" style={{ color: 'white', fontSize: '0.875rem' }}></i>
              </div>
              <h3 style={{ margin: 0, fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>
                Recent Payments
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentPayments.slice(0, 5).map((payment, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.875rem',
                  background: '#fafafa',
                  borderRadius: '6px',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fafafa';
                  e.currentTarget.style.borderColor = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1a1a1a' }}>
                      <i className="fas fa-receipt" style={{ marginRight: '0.5rem', color: '#10b981', fontSize: '0.75rem' }}></i>
                      {payment.id}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
                      <i className="far fa-calendar" style={{ marginRight: '0.25rem' }}></i>
                      {payment.date}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#10b981' }}>
                      <i className="fas fa-check-circle" style={{ marginRight: '0.25rem', fontSize: '0.75rem' }}></i>
                      ${payment.amount.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
                      <i className="fas fa-university" style={{ marginRight: '0.25rem' }}></i>
                      {payment.method}
                    </div>
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

export default CustomerDashboard;
