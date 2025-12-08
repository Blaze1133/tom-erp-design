# Reusable Detail View Component Guide

## Overview
The `ReusableDetailView` component is a highly configurable detail/view screen component that provides a consistent design across the application. It's based on the quotation detail view design and can be reused for any detail-based interface.

## Location
- **Component**: `src/components/ReusableDetailView.jsx`
- **Example**: `src/components/ReusableDetailViewExample.jsx`
- **Styles**: Uses `src/components/Enquiries.css`

## Features
- ✅ Fully configurable through props
- ✅ No hardcoded values
- ✅ Consistent styling across the application
- ✅ Collapsible sections
- ✅ Tab navigation support
- ✅ Table rendering with summary
- ✅ Custom field rendering
- ✅ Badge/status display
- ✅ Responsive layout

## Basic Usage

```jsx
import ReusableDetailView from './ReusableDetailView';

const MyDetailComponent = () => {
  const sections = [
    {
      key: 'info',
      title: 'Information',
      fields: [
        { label: 'NAME', value: 'John Doe' },
        { label: 'EMAIL', value: 'john@example.com' }
      ]
    }
  ];

  return (
    <ReusableDetailView
      title="User Details"
      icon="fas fa-user"
      sections={sections}
    />
  );
};
```

## Props Reference

### Header Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Detail View" | Page title displayed in header |
| `icon` | string | "fas fa-file" | Font Awesome icon class |
| `iconColor` | string | "#4a90e2" | Color of the icon |
| `subtitle` | array | `[]` | Array of subtitle items (see Subtitle Configuration) |
| `headerActions` | array | `[...]` | Header action buttons (see Header Actions) |

### Toolbar Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toolbarButtons` | array | `[...]` | Toolbar action buttons (see Toolbar Buttons) |
| `showActionsDropdown` | boolean | false | Show actions dropdown button |

### Content Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | array | `[]` | Section configurations (see Section Configuration) |
| `tabs` | array | `[]` | Tab configurations (see Tab Configuration) |

### Footer Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `footerButtons` | array | `[]` | Footer action buttons |

### Additional Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | "" | Additional CSS class |
| `children` | ReactNode | - | Custom content |

## Configuration Details

### Subtitle Configuration

Subtitles appear below the main title in the header:

```jsx
const subtitle = [
  { text: 'Q21TOM00025', badge: false },
  { text: '612 Raise Pte Ltd', badge: false },
  { 
    text: 'EXPIRED', 
    badge: true, 
    badgeColor: '#f44336'  // or use badgeStyle: { background: '#f44336', color: 'white' }
  }
];
```

### Header Actions Configuration

Header actions are buttons displayed on the right side of the header:

```jsx
const headerActions = [
  { 
    icon: "fas fa-arrow-left", 
    label: "", 
    onClick: handleBack
  },
  { 
    icon: "fas fa-arrow-right", 
    label: "", 
    onClick: handleNext
  },
  { 
    label: "List", 
    onClick: handleList
  },
  { 
    label: "Search", 
    onClick: handleSearch
  },
  { 
    label: "Customize", 
    onClick: handleCustomize
  }
];
```

### Toolbar Buttons Configuration

Toolbar buttons appear below the header:

```jsx
const toolbarButtons = [
  { 
    icon: "fas fa-edit", 
    label: "Edit", 
    primary: true,  // Red primary button
    onClick: handleEdit
  },
  { 
    icon: "fas fa-arrow-left", 
    label: "Back", 
    onClick: handleBack
  },
  { 
    icon: "fas fa-print", 
    label: "Print", 
    onClick: handlePrint
  }
];
```

### Section Configuration

Sections are collapsible content areas:

```jsx
const sections = [
  {
    key: 'primary-info',           // Unique key for the section
    title: 'Primary Information',  // Section title
    collapsible: true,             // Can be collapsed (default: true)
    fields: [                      // Array of fields
      { 
        label: 'CUSTOMER', 
        value: 'ABC Corp' 
      },
      { 
        label: 'AMOUNT', 
        value: 1500.50, 
        type: 'currency' 
      },
      { 
        label: 'STATUS', 
        value: 'Active',
        type: 'badge',
        badgeStyle: { background: '#4caf50', color: 'white' }
      }
    ],
    gridStyle: {}  // Optional: custom grid styles
  }
];
```

