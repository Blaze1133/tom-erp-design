import React, { useState } from 'react';
import './Enquiries.css';

/**
 * ReusableDetailView Component
 * 
 * A highly reusable detail/view screen component that matches the quotation detail design.
 * All styling, fields, sections, and actions are configurable through props.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (e.g., "Quotation", "Sales Order")
 * @param {string} props.icon - Font Awesome icon class (e.g., "fas fa-file-invoice")
 * @param {string} props.iconColor - Icon color (default: "#4a90e2")
 * @param {Array} props.subtitle - Array of subtitle items [{text: "Q21TOM00025", badge: false}, {text: "EXPIRED", badge: true, badgeColor: "#f44336"}]
 * @param {Array} props.headerActions - Array of header action buttons [{icon: "fas fa-arrow-left", label: "", onClick: fn}, ...]
 * @param {Array} props.toolbarButtons - Array of toolbar buttons [{icon: "fas fa-edit", label: "Edit", primary: true, onClick: fn}, ...]
 * @param {boolean} props.showActionsDropdown - Show actions dropdown in toolbar (default: false)
 * @param {Array} props.sections - Array of section configurations (see Section Configuration below)
 * @param {Array} props.tabs - Array of tab configurations (see Tab Configuration below)
 * @param {Array} props.footerButtons - Array of footer buttons [{icon: "fas fa-edit", label: "Edit", primary: true, onClick: fn}, ...]
 * @param {Function} props.onToast - Callback for toast notifications (message, type)
 * @param {ReactNode} props.children - Additional custom content
 */
