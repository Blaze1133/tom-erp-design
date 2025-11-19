import React from 'react';

const EmployeeWorkInjuryTabView = () => {
  const workInjuryInfo = {
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
  };

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
          Work Injury and Insurance Information
        </h3>
        
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
              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>DATE OF ACCIDENT</label>
                <div className="field-value">{workInjuryInfo.dateOfAccident || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>TIME OF ACCIDENT</label>
                <div className="field-value">{workInjuryInfo.timeOfAccident || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>DESCRIPTION OF THE ACCIDENT</label>
                <div className="field-value">{workInjuryInfo.descriptionOfAccident || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>EVIDENCE AND OTHER UPLOADS</label>
                <div className="field-value">{workInjuryInfo.evidenceAndOtherUploads || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>CERTIFYING / SITE SUPERVISION</label>
                <div className="field-value">{workInjuryInfo.certifyingSiteSupervisor || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>IS MEDICAL LEAVE AVAILABLE</label>
                <div className="field-value">{workInjuryInfo.isMedicalLeaveAvailable ? 'Yes' : 'No'}</div>
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>FROM DATE (MC DAYS GIVEN)</label>
                <div className="field-value">{workInjuryInfo.fromDate || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>NUMBER OF MC DAYS</label>
                <div className="field-value">{workInjuryInfo.numberOfMcDays || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>HOSPITALIZATION IN DAYS</label>
                <div className="field-value">{workInjuryInfo.hospitalizationInDays || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>MEDICAL CERTIFICATE</label>
                <div className="field-value">{workInjuryInfo.medicalCertificate || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>PERCENTAGE INCAPACITATED</label>
                <div className="field-value">{workInjuryInfo.percentageIncapacitated || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INSURANCE CLAIMS</label>
                <div className="field-value">{workInjuryInfo.insuranceClaims ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INSURANCE NUMBER</label>
                <div className="field-value">{workInjuryInfo.insuranceNumber || '-'}</div>
              </div>
            </div>

            {/* Third Column */}
            <div>
              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INSURANCE COMPANY</label>
                <div className="field-value">{workInjuryInfo.insuranceCompany || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INSURANCE APPLIED DATE</label>
                <div className="field-value">{workInjuryInfo.insuranceAppliedDate || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INSURANCE FORM</label>
                <div className="field-value">{workInjuryInfo.insuranceForm || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>POLICY COMMENCEMENT DATE</label>
                <div className="field-value">{workInjuryInfo.policyCommencementDate || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>POLICY EXPIRY DATE</label>
                <div className="field-value">{workInjuryInfo.policyExpiryDate || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>MEDICAL EXPENSE</label>
                <div className="field-value">{workInjuryInfo.medicalExpense || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>WAGES/ COMPENSATION</label>
                <div className="field-value">{workInjuryInfo.wagesCompensation || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>NOTIFY MOM</label>
                <div className="field-value">{workInjuryInfo.notifyMom ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>NOTICE OF ASSESSMENT</label>
                <div className="field-value">{workInjuryInfo.noticeOfAssessment || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>INJURY MANAGEMENT</label>
                <div className="field-value">{workInjuryInfo.injuryManagement || '-'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWorkInjuryTabView;
