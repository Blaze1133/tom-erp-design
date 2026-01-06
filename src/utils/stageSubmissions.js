const STORAGE_PREFIX = 'stageSubmissions';

const legacyPlantDataKeysByStageId = {
  'plant-material-incoming': 'plantMaterialIncomingData',
  'plant-material-traceability': 'plantMaterialTraceabilityData',
  'plant-fit-up': 'plantFitUpInspectionData',
  'plant-visual-inspection': 'plantVisualInspectionData',
  'plant-dimensional-inspection': 'plantDimensionalInspectionData',
  'plant-welding-traceability': 'plantWeldingTraceabilityData',
  'plant-mep-components': 'plantMEPComponentsData',
  'plant-hydrostatic-test': 'plantHydrostaticTestData'
};

const safeParseJson = (value, fallback) => {
  try {
    if (value == null) return fallback;
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const getStorageKey = ({ module, stageId }) => `${STORAGE_PREFIX}:${module}:${stageId}`;

const getNowIso = () => new Date().toISOString();

const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const extractCommonFields = (payload) => {
  if (!payload || typeof payload !== 'object') return {};

  const projectId =
    payload.projectId ||
    payload.projectNo ||
    payload.projectNumber ||
    payload.project ||
    '';

  const projectName =
    payload.projectName ||
    payload.project ||
    payload.projectTitle ||
    '';

  const moduleNo =
    payload.moduleNo ||
    payload.moduleNumber ||
    payload.module ||
    '';

  const clientName = payload.clientName || payload.client || '';

  const location = payload.location || payload.siteLocation || '';

  const documentNo =
    payload.checkListNo ||
    payload.reportNo ||
    payload.documentNumber ||
    '';

  const date =
    payload.dateOfInspection ||
    payload.reportDate ||
    payload.date ||
    '';

  return {
    projectId,
    projectName,
    moduleNo,
    clientName,
    location,
    documentNo,
    date
  };
};

export const getStageSubmissions = ({ module, stageId }) => {
  const storageKey = getStorageKey({ module, stageId });
  const raw = safeParseJson(localStorage.getItem(storageKey), []);
  const submissions = Array.isArray(raw) ? raw : [];

  if (submissions.length > 0) return submissions;

  const legacyKey = legacyPlantDataKeysByStageId[stageId];
  if (!legacyKey) return submissions;

  const legacyPayload = safeParseJson(localStorage.getItem(legacyKey), null);
  if (!legacyPayload) return submissions;

  return [
    {
      id: `legacy-${generateId()}`,
      module,
      stageId,
      stageLabel: '',
      submittedAt: '',
      ...extractCommonFields(legacyPayload),
      payload: legacyPayload
    }
  ];
};

export const addStageSubmission = ({ module, stageId, stageLabel, payload }) => {
  const storageKey = getStorageKey({ module, stageId });
  const existing = safeParseJson(localStorage.getItem(storageKey), []);
  const submissions = Array.isArray(existing) ? existing : [];

  const submission = {
    id: generateId(),
    module,
    stageId,
    stageLabel: stageLabel || '',
    submittedAt: getNowIso(),
    ...extractCommonFields(payload),
    payload
  };

  const next = [submission, ...submissions].slice(0, 500);
  localStorage.setItem(storageKey, JSON.stringify(next));

  return submission;
};

export const addStageSubmissions = ({ module, stageId, stageLabel, payloads }) => {
  if (!Array.isArray(payloads) || payloads.length === 0) return [];
  return payloads.map((payload) => addStageSubmission({ module, stageId, stageLabel, payload }));
};

export const clearStageSubmissions = ({ module, stageId }) => {
  localStorage.removeItem(getStorageKey({ module, stageId }));
};

