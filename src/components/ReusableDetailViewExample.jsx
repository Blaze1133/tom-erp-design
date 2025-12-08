import React from 'react';
import ReusableDetailView from './ReusableDetailView';

/**
 * Example usage of ReusableDetailView component
 * This demonstrates how to use the component with quotation data
 */
const ReusableDetailViewExample = ({ setCurrentPage }) => {
  // Sample data
  const quotationData = {
    documentNumber: 'Q21TOM00025',
    customer: '612 Raise Pte Ltd',
    project: 'Marine Equipment Supply – Q1 2024',
    status: 'EXPIRED',
    estimate: 'Q21TOM00025',
    quotationStatus: 'Proposal',
    probability: '50.0%',
    title: 'Supply of Aluminum Electrode',
    expClose: '7/1/2022',
    expires: '5/2/2022',
    memo: '',
    date: '7/1/2022',
    salesRep: 'TEA0021 Subbiah',
    opportunity: '',
    forecastType: 'Omitted',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: '',
    contactPerson: '',
    items: [
      {
        id: 1,
        item: 'Welding',
        quantity: 4,
        units: 'Kgs',
        description: 'Aluminum Electrodes 3.2mm x 4 kgs',
        priceLevel: 'Custom',
        rate: 15.00,
        taxCode: 'GST_SG:7%',
        amount: 60.00,
        taxRate: '7.0%',
        taxAmount: 4.20,
        grossAmount: 64.20
      }
    ],
    subtotal: 60.00,
    taxTotal: 4.20,
    total: 64.20
  };

  // Header actions configuration
  const headerActions = [
    { 
      icon: "fas fa-arrow-left", 
      label: "", 
      onClick: () => setCurrentPage && setCurrentPage('view-quotations')
    },
    { icon: "fas fa-arrow-right", label: "", onClick: null },
    { 
      label: "List", 
      onClick: () => setCurrentPage && setCurrentPage('view-quotations')
    },
    { label: "Search", onClick: null },
    { label: "Customize", onClick: null }
  ];

  // Toolbar buttons configuration
  const toolbarButtons = [
    { 
      icon: "fas fa-edit", 
      label: "Edit", 
      primary: true, 
      onClick: () => setCurrentPage && setCurrentPage('edit-quotation')
    },
    { 
      icon: "fas fa-arrow-left", 
      label: "Back", 
      onClick: () => setCurrentPage && setCurrentPage('view-quotations')
    },
    { 
      icon: "fas fa-file-alt", 
      label: "Convert to Order", 
      onClick: () => console.log('Convert to order')
    },
    { 
      icon: "fas fa-print", 
      label: "Print", 
      onClick: () => console.log('Print')
    },
    { 
      icon: "fas fa-copy", 
      label: "Copy", 
      onClick: () => console.log('Copy')
    }
  ];

  // Sections configuration
  const sections = [
    {
      key: 'primary-info',
      title: 'Primary Information',
      collapsible: true,
      fields: [
        { label: 'ESTIMATE #', value: quotationData.estimate },
        { label: 'STATUS', value: quotationData.quotationStatus },
        { label: 'CUSTOMER', value: quotationData.customer },
        { label: 'PROJECT', value: quotationData.project },
        { label: 'PROBABILITY', value: quotationData.probability },
        { label: 'TITLE', value: quotationData.title },
        { label: 'EXP. CLOSE', value: quotationData.expClose, type: 'date' },
        { label: 'EXPIRES', value: quotationData.expires, type: 'date' },
        { label: 'MEMO', value: quotationData.memo },
        { label: 'DATE', value: quotationData.date, type: 'date' },
        { label: 'SALES REP', value: quotationData.salesRep },
        { label: 'OPPORTUNITY', value: quotationData.opportunity },
        { label: 'FORECAST TYPE', value: quotationData.forecastType }
      ]
    },
    {
      key: 'classification',
      title: 'Classification',
      collapsible: true,
      fields: [
        { label: 'SUBSIDIARY', value: quotationData.subsidiary },
        { label: 'CLASS', value: quotationData.class },
        { label: 'LOCATION', value: quotationData.location },
        { label: 'DEPARTMENT', value: quotationData.department },
        { label: 'CONTACT PERSON', value: quotationData.contactPerson }
      ]
    }
  ];

  // Tabs configuration
  const tabs = [
    {
      key: 'items',
      label: 'Items',
      type: 'table',
      columns: [
        { key: 'item', label: 'ITEM' },
        { key: 'quantity', label: 'QTY' },
        { key: 'units', label: 'UNITS' },
        { key: 'description', label: 'DESCRIPTION' },
        { key: 'priceLevel', label: 'PRICE LEVEL' },
        { 
          key: 'rate', 
          label: 'RATE',
          render: (value) => `$${value.toFixed(2)}`
        },
        { 
          key: 'amount', 
          label: 'AMOUNT',
          render: (value) => `$${value.toFixed(2)}`
        },
        { key: 'taxCode', label: 'TAX CODE' },
        { key: 'taxRate', label: 'TAX RATE' },
        { 
          key: 'taxAmount', 
          label: 'TAX AMT',
          render: (value) => `$${value.toFixed(2)}`
        },
        { 
          key: 'grossAmount', 
          label: 'GROSS AMT',
          render: (value) => `$${value.toFixed(2)}`
        }
      ],
      data: quotationData.items,
      summary: [
        {
          label: 'SUBTOTAL',
          value: quotationData.subtotal,
          render: (value) => `$${value.toFixed(2)}`
        },
        {
          label: 'TAX AMOUNT',
          value: quotationData.taxTotal,
          render: (value) => `$${value.toFixed(2)}`
        },
        {
          label: 'DISCOUNT',
          value: 0,
          render: (value) => `$${value.toFixed(2)}`
        },
        {
          label: 'TOTAL AMOUNT',
          value: quotationData.total,
          render: (value) => `$${value.toFixed(2)}`,
          style: { background: '#f8f9fa' },
          valueStyle: { color: '#4a90e2' }
        }
      ]
    },
    {
      key: 'communication',
      label: 'Communication',
      type: 'empty',
      emptyMessage: 'No communication records'
    },
    {
      key: 'system-info',
      label: 'System Information',
      type: 'empty',
      emptyMessage: 'System information section'
    },
    {
      key: 'custom',
      label: 'Custom',
      type: 'empty',
      emptyMessage: 'Custom fields section'
    }
  ];

  // Footer buttons configuration
  const footerButtons = [
    { 
      icon: "fas fa-edit", 
      label: "Edit", 
      primary: true, 
      onClick: () => setCurrentPage && setCurrentPage('edit-quotation')
    },
    { 
      icon: "fas fa-arrow-left", 
      label: "Back", 
      onClick: () => setCurrentPage && setCurrentPage('view-quotations')
    }
  ];

  // Subtitle configuration
  const subtitle = [
    { text: quotationData.documentNumber, badge: false },
    { text: quotationData.customer, badge: false },
    { 
      text: quotationData.status, 
      badge: true, 
      badgeColor: '#f44336'
    }
  ];

  return (
    <ReusableDetailView
      title="Quotation"
      icon="fas fa-file-invoice"
      iconColor="#4a90e2"
      subtitle={subtitle}
      headerActions={headerActions}
      toolbarButtons={toolbarButtons}
      showActionsDropdown={false}
      sections={sections}
      tabs={tabs}
      footerButtons={footerButtons}
    />
  );
};

export default ReusableDetailViewExample;
