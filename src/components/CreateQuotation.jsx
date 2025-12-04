import React from 'react';
import Quotation from './Quotation';

const CreateQuotation = ({ setCurrentPage }) => {
  return <Quotation setCurrentPage={setCurrentPage} isEdit={false} />;
};

export default CreateQuotation;
