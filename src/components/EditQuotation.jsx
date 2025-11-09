import React from 'react';
import Quotation from './Quotation';

const EditQuotation = ({ setCurrentPage }) => {
  return <Quotation setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditQuotation;
