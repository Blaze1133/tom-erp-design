import React from 'react';
import SalesOrder from './SalesOrder';

const EditSalesOrder = ({ setCurrentPage }) => {
  return <SalesOrder setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditSalesOrder;
