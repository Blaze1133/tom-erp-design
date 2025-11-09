import React from 'react';
import CreateFulfillOrder from './CreateFulfillOrder';

const EditFulfillOrder = ({ setCurrentPage }) => {
  return <CreateFulfillOrder setCurrentPage={setCurrentPage} isEdit={true} />;
};

export default EditFulfillOrder;
