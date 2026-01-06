import { getStageSubmissions } from '../utils/stageSubmissions';

const withDummy = (submissions, dummyPayloads, { module, stageId, stageLabel }) => {
  const normalizedSubmissions = (submissions || []).map((s) => ({
    id: s.id,
    source: 'submission',
    submittedAt: s.submittedAt || '',
    payload: s.payload || {}
  }));

  const dummy = (dummyPayloads || []).map((payload, idx) => ({
    id: `dummy-${module}-${stageId}-${idx + 1}`,
    source: 'dummy',
    submittedAt: '',
    payload
  }));

  return [...normalizedSubmissions, ...dummy];
};

const v = (value) => (value == null || value === '' ? '-' : value);

const columns = (...cols) => cols;

const col = (key, label, getValue) => ({ key, label, getValue });

export const mepStageListConfigs = {
  'mep-stage-frame-fabrication': {
    module: 'MEP',
    stageId: 'frame-fabrication',
    stageLabel: 'Fabrication',
    viewPageId: 'frame-fabrication',
    columns: columns(
      col('projectId', 'PROJECT ID', (p) => v(p.projectId)),
      col('projectName', 'PROJECT NAME', (p) => v(p.projectName)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('clientName', 'CLIENT', (p) => v(p.clientName)),
      col('checkListNo', 'CHECKLIST NO', (p) => v(p.checkListNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection))
    ),
    dummyPayloads: [
      { projectId: '25-000002', projectName: 'Integrated Transport Hub', moduleNo: 'L14-DFMA-016', clientName: 'ABC Construction', checkListNo: 'FF-001', dateOfInspection: '29-Oct-2025' },
      { projectId: '25-000003', projectName: 'Offshore Platform Module', moduleNo: 'L15-DFMA-021', clientName: 'Marine Engineering', checkListNo: 'FF-002', dateOfInspection: '02-Nov-2025' }
    ]
  },
  'mep-stage-production-me-services': {
    module: 'MEP',
    stageId: 'production-me-services',
    stageLabel: 'M&E Assembly',
    viewPageId: 'production-me-services',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('projectName', 'PROJECT', (p) => v(p.projectName)),
      col('service', 'SERVICE', (p) => v(p.service)),
      col('contra', 'CONTRACTOR', (p) => v(p.contra)),
      col('size', 'SIZE', (p) => v(p.size)),
      col('weightage', 'WEIGHTAGE', (p) => v(p.weightage))
    ),
    dummyPayloads: [
      {
        id: 9001,
        moduleNo: 'L14-DFMA-016',
        batch: 'B1',
        projectName: 'Integrated Transport Hub',
        service: 'Ducting',
        contra: 'Subcon A',
        size: '300x150',
        completionS: 'Not Completed',
        reasonP: 'N/A',
        complete: '',
        weightage: '10%',
        image: '',
        modified: 'system',
        modifiedTime: '01-Nov-2025 10:00:00',
        addedBy: 'system',
        addedTime: '01-Nov-2025 10:00:00',
        subModuleNo: 'L4-ADM-DFMA-039'
      },
      {
        id: 9002,
        moduleNo: 'L15-DFMA-021',
        batch: 'B2',
        projectName: 'Offshore Platform Module',
        service: 'Piping',
        contra: 'Subcon B',
        size: '3"',
        completionS: 'Not Completed',
        reasonP: 'N/A',
        complete: '',
        weightage: '15%',
        image: '',
        modified: 'system',
        modifiedTime: '02-Nov-2025 14:30:00',
        addedBy: 'system',
        addedTime: '02-Nov-2025 14:30:00',
        subModuleNo: 'L4-ADM-DFMA-039'
      }
    ]
  },
  'mep-stage-testing-alignment': {
    module: 'MEP',
    stageId: 'testing-alignment',
    stageLabel: 'Testing & Alignment',
    viewPageId: 'testing-alignment',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('projectName', 'PROJECT', (p) => v(p.projectName)),
      col('testingAlignmentDate', 'DATE/TIME', (p) => v(p.testingAlignmentDate)),
      col('testing', 'TESTING', (p) => v(p.testing)),
      col('section', 'SECTION', (p) => v(p.section))
    ),
    dummyPayloads: [
      { moduleNo: 'GERA53-DFMA-16', projectName: 'GERA5-2', testingAlignmentDate: '30-Oct-2025 10:44:55', testing: 'Hydro', section: 'Workshop' },
      { moduleNo: 'GERA53-DFMA-17', projectName: 'GERA5-3', testingAlignmentDate: '01-Nov-2025 14:10:00', testing: 'Smoke', section: 'Yard' }
    ]
  },
  'mep-stage-fabrication-qa-qc': {
    module: 'MEP',
    stageId: 'fabrication-qa-qc',
    stageLabel: 'Fabrication QA & QC',
    viewPageId: 'fabrication-qa-qc',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('checkListReportNo', 'REPORT NO', (p) => v(p.checkListReportNo)),
      col('location', 'LOCATION', (p) => v(p.location)),
      col('referenceDrawingNo', 'DRAWING NO', (p) => v(p.referenceDrawingNo)),
      col('instrumentsUsed', 'INSTRUMENTS', (p) => v(p.instrumentsUsed)),
      col('moduleConclusion', 'CONCLUSION', (p) => v(p.moduleConclusion))
    ),
    dummyPayloads: [
      { moduleNo: 'GERA53-DFMA-10', checkListReportNo: 'GERA53-DFMA-10-C/F', location: 'GERA53', referenceDrawingNo: 'DWG-001', instrumentsUsed: 'Caliper', moduleConclusion: 'Accept' },
      { moduleNo: 'GERA53-DFMA-11', checkListReportNo: 'GERA53-DFMA-11-C/F', location: 'GERA54', referenceDrawingNo: 'DWG-002', instrumentsUsed: 'Micrometer', moduleConclusion: 'Accept' }
    ]
  },
  'mep-stage-packaging': {
    module: 'MEP',
    stageId: 'packaging',
    stageLabel: 'Packaging',
    viewPageId: 'packaging',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('projectName', 'PROJECT', (p) => v(p.projectName)),
      col('packaging', 'STATUS', (p) => v(p.packaging)),
      col('packageConditionOn', 'PACKAGED ON', (p) => v(p.packageConditionOn))
    ),
    dummyPayloads: [
      { moduleNo: 'GERA53-DFMA-10', projectName: 'GERA5-2', packaging: 'Completed', packageConditionOn: '30-Oct-2025 10:56:20' },
      { moduleNo: 'GERA53-DFMA-12', projectName: 'GERA5-4', packaging: 'Completed', packageConditionOn: '02-Nov-2025 09:12:00' }
    ]
  },
  'mep-stage-production-delivery': {
    module: 'MEP',
    stageId: 'production-delivery',
    stageLabel: 'Delivery',
    viewPageId: 'production-delivery',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('projectName', 'PROJECT', (p) => v(p.projectName)),
      col('locationStatus', 'LOCATION', (p) => v(p.locationStatus)),
      col('defaultLoadOut', 'LOAD OUT', (p) => v(p.defaultLoadOut)),
      col('activity1', 'ACTIVITY 1', (p) => v(p?.activity1?.yes ? 'Yes' : p?.activity1?.no ? 'No' : '-'))
    ),
    dummyPayloads: [
      { moduleNo: 'GE365 DFHA-10', projectName: 'REPN-2', locationStatus: 'TOM-11', defaultLoadOut: '30-Oct-2020 10:58:54', activity1: { yes: true, no: false } },
      { moduleNo: 'GE366 DFHA-12', projectName: 'REPN-3', locationStatus: 'Mega yard', defaultLoadOut: '02-Nov-2020 08:10:00', activity1: { yes: false, no: true } }
    ]
  },
  'mep-stage-anchoring': {
    module: 'MEP',
    stageId: 'anchoring',
    stageLabel: 'Anchoring',
    viewPageId: 'anchoring',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('completionStatus', 'STATUS', (p) => v(p.completionStatus)),
      col('completedOn', 'COMPLETED ON', (p) => v(p.completedOn))
    ),
    dummyPayloads: [
      { moduleNo: 'L14-DFMA-015', completionStatus: 'Completed', completedOn: '2025-11-01' },
      { moduleNo: 'L14-DFMA-016', completionStatus: 'Completed', completedOn: '2025-11-03' }
    ]
  },
  'mep-stage-hoisting': {
    module: 'MEP',
    stageId: 'hoisting',
    stageLabel: 'Hoisting',
    viewPageId: 'hoisting',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('completionStatus', 'STATUS', (p) => v(p.completionStatus)),
      col('completedOn', 'COMPLETED ON', (p) => v(p.completedOn))
    ),
    dummyPayloads: [
      { moduleNo: 'L14-DFMA-015', completionStatus: 'Completed', completedOn: '2025-11-05' },
      { moduleNo: 'L15-DFMA-021', completionStatus: 'Completed', completedOn: '2025-11-06' }
    ]
  },
  'mep-stage-positioning': {
    module: 'MEP',
    stageId: 'positioning',
    stageLabel: 'Positioning',
    viewPageId: 'positioning',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('completionStatus', 'STATUS', (p) => v(p.completionStatus)),
      col('completedOn', 'COMPLETED ON', (p) => v(p.completedOn))
    ),
    dummyPayloads: [
      { moduleNo: 'L14-DFMA-015', completionStatus: 'Completed', completedOn: '2025-11-07' },
      { moduleNo: 'L15-DFMA-021', completionStatus: 'Completed', completedOn: '2025-11-08' }
    ]
  },
  'mep-stage-me-hookup': {
    module: 'MEP',
    stageId: 'me-hookup',
    stageLabel: 'M&E Hookup',
    viewPageId: 'me-hookup',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('completionStatus', 'STATUS', (p) => v(p.completionStatus)),
      col('completedOn', 'COMPLETED ON', (p) => v(p.completedOn))
    ),
    dummyPayloads: [
      { moduleNo: 'L14-DFMA-015', completionStatus: 'Completed', completedOn: '2025-11-09' },
      { moduleNo: 'L15-DFMA-021', completionStatus: 'Completed', completedOn: '2025-11-10' }
    ]
  },
  'mep-stage-installation': {
    module: 'MEP',
    stageId: 'installation',
    stageLabel: 'Installation',
    viewPageId: 'installation',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('checkListNumber', 'CHECKLIST NO', (p) => v(p.checkListNumber)),
      col('dateOfInstallation', 'INSTALL DATE', (p) => v(p.dateOfInstallation)),
      col('location', 'LOCATION', (p) => v(p.location)),
      col('checkedBy', 'CHECKED BY', (p) => v(p.checkedBy))
    ),
    dummyPayloads: [
      { moduleNo: 'L14-DFMA-015', checkListNumber: 'INST-001', dateOfInstallation: '2025-11-02', location: 'Integrated Transport Hub', checkedBy: 'QA-01' },
      { moduleNo: 'L15-DFMA-021', checkListNumber: 'INST-002', dateOfInstallation: '2025-11-04', location: 'Shipyard', checkedBy: 'QA-02' }
    ]
  },
  'mep-stage-final-qa-qc': {
    module: 'MEP',
    stageId: 'final-qa-qc',
    stageLabel: 'Final QA QC',
    viewPageId: 'final-qa-qc',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('completionStatus', 'STATUS', (p) => v(p.completionStatus)),
      col('completedOn', 'COMPLETED ON', (p) => v(p.completedOn)),
      col('checkedBy', 'CHECKED BY', (p) => v(p.checkedBy)),
      col('verifiedBy', 'VERIFIED BY', (p) => v(p.verifiedBy))
    ),
    dummyPayloads: [
      { moduleNo: 'L4-2FMA-016', completionStatus: 'Completed', completedOn: '2025-11-05', checkedBy: 'Inspector A', verifiedBy: 'Supervisor A' },
      { moduleNo: 'L4-2FMA-017', completionStatus: 'Completed', completedOn: '2025-11-06', checkedBy: 'Inspector B', verifiedBy: 'Supervisor B' }
    ]
  }
};

