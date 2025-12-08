import React, { useState } from 'react';
import './Enquiries.css';

/**
 * ReusableListView Component
 * 
 * A highly reusable list view component that matches the quotations list design.
 * All styling, fields, and actions are configurable through props.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (e.g., "Quotations")
 * @param {string} props.icon - Font Awesome icon class (e.g., "fas fa-file-invoice")
 * @param {string} props.iconColor - Icon color (default: "#4a90e2")
 * @param {Array} props.viewOptions - Array of view option buttons [{label: "List", active: true}, ...]
 * @param {Function} props.onViewOptionClick - Callback when view option is clicked (label)
 * @param {string} props.viewFilterLabel - Label for view filter (default: "VIEW:")
 * @param {Array} props.viewFilterOptions - Array of filter options [{value: "all", label: "Search Project"}, ...]
 * @param {string} props.defaultViewFilter - Default selected filter value
 * @param {Function} props.onViewFilterChange - Callback when view filter changes (value)
 * @param {string} props.newButtonLabel - Label for new button (e.g., "New Quotation")
 * @param {string} props.newButtonIcon - Icon for new button (default: "fas fa-plus")
 * @param {Function} props.onNewClick - Callback when new button is clicked
 * @param {Array} props.toolbarButtons - Array of toolbar buttons [{icon: "fas fa-edit", label: "EDIT", onClick: fn}, ...]
 * @param {string} props.sortLabel - Label for sort dropdown (default: "QUICK SORT:")
 * @param {Array} props.sortOptions - Array of sort options [{value: "date", label: "7/1/2022 — 31/1/2022"}, ...]
 * @param {string} props.defaultSortOption - Default selected sort value
 * @param {Function} props.onSortChange - Callback when sort changes (value)
 * @param {Array} props.columns - Array of column definitions [{key: "date", label: "DATE", width: "auto"}, ...]
 * @param {Array} props.data - Array of data objects to display
 * @param {Function} props.renderCell - Custom cell renderer (row, column) => ReactNode
 * @param {Function} props.onEdit - Callback when edit is clicked (row)
 * @param {Function} props.onView - Callback when view is clicked (row)
 * @param {boolean} props.showCheckbox - Show checkbox column (default: true)
 * @param {Function} props.onRowSelect - Callback when row is selected (row, isSelected)
 * @param {Array} props.selectedRows - Array of selected row IDs
 * @param {string} props.totalLabel - Label for total count (default: "TOTAL:")
 */
