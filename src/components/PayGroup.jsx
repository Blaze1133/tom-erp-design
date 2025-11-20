import React, { useState } from 'react';
import ViewPayGroups from './ViewPayGroups';
import ViewPayGroupDetail from './ViewPayGroupDetail';
import CreatePayGroup from './CreatePayGroup';

const PayGroup = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedPayGroup, setSelectedPayGroup] = useState(null);

  const handleNewClick = () => {
    setCurrentView('create');
    setSelectedPayGroup(null);
  };

  const handleViewClick = (payGroup) => {
    setSelectedPayGroup(payGroup);
    setCurrentView('detail');
  };

  const handleEditClick = (payGroup) => {
    setSelectedPayGroup(payGroup);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPayGroup(null);
  };

  const handleSave = (data) => {
    console.log('Saving Pay Group:', data);
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
          <ViewPayGroups
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
      case 'detail':
        return (
          <ViewPayGroupDetail
            selectedPayGroup={selectedPayGroup}
            onBack={handleBackToList}
            onEdit={() => handleEditClick(selectedPayGroup)}
          />
        );
      case 'create':
        return (
          <CreatePayGroup
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case 'edit':
        return (
          <CreatePayGroup
            selectedPayGroup={selectedPayGroup}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      default:
        return (
          <ViewPayGroups
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
    }
  };

  return (
    <div className="pay-group-container">
      {renderCurrentView()}
    </div>
  );
};

export default PayGroup;
