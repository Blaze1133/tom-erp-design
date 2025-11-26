import React, { useState } from 'react';
import WorkshopDashboard from './WorkshopDashboard';
import ModuleEmptyForm from './ModuleEmptyForm';

const WorkshopDashboardWrapper = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setCurrentView('form');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedModule(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Here you would typically update the module status in the backend
    // For now, we'll just go back to the dashboard
    setTimeout(() => {
      handleBackToDashboard();
    }, 1500);
  };

  return (
    <div>
      {currentView === 'dashboard' && (
        <WorkshopDashboard onModuleClick={handleModuleClick} />
      )}
      {currentView === 'form' && (
        <ModuleEmptyForm 
          moduleData={selectedModule}
          onBack={handleBackToDashboard}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default WorkshopDashboardWrapper;
