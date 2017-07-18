import React from 'react';

const AllocatedQuantityResults = ({ required, allocated }) =>
  <div>
    <div>Paper Required: {required}</div>
    <div>Paper Allocated: {allocated}</div>
    <div><strong>Left to Allocate: {required - allocated}</strong></div>
  </div>

export default AllocatedQuantityResults;