const ReusableDetailView = ({
  // Header props
  title = "Detail View",
  icon = "fas fa-file",
  iconColor = "#4a90e2",
  subtitle = [],
  headerActions = [
    { icon: "fas fa-arrow-left", label: "", onClick: null },
    { icon: "fas fa-arrow-right", label: "", onClick: null },
    { label: "List", onClick: null },
    { label: "Search", onClick: null },
    { label: "Customize", onClick: null }
  ],

  // Toolbar props
  toolbarButtons = [
    { icon: "fas fa-edit", label: "Edit", primary: true, onClick: null },
    { icon: "fas fa-arrow-left", label: "Back", onClick: null },
    { icon: "fas fa-print", label: "Print", onClick: null },
    { icon: "fas fa-copy", label: "Copy", onClick: null }
  ],
  showActionsDropdown = false,

  // Content props
  sections = [],
  tabs = [],

  // Footer props
  footerButtons = [],

  // Additional props
  className = "",
  children
}) => {
  const [collapsedSections, setCollapsedSections] = useState({});
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].key : '');

  const toggleSection = (sectionKey) => {
    setCollapsedSections({
      ...collapsedSections,
      [sectionKey]: !collapsedSections[sectionKey]
    });
  };

  const renderField = (field) => {
    if (field.type === 'custom' && field.render) {
      return field.render(field.value);
    }

    let displayValue = field.value;

    // Handle different field types
    if (field.type === 'currency' && typeof field.value === 'number') {
      displayValue = `$${field.value.toFixed(2)}`;
    } else if (field.type === 'percentage' && typeof field.value === 'number') {
      displayValue = `${field.value}%`;
    } else if (field.type === 'date' && field.value) {
      displayValue = field.value;
    } else if (field.type === 'badge') {
      return (
        <span 
          className="status-badge" 
          style={field.badgeStyle || {}}
        >
          {field.value}
        </span>
      );
    } else if (!field.value && field.value !== 0) {
      displayValue = '-';
    }

    return <div className="field-value">{displayValue}</div>;
  };

  const renderSection = (section) => {
    const isCollapsed = collapsedSections[section.key];

    return (
      <div 
        key={section.key}
        className={`detail-section ${isCollapsed ? 'collapsed' : ''}`}
      >
        <div 
          className="section-header" 
          onClick={() => section.collapsible !== false && toggleSection(section.key)}
          style={{ cursor: section.collapsible !== false ? 'pointer' : 'default' }}
        >
          {section.collapsible !== false && <i className="fas fa-chevron-down"></i>}
          <h3>{section.title}</h3>
        </div>
        <div className="section-body">
          {section.customContent ? (
            section.customContent
          ) : (
            <div className="detail-grid" style={section.gridStyle || {}}>
              {section.fields && section.fields.map((field, index) => (
                <div 
                  key={index} 
                  className="detail-field"
                  style={field.style || {}}
                >
                  <label>{field.label}</label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTabContent = (tab) => {
    if (tab.customContent) {
      return tab.customContent;
    }

    if (tab.type === 'table' && tab.data) {
      return (
        <div className="items-table-wrapper">
          <table className="detail-items-table">
            <thead>
              <tr>
                {tab.columns.map((column, index) => (
                  <th key={index}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tab.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {tab.columns.map((column, colIndex) => (
                    <td key={colIndex}>
                      {column.render 
                        ? column.render(row[column.key], row)
                        : row[column.key] || '-'
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary Section */}
          {tab.summary && (
            <div className="summary-grid" style={{ marginTop: '2rem' }}>
              {tab.summary.map((summaryItem, index) => (
                <div 
                  key={index}
                  className="summary-card"
                  style={summaryItem.style || {}}
                >
                  <div className="summary-title">{summaryItem.label}</div>
                  <div 
                    className="summary-value"
                    style={summaryItem.valueStyle || {}}
                  >
                    {summaryItem.render 
                      ? summaryItem.render(summaryItem.value)
                      : summaryItem.value
                    }
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (tab.type === 'empty') {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
          <p>{tab.emptyMessage || 'No data available'}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`enquiry-detail ${className}`}>
      {/* Header */}
      <div className="detail-header">
        <div className="detail-title">
          <i className={icon} style={{ color: iconColor }}></i>
          <div>
            <h1>{title}</h1>
            {subtitle.length > 0 && (
              <div className="detail-subtitle">
                {subtitle.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.badge ? (
                      <span 
                        className="status-badge-detail" 
                        style={item.badgeStyle || { background: item.badgeColor || '#4caf50' }}
                      >
                        {item.text}
                      </span>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="detail-actions">
          {headerActions.map((action, index) => (
            <button 
              key={index}
              className="btn-action"
              onClick={action.onClick}
              disabled={!action.onClick}
            >
              {action.icon && <i className={action.icon}></i>}
              {action.label && <span>{action.label}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="detail-toolbar">
        {toolbarButtons.map((button, index) => (
          <button 
            key={index}
            className={button.primary ? "btn-toolbar-primary" : "btn-toolbar"}
            onClick={button.onClick}
            disabled={!button.onClick}
          >
            {button.icon && <i className={button.icon}></i>}
            {button.label}
          </button>
        ))}
        {showActionsDropdown && (
          <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
            <button className="btn-toolbar">
              <i className="fas fa-cog"></i>
              Actions
              <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="detail-content">
        {/* Sections */}
        {sections.map(section => renderSection(section))}

        {/* Tabs */}
        {tabs.length > 0 && (
          <div className="detail-tabs">
            <div className="tabs-header">
              {tabs.map((tab) => (
                <button 
                  key={tab.key}
                  className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tabs-content">
              {tabs.map((tab) => (
                <div 
                  key={tab.key}
                  style={{ display: activeTab === tab.key ? 'block' : 'none' }}
                >
                  {renderTabContent(tab)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom children content */}
        {children}

        {/* Footer Buttons */}
        {footerButtons.length > 0 && (
          <div className="detail-footer-actions">
            {footerButtons.map((button, index) => (
              <button 
                key={index}
                className={button.primary ? "btn-toolbar-primary" : "btn-toolbar"}
                onClick={button.onClick}
                disabled={!button.onClick}
              >
                {button.icon && <i className={button.icon}></i>}
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableDetailView;
