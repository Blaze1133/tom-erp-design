import React, { useState } from 'react';
import ViewFwlQualifications from './ViewFwlQualifications';
import ViewFwlQualificationDetail from './ViewFwlQualificationDetail';
import CreateFwlQualification from './CreateFwlQualification';
import EditFwlQualification from './EditFwlQualification';

const FWLQualification = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedQualification, setSelectedQualification] = useState(null);

  const handleNewClick = () => {
    setCurrentView('create');
    setSelectedQualification(null);
  };

  const handleViewClick = (qualification) => {
    setSelectedQualification(qualification);
    setCurrentView('detail');
  };

  const handleEditClick = (qualification) => {
    setSelectedQualification(qualification);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedQualification(null);
  };

  const handleSave = (data) => {
    console.log('Saving FWL Qualification:', data);
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
          <ViewFwlQualifications
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
      case 'detail':
        return (
          <ViewFwlQualificationDetail
            selectedQualification={selectedQualification}
            onBack={handleBackToList}
            onEdit={() => handleEditClick(selectedQualification)}
          />
        );
      case 'create':
        return (
          <CreateFwlQualification
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case 'edit':
        return (
          <EditFwlQualification
            selectedQualification={selectedQualification}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      default:
        return (
          <ViewFwlQualifications
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
    }
  };

  return (
    <div className="fwl-qualification-container">
      {renderCurrentView()}
    </div>
  );
};

export default FWLQualification;
