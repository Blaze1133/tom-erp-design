import React from 'react';

/**
 * TableRowActions Component
 * 
 * A reusable component that provides hoverable action buttons for table rows
 * with Insert Above, Insert Below, and Delete Row functionality.
 * 
 * Usage:
 * 1. Import this component
 * 2. Add state management for hoveredRow, activeMenu, and menuPosition
 * 3. Add useEffect hook for click-outside handling
 * 4. Render this component in your table row's first <td>
 * 
 * Example:
 * 
 * const [hoveredRow, setHoveredRow] = useState(null);
 * const [activeMenu, setActiveMenu] = useState(null);
 * const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
 * 
 * // Close menu when clicking outside
 * React.useEffect(() => {
 *   const handleClickOutside = () => {
 *     if (activeMenu !== null) {
 *       setActiveMenu(null);
 *     }
 *   };
 *   if (activeMenu !== null) {
 *     document.addEventListener('click', handleClickOutside);
 *     return () => document.removeEventListener('click', handleClickOutside);
 *   }
 * }, [activeMenu]);
 * 
 * // Handler functions
 * const handleMenuToggle = (index, event) => {
 *   event.stopPropagation();
 *   if (activeMenu === index) {
 *     setActiveMenu(null);
 *   } else {
 *     const button = event.currentTarget;
 *     const rect = button.getBoundingClientRect();
 *     setMenuPosition({
 *       top: rect.bottom + 5,
 *       left: rect.left + (rect.width / 2) - 80
 *     });
 *     setActiveMenu(index);
 *   }
 * };
 * 
 * const handleInsertAbove = (index) => {
 *   const newItem = { id: Date.now(), ...defaultItemFields };
 *   const newItems = [...items.slice(0, index), newItem, ...items.slice(index)];
 *   setItems(newItems);
 * };
 * 
 * const handleInsertBelow = (index) => {
 *   const newItem = { id: Date.now(), ...defaultItemFields };
 *   const newItems = [...items.slice(0, index + 1), newItem, ...items.slice(index + 1)];
 *   setItems(newItems);
 * };
 * 
 * const handleDeleteRow = (index) => {
 *   if (window.confirm('Are you sure you want to delete this row?')) {
 *     setItems(items.filter((_, i) => i !== index));
 *   }
 * };
 * 
 * // In your table row:
 * <tr
 *   onMouseEnter={() => setHoveredRow(index)}
 *   onMouseLeave={() => setHoveredRow(null)}
 * >
 *   <TableRowActions
 *     index={index}
 *     hoveredRow={hoveredRow}
 *     activeMenu={activeMenu}
 *     menuPosition={menuPosition}
 *     onMenuToggle={handleMenuToggle}
 *     onInsertAbove={handleInsertAbove}
 *     onInsertBelow={handleInsertBelow}
 *     onDeleteRow={handleDeleteRow}
 *   />
 *   ... rest of your table cells ...
 * </tr>
 */

const TableRowActions = ({
  index,
  hoveredRow,
  activeMenu,
  menuPosition,
  onMenuToggle,
  onInsertAbove,
  onInsertBelow,
  onDeleteRow
}) => {
  return (
    <td style={{ textAlign: 'center', position: 'relative' }}>
      {hoveredRow === index && (
        <button 
          className="row-actions-btn"
          title="Row Actions"
          onClick={(e) => onMenuToggle(index, e)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
      )}
      {activeMenu === index && (
        <div 
          className="row-actions-menu"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: 'block'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => {
            onInsertAbove(index);
          }}>
            <i className="fas fa-arrow-up"></i>
            Insert Above
          </button>
          <button onClick={() => {
            onInsertBelow(index);
          }}>
            <i className="fas fa-arrow-down"></i>
            Insert Below
          </button>
          <button onClick={() => {
            onDeleteRow(index);
          }} className="delete-action">
            <i className="fas fa-trash"></i>
            Delete Row
          </button>
        </div>
      )}
    </td>
  );
};

export default TableRowActions;
