import React from 'react';
import CreateTransferFund from './CreateTransferFund';

const EditTransferFund = ({ setCurrentPage }) => {
  return <CreateTransferFund setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditTransferFund;
