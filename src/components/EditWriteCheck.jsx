import React from 'react';
import CreateWriteCheck from './CreateWriteCheck';

const EditWriteCheck = ({ setCurrentPage }) => {
  return <CreateWriteCheck setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditWriteCheck;