#### Field Types

1. **Text (default)**
```jsx
{ label: 'NAME', value: 'John Doe' }
```

2. **Currency**
```jsx
{ label: 'AMOUNT', value: 1500.50, type: 'currency' }
// Displays: $1500.50
```

3. **Percentage**
```jsx
{ label: 'DISCOUNT', value: 15, type: 'percentage' }
// Displays: 15%
```

4. **Date**
```jsx
{ label: 'DATE', value: '7/1/2022', type: 'date' }
```

5. **Badge**
```jsx
{ 
  label: 'STATUS', 
  value: 'Active',
  type: 'badge',
  badgeStyle: { background: '#4caf50', color: 'white' }
}
```

6. **Custom**
```jsx
{ 
  label: 'CUSTOM', 
  value: someData,
  type: 'custom',
  render: (value) => <div>Custom content: {value}</div>
}
```

### Custom Section Content

For complex sections, use `customContent`:

```jsx
const sections = [
  {
    key: 'custom-section',
    title: 'Custom Section',
    customContent: (
      <div>
        <p>Your custom JSX content here</p>
        <button>Custom Button</button>
      </div>
    )
  }
];
```

### Tab Configuration

Tabs provide tabbed navigation for different content areas:

#### Table Tab

```jsx
const tabs = [
  {
    key: 'items',
    label: 'Items',
    type: 'table',
    columns: [
      { key: 'item', label: 'ITEM' },
      { key: 'quantity', label: 'QTY' },
      { 
        key: 'amount', 
        label: 'AMOUNT',
        render: (value, row) => `$${value.toFixed(2)}`
      }
    ],
    data: [
      { item: 'Product A', quantity: 5, amount: 100.00 },
      { item: 'Product B', quantity: 3, amount: 75.50 }
    ],
    summary: [
      {
        label: 'SUBTOTAL',
        value: 175.50,
        render: (value) => `$${value.toFixed(2)}`
      },
      {
        label: 'TOTAL',
        value: 193.05,
        render: (value) => `$${value.toFixed(2)}`,
        style: { background: '#f8f9fa' },
        valueStyle: { color: '#4a90e2' }
      }
    ]
  }
];
```

#### Empty Tab

```jsx
{
  key: 'communication',
  label: 'Communication',
  type: 'empty',
  emptyMessage: 'No communication records'
}
```

#### Custom Tab

```jsx
{
  key: 'custom',
  label: 'Custom',
  customContent: (
    <div style={{ padding: '2rem' }}>
      <h3>Custom Tab Content</h3>
      <p>Your custom JSX here</p>
    </div>
  )
}
```

### Footer Buttons Configuration

Footer buttons appear at the bottom of the detail view:

```jsx
const footerButtons = [
  { 
    icon: "fas fa-edit", 
    label: "Edit", 
    primary: true, 
    onClick: handleEdit
  },
  { 
    icon: "fas fa-arrow-left", 
    label: "Back", 
    onClick: handleBack
  }
];
```

## Complete Examples

### Example 1: Sales Order Detail

```jsx
<ReusableDetailView
  title="Sales Order"
  icon="fas fa-shopping-cart"
  iconColor="#28a745"
  subtitle={[
    { text: 'SO-2024-001', badge: false },
    { text: 'ABC Corporation', badge: false },
    { text: 'PENDING', badge: true, badgeColor: '#ff9800' }
  ]}
  headerActions={[
    { icon: "fas fa-arrow-left", onClick: handleBack },
    { icon: "fas fa-arrow-right", onClick: handleNext },
    { label: "List", onClick: handleList }
  ]}
  toolbarButtons={[
    { icon: "fas fa-edit", label: "Edit", primary: true, onClick: handleEdit },
    { icon: "fas fa-print", label: "Print", onClick: handlePrint }
  ]}
  sections={[
    {
      key: 'order-info',
      title: 'Order Information',
      fields: [
        { label: 'ORDER #', value: 'SO-2024-001' },
        { label: 'CUSTOMER', value: 'ABC Corporation' },
        { label: 'DATE', value: '12/8/2025', type: 'date' },
        { label: 'TOTAL', value: 5000.00, type: 'currency' }
      ]
    }
  ]}
  tabs={[
    {
      key: 'items',
      label: 'Items',
      type: 'table',
      columns: [
        { key: 'item', label: 'ITEM' },
        { key: 'quantity', label: 'QTY' },
        { key: 'price', label: 'PRICE', render: (v) => `$${v.toFixed(2)}` }
      ],
      data: orderItems
    }
  ]}
/>
```

