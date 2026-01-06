import React, { useState } from 'react';
import WorkshopDashboard from './WorkshopDashboard';
import ModuleEmptyForm from './ModuleEmptyForm';
import './Enquiries.css';

const WorkshopDashboardWrapper = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeWorkshop, setActiveWorkshop] = useState(0);
  const [showAddWorkshopModal, setShowAddWorkshopModal] = useState(false);
  const [newWorkshopName, setNewWorkshopName] = useState('');
  const [newWorkshopDesign, setNewWorkshopDesign] = useState('standard');
  
  const [workshops, setWorkshops] = useState([
    { 
      id: 1, 
      name: 'TOM Workshop', 
      design: 'standard',
      modules: [] // Each workshop will have its own module data
    }
  ]);

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
    setTimeout(() => {
      handleBackToDashboard();
    }, 1500);
  };

  const handleAddWorkshop = () => {
    if (newWorkshopName.trim()) {
      const newWorkshop = {
        id: workshops.length + 1,
        name: newWorkshopName.trim(),
        design: newWorkshopDesign,
        modules: [] // Initialize with empty modules array
      };
      setWorkshops([...workshops, newWorkshop]);
      setActiveWorkshop(workshops.length);
      setNewWorkshopName('');
      setNewWorkshopDesign('standard');
      setShowAddWorkshopModal(false);
    }
  };

  const handleRemoveWorkshop = (index) => {
    if (workshops.length > 1) {
      const updatedWorkshops = workshops.filter((_, i) => i !== index);
      setWorkshops(updatedWorkshops);
      if (activeWorkshop >= updatedWorkshops.length) {
        setActiveWorkshop(updatedWorkshops.length - 1);
      }
    }
  };

  return (
    <div>
      {currentView === 'dashboard' && (
        <div className="workshop-wrapper">
          <div className="workshop-tabs">
            <div className="tabs-container">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className={`workshop-tab ${activeWorkshop === index ? 'active' : ''}`}
                  onClick={() => setActiveWorkshop(index)}
                >
                  <span>{workshop.name}</span>
                  {workshops.length > 1 && (
                    <button
                      className="remove-tab-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveWorkshop(index);
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              ))}
              <button
                className="add-workshop-btn"
                onClick={() => setShowAddWorkshopModal(true)}
              >
                <i className="fas fa-plus"></i> Add Workshop
              </button>
            </div>
          </div>
          
          <WorkshopDashboard 
            onModuleClick={handleModuleClick}
            workshopName={workshops[activeWorkshop]?.name}
            workshopDesign={workshops[activeWorkshop]?.design}
          />
        </div>
      )}
      
      {currentView === 'form' && (
        <ModuleEmptyForm 
          moduleData={selectedModule}
          onBack={handleBackToDashboard}
          onSubmit={handleFormSubmit}
        />
      )}

      {showAddWorkshopModal && (
        <div className="modal-overlay" onClick={() => setShowAddWorkshopModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Workshop</h2>
              <button className="close-btn" onClick={() => setShowAddWorkshopModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Workshop Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newWorkshopName}
                  onChange={(e) => setNewWorkshopName(e.target.value)}
                  placeholder="Enter workshop name"
                />
              </div>
              <div className="form-group">
                <label>Workshop Design</label>
                <select
                  className="form-control"
                  value={newWorkshopDesign}
                  onChange={(e) => setNewWorkshopDesign(e.target.value)}
                >
                  <option value="standard">Standard Layout</option>
                  <option value="compact">Compact Layout</option>
                  <option value="extended">Extended Layout</option>
                  <option value="custom">Custom Layout</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowAddWorkshopModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAddWorkshop}>
                Add Workshop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopDashboardWrapper;
