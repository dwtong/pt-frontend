import React from 'react';
import { borderStyle } from '../styles';

const OrderPaperItem = ({ children, label }) =>
  <div style={borderStyle}>
    <h5>{label}</h5>
    {children}
  </div>

export default OrderPaperItem;
