import React, { useState } from 'react';
import ViewIR8AYears from './ViewIR8AYears';
import ViewIR8AYearDetail from './ViewIR8AYearDetail';
import CreateIR8AYear from './CreateIR8AYear';

const IR8AYear = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedIR8AYear, setSelectedIR8AYear] = useState(null);

  const handleNewClick = () => {
    setCurrentView('create');
    setSelectedIR8AYear(null);
  };

  const handleViewClick = (ir8aYear) => {
    setSelectedIR8AYear(ir8aYear);
    setCurrentView('detail');
  };

  const handleEditClick = (ir8aYear) => {
    setSelectedIR8AYear(ir8aYear);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedIR8AYear(null);
  };

  const handleSave = (data) => {
    console.log('Saving IR8A Year:', data);
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
          <ViewIR8AYears
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
      case 'detail':
        return (
          <ViewIR8AYearDetail
            selectedIR8AYear={selectedIR8AYear}
            onBack={handleBackToList}
            onEdit={() => handleEditClick(selectedIR8AYear)}
          />
        );
      case 'create':
        return (
          <CreateIR8AYear
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case 'edit':
        return (
          <CreateIR8AYear
            selectedIR8AYear={selectedIR8AYear}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      default:
        return (
          <ViewIR8AYears
            onNewClick={handleNewClick}
            onViewClick={handleViewClick}
            onEditClick={handleEditClick}
          />
        );
    }
  };

  return (
    <div className="ir8a-year-container">
      {renderCurrentView()}
    </div>
  );
};

export default IR8AYear;
