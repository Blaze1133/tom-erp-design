import React, { useState } from 'react';
import SearchableDropdown from './SearchableDropdown';
import { CLASS_OPTIONS, DEPARTMENT_OPTIONS } from '../constants/dropdownOptions';

/**
 * Example component demonstrating how to use SearchableDropdown
 * Replace regular dropdowns with this implementation across all screens
 */
const SearchableDropdownExample = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleClassChange = (value) => {
    setSelectedClass(value);
    console.log('Selected Class:', value);
  };

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    console.log('Selected Department:', value);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Searchable Dropdown Example</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Use these searchable dropdowns for Class and Department fields across all screens
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* Class Dropdown */}
        <SearchableDropdown
          label="CLASS"
          options={CLASS_OPTIONS}
          value={selectedClass}
          onChange={handleClassChange}
          placeholder="Select or search class..."
          required={true}
        />

        {/* Department Dropdown */}
        <SearchableDropdown
          label="DEPARTMENT"
          options={DEPARTMENT_OPTIONS}
          value={selectedDepartment}
          onChange={handleDepartmentChange}
          placeholder="Select or search department..."
          required={true}
        />
      </div>

      {/* Display selected values */}
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '0.5rem' }}>Selected Values:</h3>
        <p style={{ margin: '0.25rem 0', fontSize: '13px' }}>
          <strong>Class:</strong> {selectedClass || 'None'}
        </p>
        <p style={{ margin: '0.25rem 0', fontSize: '13px' }}>
          <strong>Department:</strong> {selectedDepartment || 'None'}
        </p>
      </div>

      {/* Usage Instructions */}
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e3f2fd', borderRadius: '4px', borderLeft: '4px solid #1976d2' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '0.5rem', color: '#1976d2' }}>
          How to Replace Existing Dropdowns:
        </h3>
        <ol style={{ fontSize: '13px', color: '#333', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
          <li>Import SearchableDropdown and options:
            <pre style={{ background: '#fff', padding: '0.5rem', borderRadius: '4px', marginTop: '0.5rem', overflow: 'auto' }}>
{`import SearchableDropdown from './SearchableDropdown';
import { CLASS_OPTIONS, DEPARTMENT_OPTIONS } from '../constants/dropdownOptions';`}
            </pre>
          </li>
          <li>Replace existing dropdown with SearchableDropdown:
            <pre style={{ background: '#fff', padding: '0.5rem', borderRadius: '4px', marginTop: '0.5rem', overflow: 'auto' }}>
{`<SearchableDropdown
  label="CLASS"
  options={CLASS_OPTIONS}
  value={formData.class}
  onChange={(value) => setFormData({...formData, class: value})}
  placeholder="Select or search class..."
  required={true}
/>`}
            </pre>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SearchableDropdownExample;
