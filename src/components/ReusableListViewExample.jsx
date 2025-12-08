import React, { useState } from 'react';
import ReusableListView from './ReusableListView';

/**
 * Example usage of ReusableListView component
 * This demonstrates how to use the component with the quotations data
 */
const ReusableListViewExample = ({ setCurrentPage }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  // Sample data - replace with your actual data
  const quotations = [
    {
      id: 1,
      documentNumber: 'Q21TOM00025',
      date: '7/1/2022',
      customer: '612 Raise Pte Ltd',
      title: 'Supply of Aluminum Electrode',
      status: 'Proposal',
      statusBadge: 'EXPIRED',
      amount: 64.20,
      memo: '-',
      item: '-',
      itemQty: '-',
      itemUnitPrice: '-'
    },
    {
      id: 2,
      documentNumber: 'Q21TOM00026',
      date: '7/1/2022',
      customer: '451 Loyang Offshore Supply Base',
      title: 'Scrap Cutting Works',
      status: 'Proposal',
      statusBadge: 'ACTIVE',
      amount: 12749.05,
      memo: '-',
      item: '-',
      itemQty: '-',
      itemUnitPrice: '-'
    },
    {
      id: 3,
      documentNumber: 'Q21TOM00027',
      date: '7/1/2022',
      customer: '451 Loyang Offshore Supply Base',
      title: 'Marine Equipment Supply',
      status: 'Proposal',
      statusBadge: 'ACTIVE',
      amount: 8500.00,
      memo: '-',
      item: '-',
      itemQty: '-',
      itemUnitPrice: '-'
    },
  ];

  // Define columns configuration
  const columns = [
    {
      key: 'editView',
      label: 'EDIT | VIEW',
      width: 'auto'
    },
    {
      key: 'statusBadge',
      label: '*',
      type: 'badge',
      width: 'auto',
      badgeStyle: (value) => {
        if (value === 'EXPIRED') {
          return { background: '#f44336', color: 'white' };
        }
        return {};
      }
    },
    {
      key: 'date',
      label: 'DATE',
      width: 'auto'
    },
    {
      key: 'documentNumber',
      label: 'DOCUMENT NUMBER',
      type: 'link',
      width: 'auto'
    },
    {
      key: 'customer',
      label: 'VENDOR',
      width: 'auto'
    },
    {
      key: 'title',
      label: 'NAME',
      width: 'auto'
    },
    {
      key: 'memo',
      label: 'MEMO',
      width: 'auto'
    },
    {
      key: 'item',
      label: 'ITEM',
      width: 'auto'
    },
    {
      key: 'itemQty',
      label: 'ITEM QTY',
      width: 'auto'
    },
    {
      key: 'itemUnitPrice',
      label: 'ITEM UNIT PRICE',
      width: 'auto'
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      type: 'amount',
      width: 'auto'
    }
  ];

  // View options configuration
  const viewOptions = [
    { label: 'List', active: true },
    { label: 'Search', active: false },
    { label: 'Audit Trail', active: false }
  ];

  // View filter options
  const viewFilterOptions = [
    { value: 'all', label: 'Search Project' },
    { value: 'active', label: 'Active Quotations' },
    { value: 'expired', label: 'Expired Quotations' },
    { value: 'pending', label: 'Pending Approval' }
  ];

  // Sort options
  const sortOptions = [
    { value: 'date_range', label: '7/1/2022 — 31/1/2022' },
    { value: 'date', label: 'Date' },
    { value: 'customer', label: 'Customer Name' },
    { value: 'amount', label: 'Amount' },
    { value: 'status', label: 'Status' }
  ];

  // Toolbar buttons configuration
  const toolbarButtons = [
    { 
      icon: 'fas fa-edit', 
      label: 'EDIT',
      onClick: () => console.log('Edit clicked')
    },
    { 
      icon: 'fas fa-times', 
      label: '',
      onClick: () => console.log('Delete clicked')
    },
    { 
      icon: 'fas fa-paperclip', 
      label: '',
      onClick: () => console.log('Attach clicked')
    },
    { 
      icon: 'fas fa-print', 
      label: '',
      onClick: () => console.log('Print clicked')
    }
  ];

  // Event handlers
  const handleEdit = (row) => {
    console.log('Edit row:', row);
    if (setCurrentPage) {
      setCurrentPage('edit-quotation');
      sessionStorage.setItem('selectedQuotation', JSON.stringify(row));
    }
  };

  const handleView = (row) => {
    console.log('View row:', row);
    if (setCurrentPage) {
      setCurrentPage('view-quotation-detail');
      sessionStorage.setItem('selectedQuotation', JSON.stringify(row));
    }
  };

  const handleNewClick = () => {
    console.log('New quotation clicked');
    if (setCurrentPage) {
      setCurrentPage('create-quotation');
    }
  };

  const handleViewOptionClick = (label) => {
    console.log('View option clicked:', label);
  };

  const handleViewFilterChange = (value) => {
    console.log('View filter changed:', value);
  };

  const handleSortChange = (value) => {
    console.log('Sort changed:', value);
  };

  const handleRowSelect = (row, isSelected) => {
    console.log('Row selected:', row, isSelected);
    if (isSelected) {
      setSelectedRows([...selectedRows, row.id]);
    } else {
      setSelectedRows(selectedRows.filter(id => id !== row.id));
    }
  };

  return (
    <ReusableListView
      // Header props
      title="Quotations"
      icon="fas fa-file-invoice"
      iconColor="#4a90e2"
      viewOptions={viewOptions}
      onViewOptionClick={handleViewOptionClick}

      // Filter props
      viewFilterLabel="VIEW:"
      viewFilterOptions={viewFilterOptions}
      defaultViewFilter="all"
      onViewFilterChange={handleViewFilterChange}

      // New button props
      newButtonLabel="New Quotation"
      newButtonIcon="fas fa-plus"
      onNewClick={handleNewClick}

      // Toolbar props
      toolbarButtons={toolbarButtons}

      // Sort props
      sortLabel="QUICK SORT:"
      sortOptions={sortOptions}
      defaultSortOption="date_range"
      onSortChange={handleSortChange}

      // Table props
      columns={columns}
      data={quotations}
      onEdit={handleEdit}
      onView={handleView}
      showCheckbox={true}
      onRowSelect={handleRowSelect}
      selectedRows={selectedRows}

      // Total props
      totalLabel="TOTAL:"
    />
  );
};

export default ReusableListViewExample;
