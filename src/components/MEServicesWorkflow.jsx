import React, { useEffect, useState } from 'react';
import ViewMEServices from './ViewMEServices';
import UploadMEServices from './UploadMEServices';
import PreviewMEServices from './PreviewMEServices';
import Toast from './Toast';
import { addStageSubmissions } from '../utils/stageSubmissions';

const MEServicesWorkflow = ({ setCurrentPage, viewOnly = false, viewData = null, returnPageId = '' }) => {
  const [currentStep, setCurrentStep] = useState('list'); // 'list', 'upload', 'preview'
  const [previewData, setPreviewData] = useState([]);
  const [fileName, setFileName] = useState('');
  const [importedData, setImportedData] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    if (!viewOnly) return;
    setCurrentStep('list');
    if (viewData) {
      setImportedData([viewData]);
    }
  }, [viewOnly, viewData]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleUploadClick = () => {
    if (viewOnly) return;
    setCurrentStep('upload');
  };

  const handlePreview = (data, file) => {
    setPreviewData(data);
    setFileName(file);
    setCurrentStep('preview');
  };

  const handleImport = (selectedData, onImportComplete) => {
    if (viewOnly) return;
    // Map the imported data to match the ViewMEServices structure
    const mappedData = selectedData.map((item, index) => ({
      id: Date.now() + index, // Generate unique ID
      moduleNo: item.moduleNo,
      batch: item.batch,
      projectName: item.projectName,
      service: item.serviceType, // Map serviceType to service
      contra: item.contractors, // Map contractors to contra
      size: item.size,
      completionS: 'Not Completed', // Default status
      reasonP: 'N/A', // Default reason
      complete: '',
      weightage: item.weightage,
      image: '',
      modified: 'system',
      modifiedTime: new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).replace(',', ''),
      addedBy: 'system',
      addedTime: new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).replace(',', ''),
      subModuleNo: item.subModuleNo
    }));

    // Add the mapped data to the main list
    setImportedData(prev => [...prev, ...mappedData]);

    addStageSubmissions({
      module: 'MEP',
      stageId: 'production-me-services',
      stageLabel: 'M&E Assembly',
      payloads: mappedData
    });
    
    // Call completion callback if provided
    if (onImportComplete) {
      onImportComplete();
    }
    
    // Show success message and redirect to main screen
    showToast(`Successfully imported ${selectedData.length} M&E service records! Data has been added to the main list.`, 'success');
    
    // Reset preview data and go back to list
    setPreviewData([]);
    setFileName('');
    setCurrentStep('list');
  };

  const handleCancel = () => {
    setCurrentStep('list');
    setPreviewData([]);
    setFileName('');
  };

  const handleBack = () => {
    if (!setCurrentPage) return;
    setCurrentPage(returnPageId || 'production-stages');
  };

  const handleSettings = () => {
    // Handle settings functionality
    console.log('Settings clicked');
  };

  const handleViewService = (service) => {
    // Handle view service functionality
    console.log('View service:', service);
  };

  const handleEditService = (service) => {
    // Handle edit service functionality
    console.log('Edit service:', service);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'upload':
        return (
          <UploadMEServices
            onPreview={handlePreview}
            onCancel={handleCancel}
          />
        );
      
      case 'preview':
        return (
          <PreviewMEServices
            data={previewData}
            fileName={fileName}
            onImport={handleImport}
            onCancel={handleCancel}
            onSettings={handleSettings}
          />
        );
      
      case 'list':
      default:
        return (
          <ViewMEServices
            onUploadClick={viewOnly ? null : handleUploadClick}
            onViewClick={handleViewService}
            onEditClick={handleEditService}
            importedData={importedData}
          />
        );
    }
  };

  return (
    <>
      {viewOnly && (
        <div className="enquiries-list view-only-stage" style={{ marginBottom: '0.5rem' }}>
          <div className="list-header">
            <div className="list-title">
              <i className="fas fa-cogs"></i>
              <h1>M&E Services (View Only)</h1>
            </div>
            <div className="list-actions">
              <button className="btn-view-option view-only-back" onClick={handleBack}>Back</button>
            </div>
          </div>
        </div>
      )}

      <div className={viewOnly ? 'view-only-stage' : ''}>
        {renderCurrentStep()}
      </div>
      
      
      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </>
  );
};

export default MEServicesWorkflow;