const ReusableListView = ({
  // Header props
  title = "List View",
  icon = "fas fa-list",
  iconColor = "#4a90e2",
  viewOptions = [
    { label: "List", active: true },
    { label: "Search", active: false },
    { label: "Audit Trail", active: false }
  ],
  onViewOptionClick,

  // Filter props
  viewFilterLabel = "VIEW:",
  viewFilterOptions = [{ value: "all", label: "All Items" }],
  defaultViewFilter = "all",
  onViewFilterChange,

  // New button props
  newButtonLabel = "New Item",
  newButtonIcon = "fas fa-plus",
  onNewClick,

  // Toolbar props
  toolbarButtons = [
    { icon: "fas fa-edit", label: "EDIT" },
    { icon: "fas fa-times", label: "" },
    { icon: "fas fa-paperclip", label: "" },
    { icon: "fas fa-print", label: "" }
  ],

  // Sort props
  sortLabel = "QUICK SORT:",
  sortOptions = [{ value: "default", label: "Default" }],
  defaultSortOption = "default",
  onSortChange,

  // Table props
  columns = [],
  data = [],
  renderCell,
  onEdit,
  onView,
  showCheckbox = true,
  onRowSelect,
  selectedRows = [],

  // Total props
  totalLabel = "TOTAL:",
  customTotal,

  // Additional props
  className = "",
  children
}) => {
  const [viewFilter, setViewFilter] = useState(defaultViewFilter);
  const [sortOption, setSortOption] = useState(defaultSortOption);
  const [activeViewOption, setActiveViewOption] = useState(
    viewOptions.find(opt => opt.active)?.label || viewOptions[0]?.label
  );

  const handleViewFilterChange = (e) => {
    const value = e.target.value;
    setViewFilter(value);
    if (onViewFilterChange) {
      onViewFilterChange(value);
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  const handleViewOptionClick = (label) => {
    setActiveViewOption(label);
    if (onViewOptionClick) {
      onViewOptionClick(label);
    }
  };

  const handleRowSelect = (row, isSelected) => {
    if (onRowSelect) {
      onRowSelect(row, isSelected);
    }
  };

  const isRowSelected = (row) => {
    if (!row.id) return false;
    return selectedRows.includes(row.id);
  };

  const defaultRenderCell = (row, column) => {
    const value = row[column.key];
    
    // Handle special column types
    if (column.key === 'editView') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {onEdit && (
            <>
              <button 
                className="view-link"
                onClick={() => onEdit(row)}
              >
                Edit
              </button>
              <span style={{ color: '#999' }}>|</span>
            </>
          )}
          {onView && (
            <button 
              className="view-link"
              onClick={() => onView(row)}
            >
              View
            </button>
          )}
        </div>
      );
    }

    if (column.type === 'badge') {
      return (
        <span 
          className="status-badge" 
          style={column.badgeStyle ? column.badgeStyle(value, row) : {}}
        >
          {value}
        </span>
      );
    }

    if (column.type === 'amount' || column.type === 'number') {
      return (
        <span className="amount">
          {typeof value === 'number' 
            ? value.toLocaleString('en-US', { minimumFractionDigits: 2 })
            : value || '-'}
        </span>
      );
    }

    if (column.type === 'link') {
      return <span className="doc-number">{value || '-'}</span>;
    }

    return value || '-';
  };

  const cellRenderer = renderCell || defaultRenderCell;

  return (
    <div className={`enquiries-list ${className}`}>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title">
          <i className={icon} style={{ fontSize: '24px', color: iconColor }}></i>
          <h1>{title}</h1>
        </div>
        <div className="page-actions">
          {viewOptions.map((option, index) => (
            <button 
              key={index}
              className={`btn-view-option ${activeViewOption === option.label ? 'active' : ''}`}
              onClick={() => handleViewOptionClick(option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* List Controls */}
      <div className="list-controls">
        <div className="view-filter">
          <label>{viewFilterLabel}</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={handleViewFilterChange}
          >
            {viewFilterOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {onNewClick && (
          <button className="btn-new-transaction" onClick={onNewClick}>
            <i className={newButtonIcon}></i> {newButtonLabel}
          </button>
        )}
      </div>

      {/* List Filters/Toolbar */}
      <div className="list-filters">
        <div className="list-toolbar">
          {toolbarButtons.map((button, index) => (
            <button 
              key={index}
              className="toolbar-btn" 
              title={button.label}
              onClick={button.onClick}
            >
              <i className={button.icon}></i> {button.label}
            </button>
          ))}
        </div>
        <div className="list-sort">
          <label>{sortLabel}</label>
          <select 
            className="form-control"
            value={sortOption}
            onChange={handleSortChange}
          >
            {sortOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="list-total">
          {totalLabel} {customTotal !== undefined ? customTotal : data.length}
        </div>
      </div>

      {/* Table */}
      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              {showCheckbox && <th></th>}
              {columns.map((column, index) => (
                <th 
                  key={index}
                  style={{ width: column.width || 'auto' }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td 
                  colSpan={columns.length + (showCheckbox ? 1 : 0)}
                  style={{ textAlign: 'center', padding: '2rem', color: '#999' }}
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={row.id || rowIndex}>
                  {showCheckbox && (
                    <td>
                      <input 
                        type="checkbox"
                        checked={isRowSelected(row)}
                        onChange={(e) => handleRowSelect(row, e.target.checked)}
                      />
                    </td>
                  )}
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>
                      {cellRenderer(row, column)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Custom children content */}
      {children}
    </div>
  );
};

export default ReusableListView;
