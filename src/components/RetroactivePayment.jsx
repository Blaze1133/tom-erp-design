import React, { useState } from 'react';
import ViewRetroactivePayments from './ViewRetroactivePayments';
import ViewRetroactivePaymentDetail from './ViewRetroactivePaymentDetail';
import CreateRetroactivePayment from './CreateRetroactivePayment';

const RetroactivePayment = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleNewClick = () => {
    setCurrentView('create');
    setSelectedPayment(null);
  };

  const handleViewClick = (payment) => {
    setSelectedPayment(payment);
    setCurrentView('detail');
  };

  const handleEditClick = (payment) => {
    setSelectedPayment(payment);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPayment(null);
  };

  const handleSave = (data) => {
    console.log('Saving Retroactive Payment:', data);
    // Here you would typically save to your backend
    handleBackToList();
  };

  const handleCancel = () => {
    handleBackToList();
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'list':
        return (
          <ViewRetroactivePayments
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
      case 'detail':
        return (
          <ViewRetroactivePaymentDetail
            selectedPayment={selectedPayment}
            onBack={handleBackToList}
            onEdit={() => handleEditClick(selectedPayment)}
          />
        );
      case 'create':
        return (
          <CreateRetroactivePayment
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case 'edit':
        return (
          <CreateRetroactivePayment
            selectedPayment={selectedPayment}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      default:
        return (
          <ViewRetroactivePayments
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
    }
  };

  return (
    <div className="retroactive-payment-container">
      {renderCurrentView()}
    </div>
  );
};

export default RetroactivePayment;
