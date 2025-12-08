import React, { useState, useRef, useEffect } from 'react';
import './SearchableDropdown.css';

/**
 * Reusable Searchable Dropdown Component
 * @param {Array} options - Array of options to display
 * @param {string} value - Currently selected value
 * @param {function} onChange - Callback function when value changes
 * @param {string} placeholder - Placeholder text
 * @param {string} label - Label for the dropdown
 * @param {boolean} required - Whether the field is required
 * @param {string} className - Additional CSS classes
 */
const SearchableDropdown = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select or search...', 
  label = '',
  required = false,
  className = '',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef(null);

  // Filter options based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [searchTerm, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  return (
    <div className={`searchable-dropdown ${className}`} ref={dropdownRef}>
      {label && (
        <label className="searchable-dropdown-label">
          {label}
          {required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
        </label>
      )}
      <div className="searchable-dropdown-container">
        <div 
          className={`searchable-dropdown-input ${disabled ? 'disabled' : ''}`}
          onClick={handleInputClick}
        >
          <input
            type="text"
            value={isOpen ? searchTerm : value}
            onChange={handleSearchChange}
            placeholder={placeholder}
            className="searchable-dropdown-field"
            disabled={disabled}
            readOnly={!isOpen}
          />
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} searchable-dropdown-icon`}></i>
        </div>
        
        {isOpen && (
          <div className="searchable-dropdown-menu">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={`searchable-dropdown-item ${value === option ? 'selected' : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="searchable-dropdown-item no-results">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableDropdown;
