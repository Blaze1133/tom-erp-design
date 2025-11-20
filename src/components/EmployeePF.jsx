import React, { useState } from 'react';
import ViewEmployeePFs from './ViewEmployeePFs';
import ViewEmployeePFDetail from './ViewEmployeePFDetail';
import CreateEmployeePF from './CreateEmployeePF';

const EmployeePF = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedEmployeePF, setSelectedEmployeePF] = useState(null);

  const handleNewClick = () => {
    setCurrentView('create');
    setSelectedEmployeePF(null);
  };

  const handleViewClick = (employeePF) => {
    setSelectedEmployeePF(employeePF);
    setCurrentView('detail');
  };

  const handleEditClick = (employeePF) => {
    setSelectedEmployeePF(employeePF);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedEmployeePF(null);
  };

  const handleSave = (data) => {
    console.log('Saving Employee PF:', data);
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
          <ViewEmployeePFs
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
      case 'detail':
        return (
          <ViewEmployeePFDetail
            selectedEmployeePF={selectedEmployeePF}
            onBack={handleBackToList}
            onEdit={() => handleEditClick(selectedEmployeePF)}
          />
        );
      case 'create':
        return (
          <CreateEmployeePF
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case 'edit':
        return (
          <CreateEmployeePF
            selectedEmployeePF={selectedEmployeePF}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      default:
        return (
          <ViewEmployeePFs
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
    }
  };

  return (
    <div className="employee-pf-container">
      {renderCurrentView()}
    </div>
  );
};

export default EmployeePF;
