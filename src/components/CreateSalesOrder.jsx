import React from 'react';
import SalesOrder from './SalesOrder';

const CreateSalesOrder = ({ setCurrentPage }) => {
  return <SalesOrder setCurrentPage={setCurrentPage} isEdit={false} />;
};

export default CreateSalesOrder;
