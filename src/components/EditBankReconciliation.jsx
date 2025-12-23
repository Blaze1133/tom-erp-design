import React from 'react';
import CreateBankReconciliation from './CreateBankReconciliation';

const EditBankReconciliation = ({ setCurrentPage }) => {
  return <CreateBankReconciliation setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditBankReconciliation;
