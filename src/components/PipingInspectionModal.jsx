import React, { useState, useRef } from 'react';
import './Enquiries.css';

const PipingInspectionModal = ({ moduleNo, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    moduleNo: moduleNo || '',
    projectName: '',
    projectNo: '',
    picTitle: '',
    location: '',
    drawingNo: '',
    revisionNo: ''
  });

  // Piping inspection items
  const [pipingItems, setPipingItems] = useState({
    fitUpAcceptable: 'Accept',
    pipeSizeCorrect: 'Accept',
    flangeRatingsCorrect: 'Accept',
    correctFittings: 'Accept',
    ventsInstalled: 'Accept',
    noCarbonContact: 'Accept',
    weldingCompliance: 'Accept',
    internalCleanliness: 'Accept'
  });

  // Valves inspection items
  const [valvesItems, setValvesItems] = useState({
    globeControlValves: 'Accept',
    valvesAccessible: 'Accept',
    drainsConnections: 'Accept'
  });

  // Bolts and Studs inspection items
  const [boltsItems, setBoltsItems] = useState({
    boltingAppropriate: 'Accept',
    threadLubricant: 'Accept',
    boltsTight: 'Accept',
    gasketInstalled: 'Accept'
  });

  // Pipe Supports inspection items
  const [supportsItems, setSupportsItems] = useState({
    lineSupported: 'Accept',
    checkClearances: 'Accept',
    removeTemporary: 'Accept',
    supportsConformance: 'Accept',
    linesAtPumps: 'Accept',
    baseplatesGrouted: 'Accept',
    uBoltsVerified: 'Accept',
    spectacleBlind: 'Accept'
  });

  // Seal Welding inspection items
  const [sealWeldingItems, setSealWeldingItems] = useState({
    sealWeldingComplete: 'Accept',
    exposedThreads: 'Accept',
    noPipeThread: 'Accept'
  });

  // Signature canvas refs
  const tomSignatureRef = useRef(null);
  const clientWitnessedSignatureRef = useRef(null);
  const clientApprovedSignatureRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState({
    tom: false,
    clientWitnessed: false,
    clientApproved: false
  });

  const [tomDate, setTomDate] = useState('');
  const [clientWitnessedDate, setClientWitnessedDate] = useState('');
  const [clientApprovedDate, setClientApprovedDate] = useState('');
  const [comments, setComments] = useState('');
  const [inspectionActivities, setInspectionActivities] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (section, item, value) => {
    if (section === 'piping') {
      setPipingItems(prev => ({ ...prev, [item]: value }));
    } else if (section === 'valves') {
      setValvesItems(prev => ({ ...prev, [item]: value }));
    } else if (section === 'bolts') {
      setBoltsItems(prev => ({ ...prev, [item]: value }));
    } else if (section === 'supports') {
      setSupportsItems(prev => ({ ...prev, [item]: value }));
    } else if (section === 'sealWelding') {
      setSealWeldingItems(prev => ({ ...prev, [item]: value }));
    }
  };

  const startDrawing = (canvasType, e) => {
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientWitnessed' ? clientWitnessedSignatureRef.current : 
                   clientApprovedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing({ ...isDrawing, [canvasType]: true });
  };

  const draw = (canvasType, e) => {
    if (!isDrawing[canvasType]) return;
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientWitnessed' ? clientWitnessedSignatureRef.current : 
                   clientApprovedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = (canvasType) => {
    setIsDrawing({ ...isDrawing, [canvasType]: false });
  };

  const clearSignature = (canvasType) => {
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientWitnessed' ? clientWitnessedSignatureRef.current : 
                   clientApprovedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const pipingInspectionData = {
      ...formData,
      pipingItems,
      valvesItems,
      boltsItems,
      supportsItems,
      sealWeldingItems,
      tomDate,
      clientWitnessedDate,
      clientApprovedDate,
      comments,
      inspectionActivities
    };

    onSubmit(pipingInspectionData);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        width: '95%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        {/* Modal Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          borderBottom: '2px solid #e5e7eb',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1e293b', fontWeight: '700' }}>
            <i className="fas fa-pipe" style={{ marginRight: '0.75rem', color: '#4a90e2' }}></i>
            Piping Inspection
          </h2>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#64748b',
              padding: '0.5rem',
              lineHeight: 1
            }}
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          {/* Header Fields */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="detail-field">
                <label>MODULE NO</label>
                <input
                  type="text"
                  name="moduleNo"
                  value={formData.moduleNo}
                  onChange={handleInputChange}
                  className="form-control"
                  readOnly
                />
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>PROJECT NAME</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>DRAWING NO</label>
                <input
                  type="text"
                  name="drawingNo"
                  value={formData.drawingNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>PROJECT NO</label>
                <input
                  type="text"
                  name="projectNo"
                  value={formData.projectNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>REVISION NO</label>
                <input
                  type="text"
                  name="revisionNo"
                  value={formData.revisionNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                <label>PIC TITLE</label>
                <input
                  type="text"
                  name="picTitle"
                  value={formData.picTitle}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* PIPING Section */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase' }}>
              PIPING
            </h3>
            
            {[
              { key: 'fitUpAcceptable', label: 'Fit-up is acceptable; horizontal lines are level, except where slope is indicated on the design drawings.' },
              { key: 'pipeSizeCorrect', label: 'Pipe size, schedule and type of material is correct.' },
              { key: 'flangeRatingsCorrect', label: 'Verify Flange Ratings are correct.' },
              { key: 'correctFittings', label: 'Correct pipe fittings (Tee, reducers, weldolet etc.) are located and orientated per specification, standards and design installation drawing.' },
              { key: 'ventsInstalled', label: 'Vents are installed at high points and drains at low points.' },
              { key: 'noCarbonContact', label: 'No carbon steel contact with stainless steel components.' },
              { key: 'weldingCompliance', label: 'Welding and NDE is in compliance with codes and project specification.' },
              { key: 'internalCleanliness', label: 'Verify internal Pipe cleanliness prior to fit up.' }
            ].map((item) => (
              <div key={item.key} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'white', borderRadius: '6px' }}>
                <span style={{ flex: 1, fontSize: '0.9rem', color: '#334155' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="Accept"
                      checked={pipingItems[item.key] === 'Accept'}
                      onChange={() => handleRadioChange('piping', item.key, 'Accept')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: '600' }}>Accept</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="N/A"
                      checked={pipingItems[item.key] === 'N/A'}
                      onChange={() => handleRadioChange('piping', item.key, 'N/A')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* VALVES Section */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase' }}>
              VALVES
            </h3>
            
            {[
              { key: 'globeControlValves', label: 'Check - Globe and Control valves are installed with flow in correct direction as indicated on P&ID.' },
              { key: 'valvesAccessible', label: 'Valves are accessible, operable and the correct orientation.' },
              { key: 'drainsConnections', label: 'Drains and flushing connections to valve boxes are installed, accessible and operable as required.' }
            ].map((item) => (
              <div key={item.key} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'white', borderRadius: '6px' }}>
                <span style={{ flex: 1, fontSize: '0.9rem', color: '#334155' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="Accept"
                      checked={valvesItems[item.key] === 'Accept'}
                      onChange={() => handleRadioChange('valves', item.key, 'Accept')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: '600' }}>Accept</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="N/A"
                      checked={valvesItems[item.key] === 'N/A'}
                      onChange={() => handleRadioChange('valves', item.key, 'N/A')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* BOLTS AND STUDS Section */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase' }}>
              BOLTS AND STUDS
            </h3>
            
            {[
              { key: 'boltingAppropriate', label: 'Bolting is appropriate length, diameter and material.' },
              { key: 'threadLubricant', label: 'Thread lubricant is used if required.' },
              { key: 'boltsTight', label: 'All bolts or studs are installed and tight or torqued/tensioned as required. Studs have a minimum one thread past nuts and have equal projection beyond nuts per project specifications.' },
              { key: 'gasketInstalled', label: 'Verify the gasket installed as per specification and the correct type as per design.' }
            ].map((item) => (
              <div key={item.key} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'white', borderRadius: '6px' }}>
                <span style={{ flex: 1, fontSize: '0.9rem', color: '#334155' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="Accept"
                      checked={boltsItems[item.key] === 'Accept'}
                      onChange={() => handleRadioChange('bolts', item.key, 'Accept')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: '600' }}>Accept</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="N/A"
                      checked={boltsItems[item.key] === 'N/A'}
                      onChange={() => handleRadioChange('bolts', item.key, 'N/A')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* PIPE SUPPORTS AND EXPANSION JOINTS Section */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase' }}>
              PIPE SUPPORTS AND EXPANSION JOINTS
            </h3>
            
            {[
              { key: 'lineSupported', label: 'Line is supported properly. Drawings shall be checked to confirm all supports are installed as per design.' },
              { key: 'checkClearances', label: 'Check clearances for pipe expansion at the anchor locations, shoes are properly positioned in relation to support and allow for expansion.' },
              { key: 'removeTemporary', label: 'Remove all temporary supports.' },
              { key: 'supportsConformance', label: 'Check supports for conformance to design drawing.' },
              { key: 'linesAtPumps', label: 'Lines at pumps on other equipment shall be carefully checks for undue stresses on equipment flanges. Pipe supports are straight and plumb.' },
              { key: 'baseplatesGrouted', label: 'Baseplates should be grouted as required.' },
              { key: 'uBoltsVerified', label: 'U-bolts should be verified for compliance to the design details. Guides should have the proper gap.' },
              { key: 'spectacleBlind', label: 'Spectacle blinds, strands and spacers are installed at required and are the correct thickness.' }
            ].map((item) => (
              <div key={item.key} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'white', borderRadius: '6px' }}>
                <span style={{ flex: 1, fontSize: '0.9rem', color: '#334155' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="Accept"
                      checked={supportsItems[item.key] === 'Accept'}
                      onChange={() => handleRadioChange('supports', item.key, 'Accept')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: '600' }}>Accept</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="N/A"
                      checked={supportsItems[item.key] === 'N/A'}
                      onChange={() => handleRadioChange('supports', item.key, 'N/A')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* SEAL WELDING Section */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase' }}>
              SEAL WELDING
            </h3>
            
            {[
              { key: 'sealWeldingComplete', label: 'Seal welding is complete as required.' },
              { key: 'exposedThreads', label: 'Exposed threads are covered by seal weld.' },
              { key: 'noPipeThread', label: 'No pipe thread sealant or tape is to be used in screwed joints to be seal welded.' }
            ].map((item) => (
              <div key={item.key} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'white', borderRadius: '6px' }}>
                <span style={{ flex: 1, fontSize: '0.9rem', color: '#334155' }}>{item.label}</span>
                <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="Accept"
                      checked={sealWeldingItems[item.key] === 'Accept'}
                      onChange={() => handleRadioChange('sealWelding', item.key, 'Accept')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: '600' }}>Accept</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.key}
                      value="N/A"
                      checked={sealWeldingItems[item.key] === 'N/A'}
                      onChange={() => handleRadioChange('sealWelding', item.key, 'N/A')}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>N/A</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Prepared By TOM */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>
              Prepared By TOM
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
              <div className="detail-field">
                <label>TOM DATE</label>
                <input
                  type="date"
                  value={tomDate}
                  onChange={(e) => setTomDate(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="detail-field">
              <label>TOM SIGNATURE</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <canvas
                  ref={tomSignatureRef}
                  width={500}
                  height={80}
                  onMouseDown={(e) => startDrawing('tom', e)}
                  onMouseMove={(e) => draw('tom', e)}
                  onMouseUp={() => stopDrawing('tom')}
                  onMouseLeave={() => stopDrawing('tom')}
                  style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    cursor: 'crosshair'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature('tom')}
                  className="btn-toolbar"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Witnessed By Client */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>
              Witnessed By Client
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
              <div className="detail-field">
                <label>CLIENT WITNESSED DATE</label>
                <input
                  type="date"
                  value={clientWitnessedDate}
                  onChange={(e) => setClientWitnessedDate(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="detail-field">
              <label>CLIENT WITNESSED SIGNATURE</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <canvas
                  ref={clientWitnessedSignatureRef}
                  width={500}
                  height={80}
                  onMouseDown={(e) => startDrawing('clientWitnessed', e)}
                  onMouseMove={(e) => draw('clientWitnessed', e)}
                  onMouseUp={() => stopDrawing('clientWitnessed')}
                  onMouseLeave={() => stopDrawing('clientWitnessed')}
                  style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    cursor: 'crosshair'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature('clientWitnessed')}
                  className="btn-toolbar"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Approved By Client */}
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>
              Approved By Client
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
              <div className="detail-field">
                <label>CLIENT APPROVED DATE</label>
                <input
                  type="date"
                  value={clientApprovedDate}
                  onChange={(e) => setClientApprovedDate(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="detail-field">
              <label>CLIENT APPROVED SIGNATURE</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <canvas
                  ref={clientApprovedSignatureRef}
                  width={500}
                  height={80}
                  onMouseDown={(e) => startDrawing('clientApproved', e)}
                  onMouseMove={(e) => draw('clientApproved', e)}
                  onMouseUp={() => stopDrawing('clientApproved')}
                  onMouseLeave={() => stopDrawing('clientApproved')}
                  style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    cursor: 'crosshair'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature('clientApproved')}
                  className="btn-toolbar"
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>COMMENTS</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="form-control"
                rows="3"
                placeholder="Enter comments"
              />
            </div>
          </div>

          {/* Inspection Activities */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="detail-field">
              <label>INSPECTION ACTIVITIES</label>
              <textarea
                value={inspectionActivities}
                onChange={(e) => setInspectionActivities(e.target.value)}
                className="form-control"
                rows="3"
                placeholder="Enter inspection activities"
              />
            </div>
          </div>

          {/* Conforms */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="detail-field">
              <label>CONFORMS</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter conforms"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'white',
            borderTop: '2px solid #e5e7eb',
            padding: '1.5rem 0',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end'
          }}>
            <button
              type="submit"
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PipingInspectionModal;
