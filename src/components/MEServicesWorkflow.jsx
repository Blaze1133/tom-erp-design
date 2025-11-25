import React, { useState } from 'react';
import ViewMEServices from './ViewMEServices';
import UploadMEServices from './UploadMEServices';
import PreviewMEServices from './PreviewMEServices';
import Toast from './Toast';

const MEServicesWorkflow = () => {
  const [currentStep, setCurrentStep] = useState('list'); // 'list', 'upload', 'preview'
  const [previewData, setPreviewData] = useState([]);
  const [fileName, setFileName] = useState('');
  const [importedData, setImportedData] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleUploadClick = () => {
    setCurrentStep('upload');
  };

  const handlePreview = (data, file) => {
    setPreviewData(data);
    setFileName(file);
    setCurrentStep('preview');
  };

  const handleImport = (selectedData, onImportComplete) => {
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
            onUploadClick={handleUploadClick}
            onViewClick={handleViewService}
            onEditClick={handleEditService}
            importedData={importedData}
          />
        );
    }
  };

  return (
    <>
      {renderCurrentStep()}
      
      
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
