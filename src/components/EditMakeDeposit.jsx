import React from 'react';
import CreateMakeDeposit from './CreateMakeDeposit';

const EditMakeDeposit = ({ setCurrentPage }) => {
  return <CreateMakeDeposit setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditMakeDeposit;
