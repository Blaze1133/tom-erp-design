import React from 'react';
import EnterCashSales from './EnterCashSales';

const EditCashSale = ({ setCurrentPage }) => {
  return <EnterCashSales setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditCashSale;
