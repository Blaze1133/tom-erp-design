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

  const handleImport = (selectedData) => {
    // Add the imported data to the main list
    setImportedData(prev => [...prev, ...selectedData]);
    showToast(`Successfully imported ${selectedData.length} M&E service records! Data has been added to the main list.`, 'success');
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
        <>
          <ViewMEServices
            onUploadClick={handleUploadClick}
            onViewClick={handleViewService}
            onEditClick={handleEditService}
            importedData={importedData}
          />
          <Toast 
            message={toast.message} 
            type={toast.type} 
            show={toast.show} 
            onClose={() => setToast({ ...toast, show: false })} 
          />
        </>
      );
  }
};

export default MEServicesWorkflow;