export const plantStageListConfigs = {
  'plant-material-incoming': {
    module: 'Plant',
    stageId: 'plant-material-incoming',
    stageLabel: 'Material Incoming Status',
    viewPageId: 'material-incoming-status',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('poNo', 'PO NO', (p) => v(p.poNo)),
      col('reportDate', 'REPORT DATE', (p) => v(p.reportDate)),
      col('client', 'CLIENT', (p) => v(p.client)),
      col('projectName', 'PROJECT', (p) => v(p.projectName)),
      col('drawingNo', 'DRAWING NO', (p) => v(p.drawingNo))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-01', reportNo: 'TOM-YSE-2024-0002-IIR-001.01A.01B', poNo: 'PO/TOM/66882.00956.06968', reportDate: '24/07/2024', client: 'YSE', projectName: '24-0002/1 YSE Project Sanyu', drawingNo: 'DWG-001-2024' },
      { moduleNo: 'SANYU-CHWP-02', reportNo: 'TOM-YSE-2024-0002-IIR-002.01A.01B', poNo: 'PO/TOM/66882.00956.06969', reportDate: '25/07/2024', client: 'YSE', projectName: '24-0002/1 YSE Project Sanyu', drawingNo: 'DWG-002-2024' }
    ]
  },
  'plant-material-traceability': {
    module: 'Plant',
    stageId: 'plant-material-traceability',
    stageLabel: 'Material Traceability',
    viewPageId: 'material-traceability',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('drawingNo', 'DRAWING NO', (p) => v(p.drawingNo)),
      col('projectNo', 'PROJECT NO', (p) => v(p.projectNo)),
      col('contractor', 'CONTRACTOR', (p) => v(p.contractor))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-IIR-001', dateOfInspection: '2024-07-26', drawingNo: 'SQE-SANYU-CHW-FAB-001', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-IIR-002', dateOfInspection: '2024-07-27', drawingNo: 'SQE-SANYU-CHW-FAB-002', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' }
    ]
  },
  'plant-fit-up': {
    module: 'Plant',
    stageId: 'plant-fit-up',
    stageLabel: 'FIT-Up',
    viewPageId: 'fitup-inspection',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('drawingNo', 'DRAWING NO', (p) => v(p.drawingNo)),
      col('fitUpRevisionNo', 'REVISION', (p) => v(p.fitUpRevisionNo)),
      col('contractor', 'CONTRACTOR', (p) => v(p.contractor))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-FIR-001', dateOfInspection: '2024-07-22', drawingNo: 'SQE-SANYU-CHW-FAB-001', fitUpRevisionNo: '01', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-FIR-002', dateOfInspection: '2024-07-23', drawingNo: 'SQE-SANYU-CHW-FAB-002', fitUpRevisionNo: '01', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' }
    ]
  },
  'plant-visual-inspection': {
    module: 'Plant',
    stageId: 'plant-visual-inspection',
    stageLabel: 'Visual Inspection',
    viewPageId: 'visual-inspection',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('drawingNo', 'DRAWING NO', (p) => v(p.drawingNo)),
      col('projectNo', 'PROJECT NO', (p) => v(p.projectNo)),
      col('contractor', 'CONTRACTOR', (p) => v(p.contractor))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-VIR-001', dateOfInspection: '2024-07-22', drawingNo: 'SQE-SANYU-CHW-FAB-001', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-VIR-002', dateOfInspection: '2024-07-23', drawingNo: 'SQE-SANYU-CHW-FAB-002', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' }
    ]
  },
  'plant-dimensional-inspection': {
    module: 'Plant',
    stageId: 'plant-dimensional-inspection',
    stageLabel: 'Dimensional Inspection',
    viewPageId: 'dimensional-inspection',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('itpNo', 'ITP NO', (p) => v(p.itpNo)),
      col('projectNo', 'PROJECT NO', (p) => v(p.projectNo)),
      col('contractor', 'CONTRACTOR', (p) => v(p.contractor))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-DIR-001', dateOfInspection: '2024-07-22', itpNo: 'TOM-YSE-2024-ITP-02021', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-DIR-002', dateOfInspection: '2024-07-23', itpNo: 'TOM-YSE-2024-ITP-02022', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' }
    ]
  },
  'plant-welding-traceability': {
    module: 'Plant',
    stageId: 'plant-welding-traceability',
    stageLabel: 'Welding Traceability',
    viewPageId: 'welding-traceability',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('drawingNo', 'DRAWING NO', (p) => v(p.drawingNo)),
      col('projectNo', 'PROJECT NO', (p) => v(p.projectNo)),
      col('contractor', 'CONTRACTOR', (p) => v(p.contractor))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-WTR-001', dateOfInspection: '2024-08-16', drawingNo: 'SQE-SANYU-CHW-FAB-001', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-WTR-002', dateOfInspection: '2024-08-17', drawingNo: 'SQE-SANYU-CHW-FAB-002', projectNo: '24-00221', contractor: 'Tech Onshore Mep Prefabricators Pte Ltd' }
    ]
  },
  'plant-mep-components': {
    module: 'Plant',
    stageId: 'plant-mep-components',
    stageLabel: 'MEP Components',
    viewPageId: 'mep-components',
    columns: columns(
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('piping', 'PIPING', (p) => v(p.piping)),
      col('flange', 'FLANGE', (p) => v(p.flange)),
      col('status', 'STATUS', (p) => v(p.status))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', piping: 'Yes', flange: 'No', status: 'Completed' },
      { moduleNo: 'SANYU-CHWP-002', piping: 'No', flange: 'Yes', status: 'Completed' }
    ]
  },
  'plant-hydrostatic-test': {
    module: 'Plant',
    stageId: 'plant-hydrostatic-test',
    stageLabel: 'Hydrostatic Test',
    viewPageId: 'hydrostatic-test',
    columns: columns(
      col('reportNo', 'REPORT NO', (p) => v(p.reportNo)),
      col('moduleNo', 'MODULE NO', (p) => v(p.moduleNo)),
      col('dateOfInspection', 'INSPECTION DATE', (p) => v(p.dateOfInspection)),
      col('itpNo', 'ITP NO', (p) => v(p.itpNo)),
      col('client', 'CLIENT', (p) => v(p.client)),
      col('testResult', 'RESULT', (p) => v(p.testResult))
    ),
    dummyPayloads: [
      { moduleNo: 'SANYU-CHWP-001', reportNo: 'TOM-YSE-2024-00221-HTR-001', dateOfInspection: '2024-09-17', itpNo: 'TOM-YSE-2024-00221 Rev 0', client: 'Yrasmus Engineering Pte Ltd', testResult: 'Acceptable' },
      { moduleNo: 'SANYU-CHWP-002', reportNo: 'TOM-YSE-2024-00221-HTR-002', dateOfInspection: '2024-09-18', itpNo: 'TOM-YSE-2024-00221 Rev 0', client: 'Yrasmus Engineering Pte Ltd', testResult: 'Acceptable' }
    ]
  }
};

export const getStageListRecords = (config) => {
  const submissions = getStageSubmissions({ module: config.module, stageId: config.stageId });
  return withDummy(submissions, config.dummyPayloads, config);
};
