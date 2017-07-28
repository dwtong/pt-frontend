import React from 'react';
import { borderStyle } from '../styles';

const OrderPaper = ({ children }) =>
  <div style={borderStyle}>
    <h3>Paper Allocation</h3>
    {children}
  </div>

export default OrderPaper;
