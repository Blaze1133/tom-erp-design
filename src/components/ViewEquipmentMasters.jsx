import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEquipmentMasters = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('Equipment Name');

  const equipmentData = [
    {
      id: 1,
      equipmentName: '4 TPI WORKING PLUG GAUGE API 7-2',
      modelSpec: '-',
      tagId: 'TOMEQ-TP-001',
      serialNo: 'SP 008',
      certificateNo: 'DM17/1811',
      renewal: '19/11/2018',
      placedAt: 'TOM WORKSHOP',
      condition: 'SCRAP',
      certificate: 'Certificate'
    },
    {
      id: 2,
      equipmentName: '4 TPI WORKING PLUG GAUGE API 7-2',
      modelSpec: '-',
      tagId: 'TOMEQ-TP-002',
      serialNo: 'SR 082',
      certificateNo: 'DM17/1812',
      renewal: '19/11/2018',
      placedAt: 'TOM WORKSHOP',
      condition: 'SCRAP',
      certificate: 'Certificate'
    },
    {
      id: 3,
      equipmentName: 'ACCIDENTAL RADIOMETAL RADIO & PHOTOMETER',
      modelSpec: 'XP-2000 (NDT)',
      tagId: 'TOMEQ-XP-001',
      serialNo: '1964533',
      certificateNo: 'C20159',
      renewal: '11/12/2018',
      placedAt: 'IN STORE',
      condition: 'KIV',
      certificate: 'Certificate'
    },
    {
      id: 4,
      equipmentName: 'ADAPTER SPOOL',
      modelSpec: '-',
      tagId: 'TOMEQ-AS-001',
      serialNo: 'AM-39-1003',
      certificateNo: '',
      renewal: '',
      placedAt: 'TOM STORE',
      condition: 'SCRAP',
      certificate: 'Certificate'
    },
    {
      id: 5,
      equipmentName: 'AIR RECEIVER',
      modelSpec: 'YUEN FEE',
      tagId: 'TOMEQ-AR-004',
      serialNo: 'YF250358S',
      certificateNo: 'AR40910K',
      renewal: '07/08/2027',
      placedAt: 'CNC TOM 11 SHOP',
      condition: 'WORKING',
      certificate: 'Certificate'
    },
    {
      id: 6,
      equipmentName: 'AIR RECEIVER',
      modelSpec: 'YUEN FEE',
      tagId: 'TOMEQ-AR-001',
      serialNo: 'YF-14-0907',
      certificateNo: 'AR15957X',
      renewal: '05/01/2022',
      placedAt: 'TOM WORKSHOP',
      condition: 'SCRAP',
      certificate: 'Certificate'
    },
    {
      id: 7,
      equipmentName: 'AIR RECEIVER',
      modelSpec: 'KOBELCO EURE SHG',
      tagId: 'TOMEQ-AR-002',
      serialNo: '2-0907',
      certificateNo: 'AR16056R',
      renewal: '05/01/2022',
      placedAt: 'TOM WORKSHOP',
      condition: 'SCRAP',
      certificate: 'Certificate'
    },
    {
      id: 8,
      equipmentName: 'AIR RECEIVER',
      modelSpec: 'Modern Precision vertical Receiving Tank',
      tagId: 'TOMEQ-AR-003',
      serialNo: 'GV-200 545',
      certificateNo: 'AR10773V',
      renewal: '27/09/2020',
      placedAt: 'AIR POWER RESOURCES PTE LTD',
      condition: 'SERVICE',
      certificate: 'Certificate'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (equipment) => {
    sessionStorage.setItem('selectedEquipment', JSON.stringify(equipment));
    if (setCurrentPage) {
      setCurrentPage('edit-equipment-master');
    }
  };

  const handleView = (equipment) => {
    sessionStorage.setItem('selectedEquipment', JSON.stringify(equipment));
    if (setCurrentPage) {
      setCurrentPage('view-equipment-master-detail');
    }
  };

  const handleDelete = (equipment) => {
    if (window.confirm(`Are you sure you want to delete equipment "${equipment.equipmentName}"?`)) {
      showToast('Equipment deleted successfully', 'success');
    }
  };

  const handleExportToExcel = () => {
    showToast('Exporting to Excel...', 'info');
  };

  const handleSearch = () => {
    showToast(`Searching for "${searchTerm}" in ${searchBy}`, 'info');
  };

  const handleCertificateView = (equipment) => {
    if (equipment.certificateNo) {
      showToast(`Viewing certificate: ${equipment.certificateNo} for ${equipment.equipmentName}`, 'info');
      // In a real application, this would open the certificate file
    } else {
      showToast('No certificate available for this equipment', 'error');
    }
  };

  const filteredData = equipmentData.filter(equipment => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    switch (searchBy) {
      case 'Equipment Name':
        return equipment.equipmentName.toLowerCase().includes(searchLower);
      case 'Tag ID':
        return equipment.tagId.toLowerCase().includes(searchLower);
      case 'Serial No':
        return equipment.serialNo.toLowerCase().includes(searchLower);
      default:
        return true;
    }
  });

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-tools" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Equipment Masters</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="search-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Search by</label>
          <select 
            className="form-control"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="Equipment Name">Equipment Name</option>
            <option value="Tag ID">Tag ID</option>
            <option value="Serial No">Serial No</option>
          </select>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, maxWidth: '400px' }}
          />
          <button 
            className="btn-filter" 
            onClick={handleSearch}
            style={{ padding: '0.5rem 2rem' }}
          >
            SEARCH
          </button>
        </div>
        <button 
          className="btn-new-transaction" 
          onClick={() => setCurrentPage && setCurrentPage('create-equipment-master')}
        >
          <i className="fas fa-plus"></i> New Equipment Master
        </button>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i> PRINT
          </button>
          <button className="toolbar-btn" onClick={handleExportToExcel}>
            <i className="fas fa-file-excel"></i> EXPORT
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Equipment Name</option>
            <option>Tag ID</option>
            <option>Serial No</option>
            <option>Renewal Date</option>
            <option>Condition</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {filteredData.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>EDIT | VIEW</th>
              <th>S.No</th>
              <th>EQUIPMENT NAME</th>
              <th>MODEL / SPEC</th>
              <th>TAG ID</th>
              <th>SERIAL NO</th>
              <th>CERTIFICATE NO</th>
              <th>RENEWAL</th>
              <th>PLACED AT</th>
              <th>CONDITION</th>
              <th>CERTIFICATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((equipment, index) => (
                <tr key={equipment.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button 
                        className="view-link"
                        onClick={() => handleEdit(equipment)}
                      >
                        Edit
                      </button>
                      <span style={{ color: '#999' }}>|</span>
                      <button 
                        className="view-link"
                        onClick={() => handleView(equipment)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleView(equipment)}
                    >
                      {equipment.equipmentName}
                    </button>
                  </td>
                  <td>{equipment.modelSpec}</td>
                  <td>{equipment.tagId}</td>
                  <td>{equipment.serialNo}</td>
                  <td>{equipment.certificateNo}</td>
                  <td className={equipment.renewal && new Date(equipment.renewal.split('/').reverse().join('-')) < new Date() ? 'expired-renewal' : ''}>
                    {equipment.renewal}
                  </td>
                  <td>{equipment.placedAt}</td>
                  <td>{equipment.condition}</td>
                  <td>
                    <button className="btn-certificate">
                      Certificate
                    </button>
                  </td>
                  <td>
                    <button 
                      className="btn-delete-icon"
                      onClick={() => handleDelete(equipment)}
                      title="Delete"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                  No equipment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
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

export default ViewEquipmentMasters;
