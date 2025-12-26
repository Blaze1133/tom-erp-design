import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomers = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [showInactives, setShowInactives] = useState(false);
  const [quickSort, setQuickSort] = useState('pirtek');

  const [customers] = useState([
    {
      id: 24,
      editView: true,
      parentCustomerName: '',
      customerId: 'Client001',
      externalId: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      name: '(Pirtek Asia Pte Ltd)',
      category: '',
      projDepartment: '',
      projClass: '',
      customerProjectNo: '',
      projectType: '',
      isIndividual: 'No',
      salesRep: '',
      status: 'CUSTOMER-Closed Won',
      territory: '',
      leadSource: '',
      startDate: '',
      endDate: '',
      reminderDays: '',
      dateCreated: '10/10/2021 11:40 pm',
      lastModified: '25/2/2022 12:11 pm',
      primaryContact: '',
      phone: '',
      email: '',
      fax: '',
      altContact: '',
      officePhone: '',
      comments: '',
      billingAddress1: '101A',
      billingAddress2: 'Pioneer Road,',
      billingCity: '',
      billingState: '',
      billingZip: '639606',
      billingCountry: 'Singapore',
      shippingAddress: '101A Pioneer Road, Singapore - 639606.',
      billingAddress: '101A Pioneer Road, Singapore - 639606.',
      account: '',
      loginAccess: 'No',
      terms: '',
      priceLevel: '',
      taxable: 'No',
      taxItem: '',
      primarySubsidiaryNoHierarchy: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 871,
      editView: true,
      parentCustomerName: '',
      customerId: '',
      externalId: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      name: '21-0141-Sgit-Supply Of Ss316 Cable Ladders',
      category: '',
      projDepartment: '',
      projClass: '',
      customerProjectNo: '',
      projectType: '',
      isIndividual: 'No',
      salesRep: 'TDQ059 Kumarasamy Madhavan Subbiah',
      status: 'CUSTOMER-Closed Won',
      territory: '',
      leadSource: '',
      startDate: '',
      endDate: '',
      reminderDays: '',
      dateCreated: '13/1/2022 4:45 pm',
      lastModified: '17/1/2022 1:29 pm',
      primaryContact: '',
      phone: '',
      email: '',
      fax: '',
      altContact: '',
      officePhone: '',
      comments: '',
      billingAddress1: '',
      billingAddress2: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingCountry: '',
      shippingAddress: '',
      billingAddress: '',
      account: '',
      loginAccess: 'No',
      terms: '',
      priceLevel: '',
      taxable: 'No',
      taxItem: '',
      primarySubsidiaryNoHierarchy: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 25,
      editView: true,
      parentCustomerName: '',
      customerId: 'Client002',
      externalId: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      name: '8 Point Engineering Pte Ltd',
      category: '',
      projDepartment: '',
      projClass: '',
      customerProjectNo: '',
      projectType: '',
      isIndividual: 'No',
      salesRep: '',
      status: 'CUSTOMER-Closed Won',
      territory: '',
      leadSource: '',
      startDate: '',
      endDate: '',
      reminderDays: '',
      dateCreated: '10/10/2021 11:41 pm',
      lastModified: '25/2/2022 12:12 pm',
      primaryContact: '',
      phone: '',
      email: '',
      fax: '',
      altContact: '',
      officePhone: '',
      comments: '',
      billingAddress1: '',
      billingAddress2: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingCountry: '',
      shippingAddress: '',
      billingAddress: '',
      account: '',
      loginAccess: 'No',
      terms: '',
      priceLevel: '',
      taxable: 'No',
      taxItem: '',
      primarySubsidiaryNoHierarchy: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewCustomer = (customer) => {
    if (onViewClick) {
      onViewClick(customer);
    }
  };

  const handleEditCustomer = (customer) => {
    if (onEditClick) {
      onEditClick(customer);
    }
  };

  const handleNewCustomer = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredCustomers = customers.filter(customer => {
    if (viewFilter !== 'all' && customer.status !== viewFilter) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users"></i>
          <h1>Customers & Projects</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">All</option>
            <option value="CUSTOMER-Closed Won">Closed Won</option>
            <option value="CUSTOMER-Open">Open</option>
            <option value="CUSTOMER-Prospect">Prospect</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewCustomer}>
            <i className="fas fa-plus"></i>
            New Customer
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span>Show Inactives</span>
          </label>
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select 
              value={quickSort}
              onChange={(e) => setQuickSort(e.target.value)}
              className="form-control"
            >
              <option value="pirtek">pirtek — Applied</option>
              <option value="all">All Customers</option>
              <option value="active">Active Only</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: 1982
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '3%' }}>EDIT | VIEW</th>
              <th style={{ width: '4%' }}>ID</th>
              <th style={{ width: '6%' }}>EXTERNAL ID</th>
              <th style={{ width: '8%' }}>PRIMARY SUBSIDIARY</th>
              <th style={{ width: '8%' }}>NAME</th>
              <th style={{ width: '4%' }}>CATEGORY</th>
              <th style={{ width: '5%' }}>PROJ DEPARTMENT</th>
              <th style={{ width: '4%' }}>PROJ CLASS</th>
              <th style={{ width: '6%' }}>CUSTOMER PROJECT NO</th>
              <th style={{ width: '5%' }}>PROJECT TYPE</th>
              <th style={{ width: '4%' }}>IS INDIVIDUAL</th>
              <th style={{ width: '6%' }}>SALES REP</th>
              <th style={{ width: '6%' }}>STATUS</th>
              <th style={{ width: '4%' }}>TERRITORY</th>
              <th style={{ width: '5%' }}>LEAD SOURCE</th>
              <th style={{ width: '4%' }}>START DATE</th>
              <th style={{ width: '4%' }}>END DATE</th>
              <th style={{ width: '4%' }}>REMINDER DAYS</th>
              <th style={{ width: '6%' }}>DATE CREATED</th>
              <th style={{ width: '6%' }}>LAST MODIFIED</th>
              <th style={{ width: '5%' }}>PRIMARY CONTACT</th>
              <th style={{ width: '4%' }}>PHONE</th>
              <th style={{ width: '5%' }}>EMAIL</th>
              <th style={{ width: '4%' }}>FAX</th>
              <th style={{ width: '5%' }}>ALT. CONTACT</th>
              <th style={{ width: '4%' }}>OFFICE PHONE</th>
              <th style={{ width: '5%' }}>COMMENTS</th>
              <th style={{ width: '6%' }}>BILLING ADDRESS 1</th>
              <th style={{ width: '6%' }}>BILLING ADDRESS 2</th>
              <th style={{ width: '4%' }}>BILLING CITY</th>
              <th style={{ width: '5%' }}>BILLING STATE/PROVINCE</th>
              <th style={{ width: '4%' }}>BILLING ZIP</th>
              <th style={{ width: '5%' }}>BILLING COUNTRY</th>
              <th style={{ width: '6%' }}>SHIPPING ADDRESS</th>
              <th style={{ width: '6%' }}>BILLING ADDRESS</th>
              <th style={{ width: '4%' }}>ACCOUNT</th>
              <th style={{ width: '4%' }}>LOGIN ACCESS</th>
              <th style={{ width: '4%' }}>TERMS</th>
              <th style={{ width: '4%' }}>PRICE LEVEL</th>
              <th style={{ width: '4%' }}>TAXABLE</th>
              <th style={{ width: '4%' }}>TAX ITEM</th>
              <th style={{ width: '8%' }}>PRIMARY SUBSIDIARY (NO HIERARCHY)</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditCustomer(customer)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewCustomer(customer)}
                  >
                    View
                  </button>
                </td>
                <td>{customer.id}</td>
                <td>{customer.customerId}</td>
                <td>{customer.primarySubsidiary}</td>
                <td>{customer.name}</td>
                <td>{customer.category}</td>
                <td>{customer.projDepartment}</td>
                <td>{customer.projClass}</td>
                <td>{customer.customerProjectNo}</td>
                <td>{customer.projectType}</td>
                <td>{customer.isIndividual}</td>
                <td>{customer.salesRep}</td>
                <td>{customer.status}</td>
                <td>{customer.territory}</td>
                <td>{customer.leadSource}</td>
                <td>{customer.startDate}</td>
                <td>{customer.endDate}</td>
                <td>{customer.reminderDays}</td>
                <td>{customer.dateCreated}</td>
                <td>{customer.lastModified}</td>
                <td>{customer.primaryContact}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.fax}</td>
                <td>{customer.altContact}</td>
                <td>{customer.officePhone}</td>
                <td>{customer.comments}</td>
                <td>{customer.billingAddress1}</td>
                <td>{customer.billingAddress2}</td>
                <td>{customer.billingCity}</td>
                <td>{customer.billingState}</td>
                <td>{customer.billingZip}</td>
                <td>{customer.billingCountry}</td>
                <td>{customer.shippingAddress}</td>
                <td>{customer.billingAddress}</td>
                <td>{customer.account}</td>
                <td>{customer.loginAccess}</td>
                <td>{customer.terms}</td>
                <td>{customer.priceLevel}</td>
                <td>{customer.taxable}</td>
                <td>{customer.taxItem}</td>
                <td>{customer.primarySubsidiaryNoHierarchy}</td>
              </tr>
            ))}
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

export default ViewCustomers;
