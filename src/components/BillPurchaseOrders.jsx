import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const BillPurchaseOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedVendor, setSelectedVendor] = useState('-- All --');

  const [purchaseOrders] = useState([
    {
      id: 1,
      date: '8/7/2021',
      poNumber: 'POTOMO0327',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '101 Kitchener Road #02-16 Jalan Besar Plaza Singapore 208511',
      memo: 'TOM-PO-2021-1727',
      orderTotal: 48.15,
      currency: 'SGD'
    },
    {
      id: 2,
      date: '22/7/2021',
      poNumber: 'POTOMO0103',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '101 Kitchener Road #02-16 Jalan Besar Plaza Singapore 208511',
      memo: 'TOM-PO-2021-1854',
      orderTotal: 529.65,
      currency: 'SGD'
    },
    {
      id: 3,
      date: '2/9/2021',
      poNumber: 'POTOMO0366',
      vendorName: 'TRONIX WORLD LOGISTICS PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: 'No 15 Pandan Crescent Singapore 128470',
      memo: 'TOM-PO-2021-2282',
      orderTotal: 149.80,
      currency: 'SGD'
    },
    {
      id: 4,
      date: '13/9/2021',
      poNumber: 'POTOMO0401',
      vendorName: 'METAL FORMS PRIVATE LIMITED',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '83,SENGUNDRAM ROAD SINGAPERUMAL KOIL, CHENGALPATTU TALUK, KANCHIPURAM DISTRICT - 603 204. Tamil Nadu, India',
      memo: 'This PO belongs to TOM-PO-2021-2390',
      orderTotal: 9750.00,
      currency: 'SGD'
    },
    {
      id: 5,
      date: '27/9/2021',
      poNumber: 'POTOMO0328',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '101 Kitchener Road #02-16 Jalan Besar Plaza Singapore 208511',
      memo: 'TOM-PO-2021-2496',
      orderTotal: 311.37,
      currency: 'SGD'
    },
    {
      id: 6,
      date: '19/10/2021',
      poNumber: 'POTOMO0101',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '101 Kitchener Road #02-16 Jalan Besar Plaza Singapore 208511',
      memo: 'TOM-PO-2021-2701',
      orderTotal: 1572.90,
      currency: 'SGD'
    },
    {
      id: 7,
      date: '28/10/2021',
      poNumber: 'POTOMO0348',
      vendorName: 'MEE DEMAG (S) PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '33 Gul Circle, Jurong Singapore 629570',
      memo: 'TOM-PO-2021-2801',
      orderTotal: 2591.54,
      currency: 'SGD'
    },
    {
      id: 8,
      date: '8/11/2021',
      poNumber: 'POTOMO0206',
      vendorName: 'TAT ENG INDUSTRIES PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: 'BLK 25 PIONEER ROAD NORTH #01-122 SINGAPORE 628469',
      memo: 'This PO belongs to TOM-PO-2021-2873',
      orderTotal: 321.00,
      currency: 'SGD'
    },
    {
      id: 9,
      date: '9/11/2021',
      poNumber: 'POTOMO0090',
      vendorName: 'METAL FORMS PRIVATE LIMITED',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '83,SENGUNDRAM ROAD SINGAPERUMAL KOIL, CHENGALPATTU TALUK, KANCHIPURAM DISTRICT - 603 204. Tamil Nadu, India',
      memo: 'This PO belongs to TOM-PO-2021-2894',
      orderTotal: 62325.35,
      currency: 'SGD'
    },
    {
      id: 10,
      date: '9/11/2021',
      poNumber: 'POTOMO0105',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '101 Kitchener Road #02-16 Jalan Besar Plaza Singapore 208511',
      memo: 'TOM-PO-2021-2896',
      orderTotal: 597.06,
      currency: 'SGD'
    },
    {
      id: 11,
      date: '10/11/2021',
      poNumber: 'POTOMO0115',
      vendorName: 'SUPER GALVANISING PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '1a, Pioneer Sector Walk Singapore 627895',
      memo: 'This PO belongs to TOM-PO-2021-2900',
      orderTotal: 3542.77,
      currency: 'SGD'
    },
    {
      id: 12,
      date: '24/5/2022',
      poNumber: 'POTOM01739',
      vendorName: 'Techniques Air Conditioning & Refrigeration',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '39, Kaki Bukit Crescent, Kaki Bukit TechPark 1, Singapore 416250',
      memo: '',
      orderTotal: 484.71,
      currency: 'SGD'
    },
    {
      id: 13,
      date: '25/5/2022',
      poNumber: 'POTOM01758',
      vendorName: 'EASTERN SEALAND SUPPLY PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '17 Tuas South St 5 S637646',
      memo: '',
      orderTotal: 117.70,
      currency: 'SGD'
    },
    {
      id: 14,
      date: '25/5/2022',
      poNumber: 'POTOM01766',
      vendorName: 'HOE HUAT HARDWARE (S) PTE LTD',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      billTo: '25 Pioneer Road North #01-128 Singapore 628469',
      memo: '',
      orderTotal: 2354.00,
      currency: 'SGD'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewPO = (po) => {
    if (setCurrentPage) {
      setCurrentPage('view-bill-purchase-order-detail');
    }
  };

  const handleSubmit = () => {
    showToast('Purchase orders submitted successfully!', 'success');
  };

  const handleMarkAll = () => {
    showToast('All items marked', 'info');
  };

  const handleUnmarkAll = () => {
    showToast('All items unmarked', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Bill Purchase Order</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">More</button>
        </div>
      </div>

      <div className="list-controls" style={{ padding: '20px', background: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', maxWidth: '100%' }}>
          <button className="btn btn-primary" onClick={handleSubmit} style={{ minWidth: '120px' }}>
            <i className="fas fa-check"></i> Submit
          </button>
          <button className="btn btn-secondary" onClick={handleMarkAll} style={{ minWidth: '120px' }}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll} style={{ minWidth: '120px' }}>
            Unmark All
          </button>
        </div>
      </div>

      <div style={{ padding: '20px', background: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '0 0 auto' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>VENDOR <span style={{ color: '#e53e3e' }}>*</span></label>
            <select 
              className="form-control"
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
              style={{ width: '300px', fontSize: '13px' }}
            >
              <option>-- All --</option>
              <option>CHIA HOCK HARDWARE TRADING</option>
              <option>TRONIX WORLD LOGISTICS PTE LTD</option>
              <option>METAL FORMS PRIVATE LIMITED</option>
              <option>MEE DEMAG (S) PTE LTD</option>
              <option>TAT ENG INDUSTRIES PTE LTD</option>
              <option>SUPER GALVANISING PTE LTD</option>
              <option>Techniques Air Conditioning & Refrigeration</option>
              <option>EASTERN SEALAND SUPPLY PTE LTD</option>
              <option>HOE HUAT HARDWARE (S) PTE LTD</option>
            </select>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '0 0 auto' }}>
            <input type="checkbox" />
            <span style={{ fontSize: '12px', color: '#666', whiteSpace: 'nowrap' }}>USE BILL-TO ADDRESS FROM VENDOR</span>
          </label>
        </div>
      </div>

      <div style={{ padding: '15px 20px', background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn-customize">Customize</button>
          <div style={{ fontSize: '13px', color: '#666' }}>
            1 to 200 of 1372
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th style={{ width: '100px' }}>DATE ▲</th>
              <th style={{ width: '120px' }}>PO #</th>
              <th style={{ width: '200px' }}>VENDOR NAME</th>
              <th style={{ width: '180px' }}>SUBSIDIARY</th>
              <th style={{ width: '250px' }}>BILL TO</th>
              <th style={{ width: '150px' }}>MEMO</th>
              <th style={{ width: '100px', textAlign: 'right' }}>ORDER TOTAL</th>
              <th style={{ width: '80px' }}>CURRENCY</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrders.map((po) => (
              <tr key={po.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleViewPO(po)}
                    style={{ color: '#4a90e2', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {po.date}
                  </button>
                </td>
                <td className="doc-number">{po.poNumber}</td>
                <td>{po.vendorName}</td>
                <td>{po.subsidiary}</td>
                <td style={{ fontSize: '12px' }}>{po.billTo}</td>
                <td>{po.memo}</td>
                <td className="amount" style={{ textAlign: 'right' }}>{po.orderTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td>{po.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ padding: '15px 20px', background: 'white', borderTop: '1px solid #e0e0e0', display: 'flex', gap: '10px' }}>
        <button className="btn btn-primary" onClick={handleSubmit}>
          <i className="fas fa-check"></i> Submit
        </button>
        <button className="btn btn-secondary" onClick={handleMarkAll}>
          Mark All
        </button>
        <button className="btn btn-secondary" onClick={handleUnmarkAll}>
          Unmark All
        </button>
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

export default BillPurchaseOrders;
