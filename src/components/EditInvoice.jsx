import React from 'react';
import CreateInvoice from './CreateInvoice';

const EditInvoice = ({ setCurrentPage }) => {
  return <CreateInvoice setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditInvoice;
