import React, { useEffect, useMemo, useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';
import { getStageListRecords } from '../constants/stageListConfigs';

const StageSubmissionsList = ({ config, setCurrentPage, returnPageId }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [records, setRecords] = useState([]);

  const load = () => {
    try {
      setRecords(getStageListRecords(config));
    } catch (error) {
      setRecords([]);
      setToast({ show: true, message: `Failed to load records: ${error?.message || error}`, type: 'error' });
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.module, config?.stageId]);

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return records;

    return records.filter((r) => {
      const payload = r.payload || {};
      const haystack = [
        r.source,
        r.submittedAt,
        ...config.columns.map((c) => String(c.getValue(payload) ?? ''))
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [searchTerm, records, config.columns]);

  const title = `${config.module} Stages - ${config.stageLabel}`;

  const handleView = (record) => {
    if (!setCurrentPage) return;

    sessionStorage.setItem(
      'stageViewContext',
      JSON.stringify({
        page: config.viewPageId,
        viewOnly: true,
        data: record.payload || {},
        returnPageId: returnPageId || ''
      })
    );

    setCurrentPage(config.viewPageId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-layer-group"></i>
          <h1>{title}</h1>
          <span style={{ marginLeft: '1rem', padding: '0.35rem 0.85rem', background: '#6b7280', color: 'white', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
            VIEW ONLY
          </span>
        </div>
        <div className="list-actions">
          <button className="btn-view-option" onClick={load}>Refresh</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>SEARCH</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '320px' }}
            placeholder="Search project/module/client..."
          />
        </div>
        <div className="list-total">
          TOTAL: {filtered.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>VIEW</th>
              {config.columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={config.columns.length + 1} style={{ padding: '1.25rem', color: '#6b7280' }}>
                  No submissions found for this stage.
                </td>
              </tr>
            ) : (
              filtered.map((r) => (
                <tr key={r.id}>
                  <td>
                    <button className="view-link" onClick={() => handleView(r)}>View</button>
                  </td>
                  {config.columns.map((c) => (
                    <td key={c.key}>{c.getValue(r.payload || {})}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default StageSubmissionsList;
