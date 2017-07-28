import React from 'react';

const OrderPaperSummary = ({ required, allocated }) => {
  const req = typeof required === 'number' ? required : 0;
  const allo = typeof allocated === 'number' ? allocated : 0;

  return (
    <div>
      <div>Paper Required: {req}</div>
      <div>Paper Allocated: {allo}</div>
      <div><strong>Left to Allocate: {req - allo}</strong></div>
    </div>
  );
};


export default OrderPaperSummary;
