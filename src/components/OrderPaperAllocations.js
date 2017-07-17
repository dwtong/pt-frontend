import React, { Component } from 'react';
import { borderStyle } from '../styles';
import AllocatedQuantityFields from './AllocatedQuantityFields';

const OrderPaperAllocations = ({ paperSources, paperRequired }) =>
  <div>
    <h3>Paper Allocation</h3>
    {paperRequired.map(paperType =>
      <div style={borderStyle}>
        <AllocatedQuantityFields paperType={paperType} paperSources={paperSources}/>
      </div>
    )}
  </div>

export default OrderPaperAllocations;
