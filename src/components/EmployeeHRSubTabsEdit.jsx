import React from 'react';
import SupervisorChangeModal from './SupervisorChangeModal';
import DisciplinaryRecordModal from './DisciplinaryRecordModal';

const EmployeeHRSubTabsEdit = ({ hrSubTab, setHrSubTab }) => {
  const [supervisorModalOpen, setSupervisorModalOpen] = React.useState(false);
  const [disciplinaryModalOpen, setDisciplinaryModalOpen] = React.useState(false);
  const [selectedSupervisorRecord, setSelectedSupervisorRecord] = React.useState(null);
  const [selectedDisciplinaryRecord, setSelectedDisciplinaryRecord] = React.useState(null);

  const createLanguageRow = () => ({
    id: Date.now() + Math.random(),
    language: '',
    proficiency: '',
    knowledgeStatus: ''
  });

  const createPreviousExperienceRow = () => ({
    id: Date.now() + Math.random(),
    previousEmployer: '',
    previousJob: '',
    reasonOfLeaving: '',
    startDate: '',
    lastDate: '',
    attachmentRequired: null
  });

  const createCorporateCardRow = () => ({
    id: Date.now() + Math.random(),
    nameOnCard: '',
    expirationDate: '',
    cardProfile: ''
  });

  // Employee Certification state
  const [certificationRows, setCertificationRows] = React.useState([
    { id: 1, sector: '', ssicTransferNo: '', ssicGtExpiryDate: '', ssdcHotWorkCertNo: '', ssicHtExpiryDate: '', ssscShipyardSafetyCertNo: '', bcssCertNo: '', csocExpiryDate: '', restDay: '', riggerSignalManCertNo: '', liftingSupervisorCertNo: '', csocAttachment: null, csocCertNo: '', constructionSupervisorCertNo: '', coreTradeTestDate: '' }
  ]);

  // Emergency Contacts state
  const [emergencyContactRows, setEmergencyContactRows] = React.useState([
    { id: 1, name: '', relationship: '', emergencyAddress: '', emergencyPhone: '' }
  ]);

  // Supervisor Change History state
  const [supervisorHistory, setSupervisorHistory] = React.useState([
    { id: 1, edit: '20/8/2025', date: '20/8/2025', supervisor: 'Infocomm Solutions : TEA102 Kendasamy Kannan : TMO028 MAHENDRAN S/O MINISAMY : MEP057 Mahendran S/O Minisamy' }
  ]);

  // Disciplinary Records state
  const [disciplinaryRecords, setDisciplinaryRecords] = React.useState([]);

  // Language Known state
  const [languageRows, setLanguageRows] = React.useState([createLanguageRow()]);

  // Previous Experience state
  const [previousExperienceRows, setPreviousExperienceRows] = React.useState([createPreviousExperienceRow()]);

  // Corporate Card state
  const [corporateCardRows, setCorporateCardRows] = React.useState([createCorporateCardRow()]);

  const buttonStyle = (isActive) => ({
    fontSize: '0.8rem',
    padding: '0.75rem 1.25rem',
    border: 'none',
    background: isActive ? '#4a5568' : 'transparent',
    color: isActive ? 'white' : '#4a5568',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s',
    borderRadius: '0'
  });

  // Handler functions
  const handleAddCertificationRow = () => {
    setCertificationRows([...certificationRows, { id: Date.now(), sector: '', ssicTransferNo: '', ssicGtExpiryDate: '', ssdcHotWorkCertNo: '', ssicHtExpiryDate: '', ssscShipyardSafetyCertNo: '', bcssCertNo: '', csocExpiryDate: '', restDay: '', riggerSignalManCertNo: '', liftingSupervisorCertNo: '', csocAttachment: null, csocCertNo: '', constructionSupervisorCertNo: '', coreTradeTestDate: '' }]);
  };

  const handleCertificationChange = (id, field, value) => {
    setCertificationRows(certificationRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleAddEmergencyContactRow = () => {
    setEmergencyContactRows([...emergencyContactRows, { id: Date.now(), name: '', relationship: '', emergencyAddress: '', emergencyPhone: '' }]);
  };

  const handleEmergencyContactChange = (id, field, value) => {
    setEmergencyContactRows(emergencyContactRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleAddLanguageRow = () => {
    setLanguageRows([...languageRows, createLanguageRow()]);
  };

  const handleLanguageChange = (id, field, value) => {
    setLanguageRows(languageRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleRemoveLanguageRow = (id) => {
    if (languageRows.length > 1) {
      setLanguageRows(languageRows.filter(row => row.id !== id));
    }
  };

  const handleAddPreviousExperienceRow = () => {
    setPreviousExperienceRows([...previousExperienceRows, createPreviousExperienceRow()]);
  };

  const handlePreviousExperienceChange = (id, field, value) => {
    setPreviousExperienceRows(previousExperienceRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleRemovePreviousExperienceRow = (id) => {
    if (previousExperienceRows.length > 1) {
      setPreviousExperienceRows(previousExperienceRows.filter(row => row.id !== id));
    }
  };

  const handleAddCorporateCardRow = () => {
    setCorporateCardRows([...corporateCardRows, createCorporateCardRow()]);
  };

  const handleCorporateCardChange = (id, field, value) => {
    setCorporateCardRows(corporateCardRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleRemoveCorporateCardRow = (id) => {
    if (corporateCardRows.length > 1) {
      setCorporateCardRows(corporateCardRows.filter(row => row.id !== id));
    }
  };

  const handleEditSupervisor = (record) => {
    setSelectedSupervisorRecord(record);
    setSupervisorModalOpen(true);
  };

  const handleNewDisciplinary = () => {
    setSelectedDisciplinaryRecord({ id: Date.now(), employeeName: 'MEP01 001 JEGANATHAN SUNDARAVELU', isWatch: '', startDate: '', reviewDate: '', endDate: '', memo: '', disciplinaryDocument: null });
    setDisciplinaryModalOpen(true);
  };

  const handleSaveDisciplinary = () => {
    if (selectedDisciplinaryRecord) {
      const exists = disciplinaryRecords.find(r => r.id === selectedDisciplinaryRecord.id);
      if (exists) {
        setDisciplinaryRecords(disciplinaryRecords.map(r => r.id === selectedDisciplinaryRecord.id ? selectedDisciplinaryRecord : r));
      } else {
        setDisciplinaryRecords([...disciplinaryRecords, selectedDisciplinaryRecord]);
      }
    }
    setDisciplinaryModalOpen(false);
    setSelectedDisciplinaryRecord(null);
  };

  return (
    <div className="tab-content-wrapper">
      {/* Top section with key HR fields - Above sub-tabs */}
      <div style={{ 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderBottom: '1px solid #e0e0e0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        <div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">EMP NATIONALITY <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" defaultValue="INDIAN" />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" />
              IS DUTY ROSTER
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">CURRENT AGE</label>
            <input type="number" className="form-control" defaultValue="40" disabled />
          </div>
        </div>
        <div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              EXEMPTION FOR BIOMETRIC
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">BIO-METRIC NUMBER</label>
            <input type="text" className="form-control" defaultValue="MEP01 001" />
          </div>
        </div>
      </div>

      {/* HR Sub-tabs - Horizontal scrollable */}
      <div style={{ 
        borderBottom: '2px solid #e0e0e0', 
        background: '#f8f9fa',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex'
      }}>
        <button onClick={() => setHrSubTab('basicInfo')} style={buttonStyle(hrSubTab === 'basicInfo')}>
          Basic Info ●
        </button>
        <button onClick={() => setHrSubTab('jobInfo')} style={buttonStyle(hrSubTab === 'jobInfo')}>
          Job Info ●
        </button>
        <button onClick={() => setHrSubTab('bankInfo')} style={buttonStyle(hrSubTab === 'bankInfo')}>
          Bank Info ●
        </button>
        <button onClick={() => setHrSubTab('education')} style={buttonStyle(hrSubTab === 'education')}>
          Education
        </button>
        <button onClick={() => setHrSubTab('certification')} style={buttonStyle(hrSubTab === 'certification')}>
          Employee Certification
        </button>
        <button onClick={() => setHrSubTab('emergencyContacts')} style={buttonStyle(hrSubTab === 'emergencyContacts')}>
          Emergency Contacts
        </button>
        <button onClick={() => setHrSubTab('supervisorChangeHist')} style={buttonStyle(hrSubTab === 'supervisorChangeHist')}>
          Supervisor Change Hist. ●
        </button>
        <button onClick={() => setHrSubTab('disciplinaryWatches')} style={buttonStyle(hrSubTab === 'disciplinaryWatches')}>
          Disciplinary Watches
        </button>
        <button onClick={() => setHrSubTab('expenseReportCurrencies')} style={buttonStyle(hrSubTab === 'expenseReportCurrencies')}>
          Expense Report Currencies
        </button>
        <button onClick={() => setHrSubTab('companyDocuments')} style={buttonStyle(hrSubTab === 'companyDocuments')}>
          Company Documents
        </button>
        <button onClick={() => setHrSubTab('languageKnown')} style={buttonStyle(hrSubTab === 'languageKnown')}>
          Language Known
        </button>
        <button onClick={() => setHrSubTab('previousExperience')} style={buttonStyle(hrSubTab === 'previousExperience')}>
          Previous Professional Experience
        </button>
        <button onClick={() => setHrSubTab('corporateCards')} style={buttonStyle(hrSubTab === 'corporateCards')}>
          Corporate Cards
        </button>
      </div>

      <div style={{ padding: '1.5rem', background: 'white' }}>
        {/* Basic Info Sub-tab */}
        {hrSubTab === 'basicInfo' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">GENDER</label>
              <select className="form-control">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">BIRTH DATE</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">MARITAL STATUS</label>
              <select className="form-control">
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">EMP RESIDENTIAL STATUS</label>
              <select className="form-control">
                <option value="">Select Status</option>
                <option value="Foreigner">Foreigner</option>
                <option value="Singapore PR">Singapore PR</option>
                <option value="Singaporean">Singaporean</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ORIGIN COUNTRY</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">ETHNIC RACE</label>
              <select className="form-control">
                <option value="">Select Race</option>
                <option value="Chinese">Chinese</option>
                <option value="Malay">Malay</option>
                <option value="Indian">Indian</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">WORK PASS NO</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">PASSPORT ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">PASSPORT EXPIRY DATE</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">WORK PERMIT/PASS TYPE</label>
              <select className="form-control">
                <option value="">- New -</option>
                <option value="S PASS">S PASS</option>
                <option value="E PASS">E PASS</option>
                <option value="WORK PERMIT">WORK PERMIT</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">WORK PERMIT START DATE</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">WORK PERMIT END DATE</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        )}

        {/* Job Info Sub-tab */}
        {hrSubTab === 'jobInfo' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">HIRE DATE</label>
              <input type="date" className="form-control" defaultValue="2025-08-20" />
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYEE STATUS</label>
              <select className="form-control">
                <option value="Permanent">Permanent</option>
                <option value="Probation">Probation</option>
                <option value="Resigned">Resigned</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PROBATION (IN MONTH)</label>
              <input type="number" className="form-control" defaultValue="3" />
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYMENT TYPE</label>
              <select className="form-control">
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
                <option value="Part Timers">Part Timers</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">CONFIRMATION DATE</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">JOB TITLE <span style={{ color: 'red' }}>*</span></label>
              <select className="form-control">
                <option value="">Select Job Title</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Welder">Welder</option>
                <option value="QC">QC</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">TERMINATION DATE / LAST WORKING DAY</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">RESIGNATION DATE</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">NOTICE PERIOD <span style={{ color: 'red' }}>*</span></label>
              <input type="number" className="form-control" defaultValue="0" />
            </div>
          </div>
        )}

        {/* Bank Info Sub-tab */}
        {hrSubTab === 'bankInfo' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">BRANCH ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">BANK NAME</label>
              <select className="form-control">
                <option value="">- New -</option>
                <option value="DBS">DBS</option>
                <option value="OCBC">OCBC</option>
                <option value="POSB">POSB</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">BANK ACCOUNT NO</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">BANK NUMBER/ BANK CODE</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">BANK ACCOUNT NAME</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">BIC CODE</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        )}

        {/* Education Sub-tab */}
        {hrSubTab === 'education' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">LEVEL OF EDUCATION</label>
                <select className="form-control">
                  <option value="">Select Level</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">DEGREE</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">DATE CONFERRED</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
            </div>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>LEVEL OF EDUCATION</th>
                  <th>DEGREE</th>
                  <th>DATE CONFERRED</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No education records added yet
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {/* Employee Certification Sub-tab - EDITABLE TABLE */}
        {hrSubTab === 'certification' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#4a5568' }}>New Employee Certification</h3>
            </div>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SECTOR</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SSIC - TRANSFER NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SSIC GT EXPIRY DATE</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SSDC - HOT WORK CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SSIC HT EXPIRY DATE</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>SSSC - SHIPYARD SAFETY CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>BCSS CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>CSOC EXPIRY DATE</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>REST DAY</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>RIGGER / SIGNAL MAN CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>LIFTING SUPERVISOR - CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>CSOC ATTACHMENT</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>CSOC CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>CONSTRUCTION SUPERVISOR CERT NO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.7rem' }}>CORE TRADE TEST DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {certificationRows.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.3rem' }}>
                        <select className="form-control" style={{ minWidth: '100px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.sector} onChange={(e) => handleCertificationChange(row.id, 'sector', e.target.value)}>
                          <option value=""></option>
                          <option value="MARINE">MARINE</option>
                          <option value="CONSTRUCTION">CONSTRUCTION</option>
                        </select>
                      </td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.ssicTransferNo} onChange={(e) => handleCertificationChange(row.id, 'ssicTransferNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="date" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.ssicGtExpiryDate} onChange={(e) => handleCertificationChange(row.id, 'ssicGtExpiryDate', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.ssdcHotWorkCertNo} onChange={(e) => handleCertificationChange(row.id, 'ssdcHotWorkCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="date" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.ssicHtExpiryDate} onChange={(e) => handleCertificationChange(row.id, 'ssicHtExpiryDate', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '150px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.ssscShipyardSafetyCertNo} onChange={(e) => handleCertificationChange(row.id, 'ssscShipyardSafetyCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '100px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.bcssCertNo} onChange={(e) => handleCertificationChange(row.id, 'bcssCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="date" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.csocExpiryDate} onChange={(e) => handleCertificationChange(row.id, 'csocExpiryDate', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '80px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.restDay} onChange={(e) => handleCertificationChange(row.id, 'restDay', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '130px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.riggerSignalManCertNo} onChange={(e) => handleCertificationChange(row.id, 'riggerSignalManCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '130px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.liftingSupervisorCertNo} onChange={(e) => handleCertificationChange(row.id, 'liftingSupervisorCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="file" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} onChange={(e) => handleCertificationChange(row.id, 'csocAttachment', e.target.files[0])} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '100px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.csocCertNo} onChange={(e) => handleCertificationChange(row.id, 'csocCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="text" className="form-control" style={{ minWidth: '150px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.constructionSupervisorCertNo} onChange={(e) => handleCertificationChange(row.id, 'constructionSupervisorCertNo', e.target.value)} /></td>
                      <td style={{ padding: '0.3rem' }}><input type="date" className="form-control" style={{ minWidth: '120px', fontSize: '0.75rem', padding: '0.3rem' }} value={row.coreTradeTestDate} onChange={(e) => handleCertificationChange(row.id, 'coreTradeTestDate', e.target.value)} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" onClick={handleAddCertificationRow}><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
            </div>
          </>
        )}

        {/* Emergency Contacts Sub-tab - EDITABLE TABLE */}
        {hrSubTab === 'emergencyContacts' && (
          <>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>NAME</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>RELATIONSHIP</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EMERGENCY ADDRESS</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EMERGENCY PHONE</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyContactRows.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}><input type="text" className="form-control" style={{ fontSize: '0.85rem', padding: '0.4rem' }} value={row.name} onChange={(e) => handleEmergencyContactChange(row.id, 'name', e.target.value)} /></td>
                      <td style={{ padding: '0.5rem' }}><input type="text" className="form-control" style={{ fontSize: '0.85rem', padding: '0.4rem' }} value={row.relationship} onChange={(e) => handleEmergencyContactChange(row.id, 'relationship', e.target.value)} /></td>
                      <td style={{ padding: '0.5rem' }}><input type="text" className="form-control" style={{ fontSize: '0.85rem', padding: '0.4rem' }} value={row.emergencyAddress} onChange={(e) => handleEmergencyContactChange(row.id, 'emergencyAddress', e.target.value)} /></td>
                      <td style={{ padding: '0.5rem' }}><input type="text" className="form-control" style={{ fontSize: '0.85rem', padding: '0.4rem' }} value={row.emergencyPhone} onChange={(e) => handleEmergencyContactChange(row.id, 'emergencyPhone', e.target.value)} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" onClick={handleAddEmergencyContactRow}><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
            </div>
          </>
        )}

        {/* Supervisor Change History Sub-tab - TABLE WITH EDIT MODAL */}
        {hrSubTab === 'supervisorChangeHist' && (
          <>
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary"><i className="fas fa-save"></i> Save</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-search"></i> Search</button>
              <button className="btn btn-secondary"><i className="fas fa-bars"></i> Actions</button>
            </div>
            <table className="detail-items-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EDIT</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>DATE *</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>SUPERVISOR</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>HIERARCHY</th>
                </tr>
              </thead>
              <tbody>
                {supervisorHistory.map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={{ padding: '0.75rem' }}>
                      <button 
                        className="btn btn-sm btn-secondary" 
                        onClick={() => handleEditSupervisor(record)}
                        style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}
                      >
                        {record.edit}
                      </button>
                    </td>
                    <td style={{ padding: '0.75rem' }}>{record.date}</td>
                    <td style={{ padding: '0.75rem' }}>{record.supervisor}</td>
                    <td style={{ padding: '0.75rem' }}>{record.hierarchy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Disciplinary Watches Sub-tab - TABLE WITH NEW MODAL */}
        {hrSubTab === 'disciplinaryWatches' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <button className="btn btn-primary" onClick={handleNewDisciplinary}>
                <i className="fas fa-plus"></i> New Disciplinary Record
              </button>
            </div>
            <table className="detail-items-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>IS WATCH</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>START DATE</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>REVIEW DATE</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>END DATE</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>MEMO</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>DISCIPLINARY DOCUMENT</th>
                </tr>
              </thead>
              <tbody>
                {disciplinaryRecords.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                      No disciplinary records added yet
                    </td>
                  </tr>
                ) : (
                  disciplinaryRecords.map((record) => (
                    <tr key={record.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.75rem' }}>{record.isWatch}</td>
                      <td style={{ padding: '0.75rem' }}>{record.startDate}</td>
                      <td style={{ padding: '0.75rem' }}>{record.reviewDate}</td>
                      <td style={{ padding: '0.75rem' }}>{record.endDate}</td>
                      <td style={{ padding: '0.75rem' }}>{record.memo}</td>
                      <td style={{ padding: '0.75rem' }}>{record.disciplinaryDocument?.name || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
        )}

        {/* Expense Report Currencies Sub-tab */}
        {hrSubTab === 'expenseReportCurrencies' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">DEFAULT CURRENCY <span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" style={{ maxWidth: '300px' }}>
                  <option value="">Select Currency</option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">CURRENCY <span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" style={{ maxWidth: '300px' }}>
                  <option value="">Select Currency</option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
            </div>
          </>
        )}

        {/* Company Documents Sub-tab */}
        {hrSubTab === 'companyDocuments' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#4a5568' }}>New Company Documents</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">DOCUMENT NAME</label>
                <select className="form-control">
                  <option value=""></option>
                  <option value="Contract">Contract</option>
                  <option value="NDA">NDA</option>
                  <option value="Certificate">Certificate</option>
                  <option value="License">License</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">DOCUMENT</label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
              <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
            </div>
          </>
        )}

        {/* Language Known Sub-tab */}
        {hrSubTab === 'languageKnown' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#4a5568' }}>New Languages Known</h3>
            </div>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>LANGUAGES</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>PROFICIENCY LEVEL</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>KNOWLEDGE STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {languageRows.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.language}
                          onChange={(e) => handleLanguageChange(row.id, 'language', e.target.value)}
                        >
                          <option value=""></option>
                          <option value="English">English</option>
                          <option value="Mandarin">Mandarin</option>
                          <option value="Malay">Malay</option>
                          <option value="Tamil">Tamil</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Bengali">Bengali</option>
                        </select>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.proficiency}
                          onChange={(e) => handleLanguageChange(row.id, 'proficiency', e.target.value)}
                        >
                          <option value=""></option>
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Native">Native</option>
                        </select>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.knowledgeStatus}
                          onChange={(e) => handleLanguageChange(row.id, 'knowledgeStatus', e.target.value)}
                        >
                          <option value=""></option>
                          <option value="Reading">Reading</option>
                          <option value="Writing">Writing</option>
                          <option value="Speaking">Speaking</option>
                          <option value="All">All</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" onClick={handleAddLanguageRow}><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
              <button
                className="btn btn-secondary"
                onClick={() => languageRows.length > 1 && handleRemoveLanguageRow(languageRows[languageRows.length - 1].id)}
              >
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          </>
        )}

        {/* Previous Professional Experience Sub-tab */}
        {hrSubTab === 'previousExperience' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#4a5568' }}>New Previous Professional Experience</h3>
            </div>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>PREVIOUS EMPLOYER</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>PREVIOUS JOB</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>REASON OF LEAVING</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>START DATE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>LAST DATE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>ATTACHMENT REQUIRED</th>
                  </tr>
                </thead>
                <tbody>
                  {previousExperienceRows.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '150px' }}
                          value={row.previousEmployer}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'previousEmployer', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '150px' }}
                          value={row.previousJob}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'previousJob', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '150px' }}
                          value={row.reasonOfLeaving}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'reasonOfLeaving', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '130px' }}
                          value={row.startDate}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'startDate', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '130px' }}
                          value={row.lastDate}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'lastDate', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="file"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem', minWidth: '150px' }}
                          onChange={(e) => handlePreviousExperienceChange(row.id, 'attachmentRequired', e.target.files?.[0] || null)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button className="btn btn-primary" onClick={handleAddPreviousExperienceRow}><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
              <button
                className="btn btn-secondary"
                onClick={() => previousExperienceRows.length > 1 && handleRemovePreviousExperienceRow(previousExperienceRows[previousExperienceRows.length - 1].id)}
              >
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary"><i className="fas fa-save"></i> Save</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-search"></i> Search</button>
              <button className="btn btn-secondary"><i className="fas fa-bars"></i> Actions</button>
            </div>
          </>
        )}

        {/* Corporate Cards Sub-tab */}
        {hrSubTab === 'corporateCards' && (
          <>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>NAME ON CARD <span style={{ color: 'red' }}>*</span></th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EXPIRATION DATE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>CORPORATE CARD PROFILE</th>
                  </tr>
                </thead>
                <tbody>
                  {corporateCardRows.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="<Type then tab>"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.nameOnCard}
                          onChange={(e) => handleCorporateCardChange(row.id, 'nameOnCard', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.expirationDate}
                          onChange={(e) => handleCorporateCardChange(row.id, 'expirationDate', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          value={row.cardProfile}
                          onChange={(e) => handleCorporateCardChange(row.id, 'cardProfile', e.target.value)}
                        >
                          <option value=""></option>
                          <option value="Standard">Standard</option>
                          <option value="Premium">Premium</option>
                          <option value="Corporate">Corporate</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" onClick={handleAddCorporateCardRow}><i className="fas fa-check"></i> Add</button>
              <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
              <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
              <button
                className="btn btn-secondary"
                onClick={() => corporateCardRows.length > 1 && handleRemoveCorporateCardRow(corporateCardRows[corporateCardRows.length - 1].id)}
              >
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <SupervisorChangeModal 
        isOpen={supervisorModalOpen}
        onClose={() => setSupervisorModalOpen(false)}
        record={selectedSupervisorRecord}
        onSave={(updatedRecord) => {
          setSupervisorHistory(supervisorHistory.map(r => r.id === updatedRecord.id ? updatedRecord : r));
          setSupervisorModalOpen(false);
        }}
      />

      <DisciplinaryRecordModal 
        isOpen={disciplinaryModalOpen}
        onClose={() => setDisciplinaryModalOpen(false)}
        record={selectedDisciplinaryRecord}
        onSave={handleSaveDisciplinary}
      />
    </div>
  );
};

export default EmployeeHRSubTabsEdit;
