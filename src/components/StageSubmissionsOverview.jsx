import React, { useMemo } from 'react';
import './Enquiries.css';
import { getStageListRecords } from '../constants/stageListConfigs';

const StageSubmissionsOverview = ({ title, configs, setCurrentPage }) => {
  const items = useMemo(() => {
    return configs.map((c) => ({
      pageId: c.pageId,
      label: c.stageLabel,
      count: getStageListRecords(c).length
    }));
  }, [configs]);

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
      </div>

      <div style={{ padding: '1rem 0', color: '#6b7280' }}>
        Select a stage to view consolidated submitted records across projects.
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>STAGE</th>
              <th>RECORDS</th>
              <th>OPEN</th>
            </tr>
          </thead>
          <tbody>
            {items.map((s) => (
              <tr key={s.pageId}>
                <td><strong>{s.label}</strong></td>
                <td>{s.count}</td>
                <td>
                  <button className="view-link" onClick={() => setCurrentPage(s.pageId)}>View List</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StageSubmissionsOverview;
