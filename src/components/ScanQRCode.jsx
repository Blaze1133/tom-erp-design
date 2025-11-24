import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ScanQRCode = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [qrCode, setQrCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // QR Code to Dashboard mapping
  const qrCodeMappings = {
    'L14-DFMA-017': 'dashboard-module',
    'MODULE-001': 'production-time-tracking',
    'MODULE-002': 'production-upload-drawings',
    'MODULE-003': 'production-project-documents',
    'FABRICATION-001': 'dashboard-module',
    'ASSEMBLY-001': 'dashboard-module',
    'QA-001': 'dashboard-module',
    'PACKAGING-001': 'dashboard-module'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const startCamera = async () => {
    try {
      setIsScanning(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', // Use back camera on mobile
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
      
      // In a real implementation, you would use a QR code library here
      // For demo purposes, we'll simulate QR detection
      simulateQRDetection();
    }
  };

  const simulateQRDetection = () => {
    // Simulate QR code detection - in real app, use jsQR or similar library
    const mockQRCodes = Object.keys(qrCodeMappings);
    const randomQR = mockQRCodes[Math.floor(Math.random() * mockQRCodes.length)];
    
    if (Math.random() > 0.7) { // 30% chance of detection
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

    const targetPage = qrCodeMappings[qrCode.trim()];
    
    if (targetPage) {
      showToast(`Valid QR Code! Redirecting to dashboard...`, 'success');
      setTimeout(() => {
        setCurrentPage(targetPage);
      }, 1500);
    } else {
      showToast('Invalid QR Code. Please try again.', 'error');
    }
  };

  const handleReset = () => {
    setQrCode('');
    stopCamera();
    showToast('Form reset successfully', 'success');
  };

  useEffect(() => {
    // Auto-capture frames when scanning
    let interval;
    if (isScanning) {
      interval = setInterval(captureFrame, 500);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isScanning]);

  useEffect(() => {
    // Cleanup camera on unmount
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-qrcode"></i>
          <h1>Scan QR Code</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Scan</button>
          <button className="btn-view-option">Manual</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        {/* QR Scanner Section */}
        <div className="form-section" style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          
          {/* Camera Section */}
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

          {/* Manual Input Section */}
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
                placeholder="Point camera at QR code or enter manually"
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
                marginTop: '0.5rem', 
                fontSize: '0.875rem', 
                color: qrCodeMappings[qrCode] ? '#059669' : '#dc2626',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <i className={`fas ${qrCodeMappings[qrCode] ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                {qrCodeMappings[qrCode] ? 'Valid QR Code detected' : 'Invalid QR Code'}
              </div>
            )}
          </div>

          {/* Action Buttons */}
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

        {/* Instructions Section */}
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
            How to Use QR Scanner
          </h3>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '1.5rem',
            color: '#6c757d',
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
            <li>Click "Start Camera" to activate your device's camera</li>
            <li>Point the camera at the QR code until it's detected automatically</li>
            <li>Alternatively, you can manually enter the QR code in the text field</li>
            <li>Click "Submit" to validate and navigate to the corresponding module</li>
            <li>Valid QR codes will redirect you to the appropriate dashboard</li>
          </ul>
        </div>
      </div>

      {/* Hidden canvas for QR processing */}
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

export default ScanQRCode;
