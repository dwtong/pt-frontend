import React from 'react';

const OrderPaperSummary = ({ required, allocated }) =>
  <div>
    <div>Paper Required: {required}</div>
    <div>Paper Allocated: {allocated}</div>
    <div><strong>Left to Allocate: {required - allocated}</strong></div>
  </div>

export default OrderPaperSummary;
