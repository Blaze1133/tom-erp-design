# Reusable List View Component Guide

## Overview
The `ReusableListView` component is a highly configurable list view component that provides a consistent design across the application. It's based on the quotations list view design and can be reused for any list-based interface.

## Location
- **Component**: `src/components/ReusableListView.jsx`
- **Example**: `src/components/ReusableListViewExample.jsx`
- **Styles**: Uses `src/components/Enquiries.css`

## Features
- ✅ Fully configurable through props
- ✅ No hardcoded values
- ✅ Consistent styling across the application
- ✅ Support for custom cell rendering
- ✅ Built-in checkbox selection
- ✅ Toolbar with action buttons
- ✅ Filtering and sorting
- ✅ Badge/status display
- ✅ Edit/View actions
- ✅ Responsive table layout

## Basic Usage

```jsx
import ReusableListView from './ReusableListView';

const MyListComponent = () => {
  const columns = [
    { key: 'editView', label: 'EDIT | VIEW' },
    { key: 'date', label: 'DATE' },
    { key: 'name', label: 'NAME' }
  ];

  const data = [
    { id: 1, date: '7/1/2022', name: 'Item 1' },
    { id: 2, date: '7/2/2022', name: 'Item 2' }
  ];

  return (
    <ReusableListView
      title="My List"
      icon="fas fa-list"
      columns={columns}
      data={data}
      onEdit={(row) => console.log('Edit', row)}
      onView={(row) => console.log('View', row)}
    />
  );
};
```

## Props Reference

### Header Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "List View" | Page title displayed in header |
| `icon` | string | "fas fa-list" | Font Awesome icon class |
| `iconColor` | string | "#4a90e2" | Color of the icon |
| `viewOptions` | array | `[{label: "List", active: true}, ...]` | View option buttons |
| `onViewOptionClick` | function | - | Callback when view option is clicked |

### Filter Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `viewFilterLabel` | string | "VIEW:" | Label for the filter dropdown |
| `viewFilterOptions` | array | `[{value: "all", label: "All Items"}]` | Filter dropdown options |
| `defaultViewFilter` | string | "all" | Default selected filter |
| `onViewFilterChange` | function | - | Callback when filter changes |

### New Button Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `newButtonLabel` | string | "New Item" | Label for the new button |
| `newButtonIcon` | string | "fas fa-plus" | Icon for the new button |
| `onNewClick` | function | - | Callback when new button is clicked |

### Toolbar Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toolbarButtons` | array | `[{icon: "fas fa-edit", label: "EDIT"}, ...]` | Toolbar action buttons |

### Sort Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortLabel` | string | "QUICK SORT:" | Label for sort dropdown |
| `sortOptions` | array | `[{value: "default", label: "Default"}]` | Sort dropdown options |
| `defaultSortOption` | string | "default" | Default selected sort option |
| `onSortChange` | function | - | Callback when sort changes |

### Table Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | array | `[]` | Column definitions (see Column Configuration) |
| `data` | array | `[]` | Data array to display |
| `renderCell` | function | - | Custom cell renderer function |
| `onEdit` | function | - | Callback when edit is clicked |
| `onView` | function | - | Callback when view is clicked |
| `showCheckbox` | boolean | true | Show checkbox column |
| `onRowSelect` | function | - | Callback when row is selected |
| `selectedRows` | array | `[]` | Array of selected row IDs |

### Total Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalLabel` | string | "TOTAL:" | Label for total count |
| `customTotal` | number/string | - | Custom total value (overrides data.length) |

## Column Configuration

Columns are defined as an array of objects with the following structure:

```jsx
const columns = [
  {
    key: 'fieldName',        // Key to access data from row object
    label: 'COLUMN HEADER',  // Column header text
    width: 'auto',           // Column width (optional)
    type: 'text',            // Column type (optional)
    badgeStyle: (value, row) => ({}) // Custom badge styling (for type: 'badge')
  }
];
```

### Column Types

#### 1. Edit/View Column
```jsx
{
  key: 'editView',
  label: 'EDIT | VIEW'
}
```
Automatically renders Edit and View buttons if `onEdit` and `onView` props are provided.

#### 2. Badge Column
```jsx
{
  key: 'status',
  label: 'STATUS',
  type: 'badge',
  badgeStyle: (value, row) => {
    if (value === 'EXPIRED') {
      return { background: '#f44336', color: 'white' };
    }
    return { background: '#4caf50', color: 'white' };
  }
}
```

#### 3. Amount/Number Column
```jsx
{
  key: 'amount',
  label: 'AMOUNT',
  type: 'amount'  // or 'number'
}
```
Automatically formats numbers with thousand separators and 2 decimal places.

#### 4. Link Column
```jsx
{
  key: 'documentNumber',
  label: 'DOCUMENT NUMBER',
  type: 'link'
}
```
Applies blue link styling to the value.

