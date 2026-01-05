import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ProductionScanQRCode = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [qrCode, setQrCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const detectModuleType = (moduleCode) => {
    const code = moduleCode.trim().toUpperCase();
    
    if (code.includes('MEP') || code.includes('CHWP') || code.includes('FAB') || 
        code.includes('ASSY') || code.includes('PKG') || code.includes('QC')) {
      return 'mep';
    }
    
    if (code.includes('PLANT') || code.includes('TOM-P')) {
      return 'plant';
    }
    
    if (/^[A-Z]+-[A-Z]+-\d+$/.test(code)) {
      return 'mep';
    }
    
    return null;
  };

  const qrCodeMappings = {
    mep: {
      dashboard: 'dashboard-module',
      name: 'MEP Module Dashboard'
    },
    plant: {
      dashboard: 'plant-dashboard',
      name: 'Plant Dashboard'
    }
  };

  const startCamera = async () => {
    try {
      setIsScanning(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
      
      showToast('Camera started. Point at QR code to scan.', 'success');
    } catch (error) {
      console.error('Error accessing camera:', error);
      showToast('Unable to access camera. Please use manual input.', 'error');
      setIsScanning(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsScanning(false);
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      
      simulateQRDetection();
    }
  };

  const simulateQRDetection = () => {
    const mockQRCodes = [
      'SANYU-CHWP-001', 'MEP-FAB-001', 'MEP-ASSY-002', 
      'PLANT-001', 'TOM-P-001', 'PLANT-FAB-001'
    ];
    const randomQR = mockQRCodes[Math.floor(Math.random() * mockQRCodes.length)];
    
    if (Math.random() > 0.7) {
      setQrCode(randomQR);
      stopCamera();
      showToast(`QR Code detected: ${randomQR}`, 'success');
    }
  };

  const handleSubmit = () => {
    if (!qrCode.trim()) {
      showToast('Please enter or scan a QR code', 'error');
      return;
    }

    const moduleType = detectModuleType(qrCode);
    
    if (moduleType) {
      const mapping = qrCodeMappings[moduleType];
      const moduleTypeName = moduleType === 'mep' ? 'MEP' : 'Plant';
      
      showToast(`Valid ${moduleTypeName} Module detected! Redirecting to ${mapping.name}...`, 'success');
      
      localStorage.setItem('scannedModuleCode', qrCode.trim());
      localStorage.setItem('scannedModuleType', moduleType);
      
      setTimeout(() => {
        setCurrentPage(mapping.dashboard);
      }, 1500);
    } else {
      showToast('Invalid QR Code. Please scan a valid MEP or Plant module code.', 'error');
    }
  };

  const handleReset = () => {
    setQrCode('');
    stopCamera();
    showToast('Form reset successfully', 'success');
  };

  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(captureFrame, 500);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isScanning]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const moduleType = qrCode ? detectModuleType(qrCode) : null;
  const isValidCode = moduleType !== null;

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-qrcode"></i>
          <h1>Production - Scan QR Code</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Scan</button>
          <button className="btn-view-option">Manual</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section" style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: '2rem' 
          }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              backgroundColor: '#f8f9fa',
              border: '2px dashed #dee2e6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {isScanning ? (
                <>
                  <video
                    ref={videoRef}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    playsInline
                    muted
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    border: '3px solid #28a745',
                    borderRadius: '12px',
                    pointerEvents: 'none'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      width: '30px',
                      height: '30px',
                      borderTop: '6px solid #28a745',
                      borderLeft: '6px solid #28a745',
                      borderRadius: '6px 0 0 0'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      width: '30px',
                      height: '30px',
                      borderTop: '6px solid #28a745',
                      borderRight: '6px solid #28a745',
                      borderRadius: '0 6px 0 0'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-3px',
                      left: '-3px',
                      width: '30px',
                      height: '30px',
                      borderBottom: '6px solid #28a745',
                      borderLeft: '6px solid #28a745',
                      borderRadius: '0 0 0 6px'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-3px',
                      right: '-3px',
                      width: '30px',
                      height: '30px',
                      borderBottom: '6px solid #28a745',
                      borderRight: '6px solid #28a745',
                      borderRadius: '0 0 6px 0'
                    }}></div>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', color: '#6c757d' }}>
                  <i className="fas fa-qrcode" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>Camera Preview</p>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Click "Start Camera" to begin scanning</p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {!isScanning ? (
                <button 
                  onClick={startCamera}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                >
                  <i className="fas fa-camera"></i>
                  Start Camera
                </button>
              ) : (
                <button 
                  onClick={stopCamera}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
                >
                  <i className="fas fa-stop"></i>
                  Stop Camera
                </button>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="qrCode" style={{ 
              display: 'block', 
              marginBottom: '0.75rem', 
              fontSize: '1rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Scan QR Code <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                id="qrCode"
                value={qrCode}
                onChange={(e) => setQrCode(e.target.value)}
                placeholder="Point camera at QR code or enter module number manually"
                style={{
                  width: '100%',
                  padding: '1rem',
                  paddingRight: '3rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  backgroundColor: '#f9fafb',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4a90e2';
                  e.target.style.backgroundColor = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#f9fafb';
                }}
              />
              <i className="fas fa-qrcode" style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280',
                fontSize: '1.2rem'
              }}></i>
            </div>
            {qrCode && (
              <div style={{ 
                marginTop: '0.75rem', 
                padding: '0.75rem',
                borderRadius: '8px',
                backgroundColor: isValidCode ? '#d1fae5' : '#fee2e2',
                border: `1px solid ${isValidCode ? '#10b981' : '#ef4444'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className={`fas ${isValidCode ? 'fa-check-circle' : 'fa-exclamation-circle'}`} 
                   style={{ color: isValidCode ? '#059669' : '#dc2626', fontSize: '1.1rem' }}></i>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: isValidCode ? '#059669' : '#dc2626',
                    marginBottom: '0.25rem'
                  }}>
                    {isValidCode ? `Valid ${moduleType === 'mep' ? 'MEP' : 'Plant'} Module Code` : 'Invalid Module Code'}
                  </div>
                  {isValidCode && (
                    <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                      Will redirect to: {qrCodeMappings[moduleType].name}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={handleSubmit}
              disabled={!qrCode.trim()}
              style={{
                padding: '1rem 2rem',
                backgroundColor: qrCode.trim() ? '#28a745' : '#e9ecef',
                color: qrCode.trim() ? 'white' : '#6c757d',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: qrCode.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                minWidth: '120px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (qrCode.trim()) {
                  e.target.style.backgroundColor = '#218838';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (qrCode.trim()) {
                  e.target.style.backgroundColor = '#28a745';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <i className="fas fa-paper-plane"></i>
              Submit
            </button>
            <button 
              onClick={handleReset}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                minWidth: '120px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a6268';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#6c757d';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-redo"></i>
              Reset
            </button>
          </div>
        </div>

        <div className="form-section" style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: '#495057',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <i className="fas fa-info-circle" style={{ color: '#17a2b8' }}></i>
            How to Use Production QR Scanner
          </h3>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '1.5rem',
            color: '#6c757d',
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
            <li>Click "Start Camera" to activate your device's camera</li>
            <li>Point the camera at any production module QR code (MEP or Plant)</li>
            <li>The system will automatically detect the module type and route you to the correct dashboard</li>
            <li>Alternatively, manually enter the module number in the text field</li>
            <li><strong>MEP modules</strong> (e.g., SANYU-CHWP-001, MEP-FAB-001) → MEP Module Dashboard</li>
            <li><strong>Plant modules</strong> (e.g., PLANT-001, TOM-P-001) → Plant Dashboard</li>
          </ul>
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ProductionScanQRCode;
