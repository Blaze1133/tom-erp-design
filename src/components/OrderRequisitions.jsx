import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const OrderRequisitions = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [subsidiary, setSubsidiary] = useState('');
  const [department, setDepartment] = useState('');
  const [type, setType] = useState('');
  const [prOwner, setPrOwner] = useState('');

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd'
  ];

  const departments = [
    'Shipyard : Keppel Fels',
    'Shipyard : Keppel Shipyard',
    'Shipyard : Megayard',
    'Shipyard : Sembawang',
    'TOM',
    'TOM : Admin',
    'TOM : Electrical and E&I',
    'TOM : Facility',
    'TOM : IT/MIS/IH',
    'TOM : Mechanical',
    'TOM : Piping'
  ];

  const [requisitions] = useState([
    {
      id: 1,
      select: false,
      requestNo: 'PR22TOM00165',
      prDate: '25/2/2022',
      item: 'FLUSH ANCHORS',
      unit: 'Pcs',
      requestedQty: 1.0,
      description: '',
      supplier: '21-0149 GF-OSM-WOODLANDS INDUSTRIAL PARK',
      project: 'MEP',
      currency: '',
      unitRate: 300.0,
      estimatedAmount: 300.00
    },
    {
      id: 2,
      select: false,
      requestNo: 'PR22TOM00110',
      prDate: '1/3/2022',
      item: 'PROJECT ITEM',
      unit: 'Pcs',
      requestedQty: 2.0,
      description: 'Wood Shim (120 x 200 x 50mm Thk)',
      supplier: 'TOM21-OM52 Onan Solutions Singapore - O&G Pte. Ltd. (A Senior Company) : 22-0052 Onan Solutions Singapore - O&G Pte. Ltd.',
      project: 'SGD',
      currency: 'SGD',
      unitRate: 360.0,
      estimatedAmount: 720.00
    },
    {
      id: 3,
      select: false,
      requestNo: 'PR22TOM00146',
      prDate: '11/3/2022',
      item: 'New Item',
      unit: 'Pcs',
      requestedQty: 100.0,
      description: 'SAFETY CONES',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 4,
      select: false,
      requestNo: 'PR22TOM00147',
      prDate: '11/3/2022',
      item: 'New Item',
      unit: 'Pcs',
      requestedQty: 200.0,
      description: 'PVC Drawer for barricade',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 5,
      select: false,
      requestNo: 'PR22TOM00165',
      prDate: '17/3/2022',
      item: 'PROJECT ITEM',
      unit: 'Each',
      requestedQty: 100.0,
      description: 'M12 x 80 mm long Hex Head Bolts with single nut GL class 10.9',
      supplier: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
      project: 'Equipe Services & Technology Pte Ltd : 22-0026 NORT-Lifting of 32 x PCW Filters, Replace bottom portions, cleaning',
      currency: 'SGD',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 6,
      select: false,
      requestNo: 'PR22TOM00169',
      prDate: '18/3/2022',
      item: 'Common Materials',
      unit: 'Pcs',
      requestedQty: 1.0,
      description: 'Card Printer Ribbon ( Greyway pass Type card)',
      supplier: 'TOM WORKSHOP(DETONN21-00065 TOM INTERNALS - TOM WORKSHOP',
      project: 'TOM',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 7,
      select: false,
      requestNo: 'PR22TOM00169',
      prDate: '18/3/2022',
      item: 'Common Materials',
      unit: 'Pcs',
      requestedQty: 10.0,
      description: 'Cutting Plier',
      supplier: 'TOM WORKSHOP(DETONN21-00065 TOM INTERNALS - TOM WORKSHOP',
      project: 'TOM',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 8,
      select: false,
      requestNo: 'PR22TOM500005',
      prDate: '18/3/2022',
      item: 'Renewal Cost-HR : Accommodation',
      unit: 'Nos',
      requestedQty: 15.0,
      description: 'Accommodation',
      supplier: 'CAPITAL DEVELOPMENT (TUAS) PTE LTD',
      project: '',
      currency: 'SGD',
      unitRate: 3200.0,
      estimatedAmount: 48000.00
    },
    {
      id: 9,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'New Material',
      unit: 'Pcs',
      requestedQty: 10000.0,
      description: 'Galvanized nuts',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 10,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'New Material',
      unit: 'Pcs',
      requestedQty: 10000.0,
      description: '50*50 Square washers',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 11,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'New Item',
      unit: 'Pcs',
      requestedQty: 10.0,
      description: 'Cello tape',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 12,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'Padlock',
      unit: 'Set',
      requestedQty: 5.0,
      description: 'Heavy Duty',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 13,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'New Item',
      unit: 'Pcs',
      requestedQty: 10.0,
      description: 'Cloth tapes',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    },
    {
      id: 14,
      select: false,
      requestNo: 'PR22TOM00177',
      prDate: '20/3/2022',
      item: 'New Material',
      unit: 'Pcs',
      requestedQty: 500.0,
      description: 'M10 galvanized joint couplers',
      supplier: '20-0052 Forta Construction Pte. Ltd : Forta Project SGA',
      project: 'MEP',
      currency: '',
      unitRate: 0.0,
      estimatedAmount: 0.00
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Order requisitions submitted successfully!', 'success');
  };

  const handleReset = () => {
    setSubsidiary('');
    setDepartment('');
    setType('');
    setPrOwner('');
    showToast('Filters reset', 'info');
  };

  const handleSelectAll = () => {
    showToast('All items selected', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clipboard-list"></i>
          <h1>Order Requisitions</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">More</button>
        </div>
      </div>

      {/* Filter Section */}
      <div style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={{ 
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-tertiary" onClick={handleReset}>
              Reset
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={subsidiary}
                onChange={(e) => setSubsidiary(e.target.value)}
              >
                <option value="">Select...</option>
                {subsidiaries.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">FILTER</label>
              <select 
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="project">Project PR</option>
                <option value="department">Department PR</option>
                <option value="enquiry">Enquiry PR</option>
                <option value="store">Store Requisition</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <select 
                className="form-control"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select...</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PR OWNER</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="<Type then Tab>"
                value={prOwner}
                onChange={(e) => setPrOwner(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Department Order Requisitions Section */}
      <div style={{ padding: '1.5rem 2rem', background: '#f8f8f8' }}>
        <div style={{ 
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0',
          overflow: 'hidden'
        }}>
          {/* Header with SELECT ALL */}
          <div style={{ 
            padding: '1rem 1.5rem',
            background: '#f8f8f8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', color: '#333' }}>
              <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
              Department Order Requisitions
            </h3>
            <button 
              className="btn btn-tertiary" 
              style={{ fontSize: '0.875rem', padding: '0.4rem 1rem' }}
              onClick={handleSelectAll}
            >
              SELECT ALL
            </button>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table className="enquiries-table" style={{ margin: 0 }}>
          <thead>
            <tr>
              <th style={{ width: '3%' }}>SELECT</th>
              <th style={{ width: '7%' }}>REQUEST NO</th>
              <th style={{ width: '6%' }}>PR DATE</th>
              <th style={{ width: '8%' }}>ITEM</th>
              <th style={{ width: '4%' }}>UNIT</th>
              <th style={{ width: '6%' }}>REQUESTED QTY</th>
              <th style={{ width: '12%' }}>DESCRIPTION</th>
              <th style={{ width: '18%' }}>SUPPLIER</th>
              <th style={{ width: '8%' }}>PROJECT</th>
              <th style={{ width: '5%' }}>DEPARTMENT</th>
              <th style={{ width: '5%' }}>CURRENCY</th>
              <th style={{ width: '6%' }}>UNIT RATE (WITH GST)</th>
              <th style={{ width: '8%' }}>ESTIMATED AMOUNT (WITH GST)</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((req) => (
              <tr key={req.id}>
                <td>
                  <input type="checkbox" defaultChecked={req.select} />
                </td>
                <td className="doc-number">{req.requestNo}</td>
                <td>{req.prDate}</td>
                <td>{req.item}</td>
                <td>{req.unit}</td>
                <td className="amount">{req.requestedQty.toFixed(1)}</td>
                <td>{req.description}</td>
                <td style={{ fontSize: '0.75rem' }}>{req.supplier}</td>
                <td>{req.project}</td>
                <td></td>
                <td>{req.currency}</td>
                <td className="amount">{req.unitRate.toFixed(1)}</td>
                <td className="amount">{req.estimatedAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default OrderRequisitions;