#### 5. Text Column (Default)
```jsx
{
  key: 'name',
  label: 'NAME'
}
```
Displays plain text. This is the default if no type is specified.

## Advanced Usage Examples

### Example 1: Sales Orders List
```jsx
<ReusableListView
  title="Sales Orders"
  icon="fas fa-shopping-cart"
  iconColor="#28a745"
  columns={[
    { key: 'editView', label: 'EDIT | VIEW' },
    { key: 'orderNumber', label: 'ORDER #', type: 'link' },
    { key: 'customer', label: 'CUSTOMER' },
    { key: 'date', label: 'DATE' },
    { 
      key: 'status', 
      label: 'STATUS', 
      type: 'badge',
      badgeStyle: (value) => ({
        background: value === 'Completed' ? '#4caf50' : '#ff9800',
        color: 'white'
      })
    },
    { key: 'total', label: 'TOTAL', type: 'amount' }
  ]}
  data={salesOrders}
  onEdit={handleEdit}
  onView={handleView}
  onNewClick={handleNewOrder}
  newButtonLabel="New Sales Order"
/>
```

### Example 2: Purchase Orders List
```jsx
<ReusableListView
  title="Purchase Orders"
  icon="fas fa-file-invoice-dollar"
  iconColor="#dc2626"
  viewFilterOptions={[
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'received', label: 'Received' }
  ]}
  sortOptions={[
    { value: 'date', label: 'Date' },
    { value: 'vendor', label: 'Vendor' },
    { value: 'amount', label: 'Amount' }
  ]}
  columns={purchaseOrderColumns}
  data={purchaseOrders}
  onEdit={handleEdit}
  onView={handleView}
/>
```

### Example 3: Custom Cell Rendering
```jsx
const customRenderCell = (row, column) => {
  if (column.key === 'customer') {
    return (
      <div>
        <strong>{row.customerName}</strong>
        <br />
        <small style={{ color: '#999' }}>{row.customerEmail}</small>
      </div>
    );
  }
  
  if (column.key === 'actions') {
    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => handleApprove(row)}>Approve</button>
        <button onClick={() => handleReject(row)}>Reject</button>
      </div>
    );
  }
  
  // Fall back to default rendering
  return row[column.key] || '-';
};

<ReusableListView
  columns={columns}
  data={data}
  renderCell={customRenderCell}
/>
```

### Example 4: With Row Selection
```jsx
const [selectedRows, setSelectedRows] = useState([]);

const handleRowSelect = (row, isSelected) => {
  if (isSelected) {
    setSelectedRows([...selectedRows, row.id]);
  } else {
    setSelectedRows(selectedRows.filter(id => id !== row.id));
  }
};

const handleBulkDelete = () => {
  console.log('Delete rows:', selectedRows);
};

<ReusableListView
  columns={columns}
  data={data}
  showCheckbox={true}
  selectedRows={selectedRows}
  onRowSelect={handleRowSelect}
  toolbarButtons={[
    { 
      icon: 'fas fa-trash', 
      label: 'DELETE SELECTED',
      onClick: handleBulkDelete
    }
  ]}
/>
```

## Styling

The component uses the existing `Enquiries.css` file. All styles are pre-defined and consistent with the application design. No additional CSS is needed.

### Key CSS Classes Used:
- `.enquiries-list` - Main container
- `.page-header` - Header section
- `.list-controls` - Filter and new button section
- `.list-filters` - Toolbar and sort section
- `.enquiries-table-container` - Table wrapper
- `.enquiries-table` - Table element
- `.view-link` - Edit/View links
- `.status-badge` - Status badges
- `.doc-number` - Document number links
- `.amount` - Amount/number fields

## Best Practices

1. **Always provide unique IDs**: Ensure each data object has a unique `id` field for proper row selection and rendering.

2. **Use appropriate column types**: Use `type: 'amount'` for monetary values, `type: 'badge'` for status indicators, etc.

3. **Keep column keys consistent**: Use the same key names as your data object properties.

4. **Provide meaningful labels**: Use clear, uppercase labels for column headers.

5. **Handle empty states**: The component automatically shows "No data available" when the data array is empty.

6. **Use callbacks wisely**: Provide `onEdit`, `onView`, and other callbacks only when needed.

7. **Configure toolbar buttons**: Only include toolbar buttons that are relevant to your use case.

## Migration from Existing Components

To migrate an existing list component to use `ReusableListView`:

1. **Extract your data structure**
2. **Define column configuration** based on your table headers
3. **Map your event handlers** to the appropriate props
4. **Replace your JSX** with the `ReusableListView` component
5. **Test thoroughly** to ensure all functionality works

## Support

For questions or issues with the ReusableListView component, refer to:
- The example file: `ReusableListViewExample.jsx`
- The existing quotations list: `ViewQuotations.jsx`
- The CSS file: `Enquiries.css`
