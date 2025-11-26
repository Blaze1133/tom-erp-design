import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';
import './WorkshopDashboard.css';

const WorkshopDashboard = ({ onModuleClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedPriority, setSelectedPriority] = useState('all');

  // Module data structure - each module has a status (empty, in-progress, completed)
  const [modules, setModules] = useState([
    // LINE-1
    { line: 'LINE-1', position: 'A', code: 'TSAVC L3-DFMA-06', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'B', code: 'TSAVC L3-DFMA-07', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'C', code: 'TSAVC L3-DFMA-08', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'D', code: 'TSAVC L3-DFMA-06', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'E', code: 'TSAVC L4-DFMA-07', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'F', code: 'TSAVC L4-DFMA-08', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-1', position: 'G', code: 'TSAVC D L03-DFMA-01', priority: 'first', status: 'in-progress', progress: '100.00%' },
    
    // LINE-2
    { line: 'LINE-2', position: 'A', code: 'L14-DFMA-010', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'B', code: 'L14-DFMA-017', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'C', code: 'L14-DFMA-016', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'D', code: 'L14-DFMA-017', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'E', code: 'L14-DFMA-017', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'F', code: 'L14-DFMA-021', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-2', position: 'G', code: 'L14-DFMA-021', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'D' },
    
    // LINE-3
    { line: 'LINE-3', position: 'A', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'B', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'C', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'D', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'E', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'F', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    { line: 'LINE-3', position: 'G', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    
    // LINE-4
    { line: 'LINE-4', position: 'A', code: 'GERAS-CNC-01', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-4', position: 'B', code: 'GERAS-CNC-02', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-4', position: 'C', code: 'GERAS-CNC-02', priority: 'first', status: 'in-progress', progress: '23.97%' },
    { line: 'LINE-4', position: 'D', code: 'GERAS-CNC-04', priority: 'first', status: 'in-progress', progress: '100.00%' },
    { line: 'LINE-4', position: 'E', code: 'GERAS-CNC-07', priority: 'first', status: 'in-progress', progress: '67.45%' },
    { line: 'LINE-4', position: 'F', code: 'GERAS-CNC-06', priority: 'first', status: 'in-progress', progress: '67.45%' },
    { line: 'LINE-4', position: 'G', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    
    // LINE-5
    { line: 'LINE-5', position: 'A', code: 'GERA L1-DFMA-01', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'B', code: 'GERA L1-DFMA-02', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'C', code: 'GERA L1-DFMA-02', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'D', code: 'GERA L1-DFMA-04', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'E', code: 'GERA L1-DFMA-07', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'F', code: 'GERA L1-DFMA-06', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-5', position: 'G', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    
    // LINE-6
    { line: 'LINE-6', position: 'A', code: 'GERA L1-DFMA-01', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'B', code: 'GERA L1-DFMA-02', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'C', code: 'GERA L1-DFMA-02', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'D', code: 'GERA L1-DFMA-04', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'E', code: 'GERA L1-DFMA-07', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'F', code: 'GERA L1-DFMA-06', priority: 'first', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-6', position: 'G', code: 'EMPTY', priority: 'first', status: 'empty', progress: '' },
    
    // LINE-7
    { line: 'LINE-7', position: 'A', code: 'EMPTY', priority: 'second', status: 'empty', progress: '' },
    { line: 'LINE-7', position: 'B', code: 'EMPTY', priority: 'second', status: 'empty', progress: '' },
    { line: 'LINE-7', position: 'C', code: 'EMPTY', priority: 'second', status: 'empty', progress: '' },
    { line: 'LINE-7', position: 'D', code: 'CFC- L14-DFMA-25', priority: 'second', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-7', position: 'E', code: 'CFC- L14-DFMA-26', priority: 'second', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-7', position: 'F', code: 'LOB- CFC-04', priority: 'second', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-7', position: 'G', code: 'EMPTY', priority: 'second', status: 'empty', progress: '' },
    
    // LINE-8
    { line: 'LINE-8', position: 'A', code: 'TSAVC-L2-DFMA-02', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-8', position: 'B', code: 'TSAVC-L2-DFMA-03', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-8', position: 'C', code: 'TSAVC-L2-DFMA-04', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-8', position: 'D', code: 'TSAVC-L2-DFMA-05', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'I' },
    { line: 'LINE-8', position: 'E', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    { line: 'LINE-8', position: 'F', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    { line: 'LINE-8', position: 'G', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    
    // LINE-9
    { line: 'LINE-9', position: 'A', code: 'BLK02 D L03-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'B', code: 'BLK02 D L03-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'C', code: 'BLK02 D L04-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'D', code: 'BLK02 D L05-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'E', code: 'BLK03 D L06-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'F', code: 'BLK03 D L07-01', priority: 'third', status: 'in-progress', progress: '100.00%', tag: 'D' },
    { line: 'LINE-9', position: 'G', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    
    // LINE-10
    { line: 'LINE-10', position: 'A', code: 'BLK05-L02-01', priority: 'third', status: 'completed', progress: '100.00%' },
    { line: 'LINE-10', position: 'B', code: 'BLK05-L03-01', priority: 'third', status: 'completed', progress: '100.00%' },
    { line: 'LINE-10', position: 'C', code: 'BLK05-L04-01', priority: 'third', status: 'completed', progress: '100.00%' },
    { line: 'LINE-10', position: 'D', code: 'BLK05-L05-01', priority: 'third', status: 'completed', progress: '100.00%' },
    { line: 'LINE-10', position: 'E', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    { line: 'LINE-10', position: 'F', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
    { line: 'LINE-10', position: 'G', code: 'EMPTY', priority: 'third', status: 'empty', progress: '' },
  ]);

  const lines = ['LINE-1', 'LINE-2', 'LINE-3', 'LINE-4', 'LINE-5', 'LINE-6', 'LINE-7', 'LINE-8', 'LINE-9', 'LINE-10'];
  const positions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getModuleByLineAndPosition = (line, position) => {
    return modules.find(m => m.line === line && m.position === position);
  };

  const handleModuleClick = (module) => {
    if (module) {
      if (onModuleClick) {
        onModuleClick(module);
      }
    }
  };

  const getModuleClassName = (module) => {
    if (!module) return 'module-cell empty';
    
    let className = 'module-cell';
    
    if (module.status === 'empty') {
      className += ' empty';
    } else if (module.status === 'completed') {
      className += ' completed';
    } else if (module.status === 'in-progress') {
      className += ' in-progress';
    }
    
    return className;
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'first': return '#ff9800';
      case 'second': return '#ffc107';
      case 'third': return '#4caf50';
      default: return '#e0e0e0';
    }
  };

  const totalModules = modules.length;
  const filledModules = modules.filter(m => m.status !== 'empty').length;

  return (
    <div className="workshop-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <i className="fas fa-industry" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>TOM Workshop</h1>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-success">
            <i className="fas fa-print"></i>
            Print
          </button>
        </div>
      </div>

      <div className="dashboard-info-bar">
        <div className="info-content">
          No of Modules in Dashboard : {totalModules}
        </div>
      </div>

      <div className="priority-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#ff9800' }}></span>
          <span>First Priority</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#ffc107' }}></span>
          <span>Second Priority</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span>
          <span>Third Priority</span>
        </div>
      </div>

      <div className="module-grid-container">
        <table className="module-grid">
          <thead>
            <tr>
              <th className="position-header"></th>
              {lines.map(line => (
                <th key={line} className="line-header">{line}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {positions.map(position => (
              <tr key={position}>
                <td className="position-label">{position}</td>
                {lines.map(line => {
                  const module = getModuleByLineAndPosition(line, position);
                  return (
                    <td 
                      key={`${line}-${position}`} 
                      className={getModuleClassName(module)}
                      onClick={() => handleModuleClick(module)}
                      style={{
                        cursor: 'pointer',
                        borderTop: module && module.priority ? `4px solid ${getPriorityColor(module.priority)}` : 'none'
                      }}
                    >
                      {module && module.code !== 'EMPTY' && (
                        <div className="module-content">
                          {module.tag && (
                            <span className="module-tag">{module.tag}</span>
                          )}
                          <div className="module-code">{module.code}</div>
                          {module.progress && (
                            <div className="module-progress">{module.progress}</div>
                          )}
                        </div>
                      )}
                      {module && module.code === 'EMPTY' && (
                        <div className="module-content">
                          <div className="module-code empty-text">EMPTY</div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
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

export default WorkshopDashboard;