### Example 2: Invoice Detail

```jsx
<ReusableDetailView
  title="Invoice"
  icon="fas fa-file-invoice-dollar"
  iconColor="#dc2626"
  subtitle={[
    { text: 'INV-2024-001', badge: false },
    { text: 'PAID', badge: true, badgeColor: '#4caf50' }
  ]}
  sections={[
    {
      key: 'invoice-details',
      title: 'Invoice Details',
      fields: [
        { label: 'INVOICE #', value: 'INV-2024-001' },
        { label: 'CUSTOMER', value: 'XYZ Industries' },
        { label: 'DUE DATE', value: '12/31/2025', type: 'date' },
        { 
          label: 'STATUS', 
          value: 'Paid',
          type: 'badge',
          badgeStyle: { background: '#4caf50', color: 'white' }
        }
      ]
    }
  ]}
  footerButtons={[
    { icon: "fas fa-download", label: "Download PDF", onClick: handleDownload },
    { icon: "fas fa-arrow-left", label: "Back", onClick: handleBack }
  ]}
/>
```

### Example 3: Custom Field Rendering

```jsx
const sections = [
  {
    key: 'custom-fields',
    title: 'Custom Information',
    fields: [
      {
        label: 'PROGRESS',
        value: 75,
        type: 'custom',
        render: (value) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '200px', 
              height: '10px', 
              background: '#e0e0e0', 
              borderRadius: '5px' 
            }}>
              <div style={{ 
                width: `${value}%`, 
                height: '100%', 
                background: '#4caf50', 
                borderRadius: '5px' 
              }}></div>
            </div>
            <span>{value}%</span>
          </div>
        )
      }
    ]
  }
];
```

## Styling

The component uses the existing `Enquiries.css` file. All styles are pre-defined and consistent with the application design.

### Key CSS Classes Used:
- `.enquiry-detail` - Main container
- `.detail-header` - Header section
- `.detail-toolbar` - Toolbar section
- `.detail-content` - Content area
- `.detail-section` - Collapsible sections
- `.section-header` - Section headers
- `.section-body` - Section content
- `.detail-grid` - Field grid layout
- `.detail-field` - Individual fields
- `.detail-tabs` - Tab container
- `.tabs-header` - Tab navigation
- `.tabs-content` - Tab content area
- `.detail-items-table` - Table styling
- `.summary-grid` - Summary cards
- `.detail-footer-actions` - Footer buttons

## Best Practices

1. **Always provide unique keys**: Ensure each section and tab has a unique `key` property.

2. **Use appropriate field types**: Use `type: 'currency'` for monetary values, `type: 'badge'` for status indicators, etc.

3. **Keep sections organized**: Group related fields into logical sections.

4. **Provide meaningful labels**: Use clear, uppercase labels for field names.

5. **Handle empty states**: Use empty tabs or custom content for sections with no data.

6. **Use callbacks wisely**: Provide onClick handlers only for functional buttons.

7. **Consistent badge colors**: Use consistent colors for similar statuses across the application.

## Migration from Existing Components

To migrate an existing detail component to use `ReusableDetailView`:

1. **Extract your data structure**
2. **Define section configurations** based on your existing sections
3. **Configure tabs** if you have tabbed content
4. **Map your event handlers** to the appropriate props
5. **Replace your JSX** with the `ReusableDetailView` component
6. **Test thoroughly** to ensure all functionality works

## Support

For questions or issues with the ReusableDetailView component, refer to:
- The example file: `ReusableDetailViewExample.jsx`
- The existing quotation detail: `ViewQuotationDetail.jsx`
- The CSS file: `Enquiries.css`
