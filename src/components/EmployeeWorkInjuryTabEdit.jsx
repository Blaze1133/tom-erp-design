import React, { useState } from 'react';

const EmployeeWorkInjuryTabEdit = () => {
  const [workInjuryData, setWorkInjuryData] = useState({
    dateOfAccident: '',
    timeOfAccident: '',
    descriptionOfAccident: '',
    evidenceAndOtherUploads: '',
    certifyingSiteSupervisor: '',
    isMedicalLeaveAvailable: false,
    fromDate: '',
    numberOfMcDays: '',
    hospitalizationInDays: '',
    medicalCertificate: '',
    percentageIncapacitated: '',
    insuranceClaims: false,
    insuranceNumber: '',
    insuranceCompany: '',
    insuranceAppliedDate: '',
    insuranceForm: '',
    policyCommencementDate: '',
    policyExpiryDate: '',
    medicalExpense: '',
    wagesCompensation: '',
    notifyMom: false,
    noticeOfAssessment: '',
    injuryManagement: ''
  });

  const handleInputChange = (field, value) => {
    setWorkInjuryData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {/* Work Injury Information */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #dee2e6'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            {/* First Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">DATE OF ACCIDENT</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    className="form-control"
                    value={workInjuryData.dateOfAccident}
                    onChange={(e) => handleInputChange('dateOfAccident', e.target.value)}
                  />
                  <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>
                    <i className="fas fa-calendar"></i>
                  </button>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">TIME OF ACCIDENT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.timeOfAccident}
                  onChange={(e) => handleInputChange('timeOfAccident', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">DESCRIPTION OF THE ACCIDENT</label>
                <textarea 
                  className="form-control" 
                  rows="4"
                  value={workInjuryData.descriptionOfAccident}
                  onChange={(e) => handleInputChange('descriptionOfAccident', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">EVIDENCE AND OTHER UPLOADS</label>
                <select 
                  className="form-control"
                  value={workInjuryData.evidenceAndOtherUploads}
                  onChange={(e) => handleInputChange('evidenceAndOtherUploads', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">CERTIFYING / SITE SUPERVISION</label>
                <select 
                  className="form-control"
                  value={workInjuryData.certifyingSiteSupervisor}
                  onChange={(e) => handleInputChange('certifyingSiteSupervisor', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={workInjuryData.isMedicalLeaveAvailable}
                    onChange={(e) => handleInputChange('isMedicalLeaveAvailable', e.target.checked)}
                  />
                  IS MEDICAL LEAVE AVAILABLE TO DATE ( MC DAYS GIVEN )
                </label>
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">FROM DATE ( MC DAYS GIVEN )</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.fromDate}
                  onChange={(e) => handleInputChange('fromDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">NUMBER OF MC DAYS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.numberOfMcDays}
                  onChange={(e) => handleInputChange('numberOfMcDays', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">HOSPITALIZATION IN DAYS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.hospitalizationInDays}
                  onChange={(e) => handleInputChange('hospitalizationInDays', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">MEDICAL CERTIFICATE</label>
                <select 
                  className="form-control"
                  value={workInjuryData.medicalCertificate}
                  onChange={(e) => handleInputChange('medicalCertificate', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PERCENTAGE INCAPACITATED</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.percentageIncapacitated}
                  onChange={(e) => handleInputChange('percentageIncapacitated', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={workInjuryData.insuranceClaims}
                    onChange={(e) => handleInputChange('insuranceClaims', e.target.checked)}
                  />
                  INSURANCE CLAIMS
                </label>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">INSURANCE NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.insuranceNumber}
                  onChange={(e) => handleInputChange('insuranceNumber', e.target.value)}
                />
              </div>
            </div>

            {/* Third Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">INSURANCE COMPANY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.insuranceCompany}
                  onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">INSURANCE APPLIED DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.insuranceAppliedDate}
                  onChange={(e) => handleInputChange('insuranceAppliedDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">INSURANCE FORM</label>
                <select 
                  className="form-control"
                  value={workInjuryData.insuranceForm}
                  onChange={(e) => handleInputChange('insuranceForm', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">POLICY COMMENCEMENT DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.policyCommencementDate}
                  onChange={(e) => handleInputChange('policyCommencementDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">POLICY EXPIRY DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.policyExpiryDate}
                  onChange={(e) => handleInputChange('policyExpiryDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">MEDICAL EXPENSE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.medicalExpense}
                  onChange={(e) => handleInputChange('medicalExpense', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">WAGES/ COMPENSATION</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.wagesCompensation}
                  onChange={(e) => handleInputChange('wagesCompensation', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={workInjuryData.notifyMom}
                    onChange={(e) => handleInputChange('notifyMom', e.target.checked)}
                  />
                  NOTIFY MOM
                </label>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">NOTICE OF ASSESSMENT</label>
                <select 
                  className="form-control"
                  value={workInjuryData.noticeOfAssessment}
                  onChange={(e) => handleInputChange('noticeOfAssessment', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">INJURY MANAGEMENT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={workInjuryData.injuryManagement}
                  onChange={(e) => handleInputChange('injuryManagement', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWorkInjuryTabEdit;
